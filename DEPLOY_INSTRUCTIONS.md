# Strade d'Italia - Инструкция по деплою на Ubuntu VPS

## Требования
- Ubuntu 20.04 / 22.04 / 24.04
- Минимум 1GB RAM, 20GB диск
- Домен, направленный на IP сервера

## Шаг 1: Подключитесь к серверу
```bash
ssh root@YOUR_SERVER_IP
```

## Шаг 2: Запустите скрипт установки
```bash
# Скачайте и запустите скрипт
curl -o deploy.sh https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/deploy.sh
chmod +x deploy.sh
./deploy.sh
```

## Или выполните вручную:

### 2.1 Обновление системы
```bash
apt update && apt upgrade -y
```

### 2.2 Установка зависимостей
```bash
# Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Python и pip
apt install -y python3 python3-pip python3-venv

# Nginx
apt install -y nginx

# MongoDB
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | gpg --dearmor -o /usr/share/keyrings/mongodb-server-7.0.gpg
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-7.0.list
apt update
apt install -y mongodb-org
systemctl start mongod
systemctl enable mongod
```

### 2.3 Клонирование репозитория
```bash
cd /var/www
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git strade-italia
cd strade-italia
```

### 2.4 Настройка Backend
```bash
cd /var/www/strade-italia/backend

# Создание виртуального окружения
python3 -m venv venv
source venv/bin/activate

# Установка зависимостей
pip install -r requirements.txt

# Настройка .env
cat > .env << 'EOF'
MONGO_URL=mongodb://localhost:27017
DB_NAME=strade_italia
CORS_ORIGINS=https://YOUR_DOMAIN.com,http://YOUR_DOMAIN.com
EOF
```

### 2.5 Настройка Frontend
```bash
cd /var/www/strade-italia/frontend

# Создание .env
cat > .env << 'EOF'
REACT_APP_BACKEND_URL=https://YOUR_DOMAIN.com
EOF

# Установка и сборка
npm install
npm run build
```

### 2.6 Systemd сервис для Backend
```bash
cat > /etc/systemd/system/strade-backend.service << 'EOF'
[Unit]
Description=Strade Italia Backend
After=network.target mongod.service

[Service]
User=www-data
Group=www-data
WorkingDirectory=/var/www/strade-italia/backend
Environment="PATH=/var/www/strade-italia/backend/venv/bin"
ExecStart=/var/www/strade-italia/backend/venv/bin/uvicorn server:app --host 127.0.0.1 --port 8001
Restart=always

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl start strade-backend
systemctl enable strade-backend
```

### 2.7 Настройка Nginx
```bash
cat > /etc/nginx/sites-available/strade-italia << 'EOF'
server {
    listen 80;
    server_name YOUR_DOMAIN.com www.YOUR_DOMAIN.com;

    # Frontend (React build)
    location / {
        root /var/www/strade-italia/frontend/build;
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://127.0.0.1:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

ln -s /etc/nginx/sites-available/strade-italia /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default
nginx -t
systemctl restart nginx
```

### 2.8 SSL сертификат (Let's Encrypt)
```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d YOUR_DOMAIN.com -d www.YOUR_DOMAIN.com
```

## Шаг 3: Проверка
```bash
# Статус сервисов
systemctl status mongod
systemctl status strade-backend
systemctl status nginx

# Логи backend
journalctl -u strade-backend -f
```

## DNS настройки
В панели управления вашего домена добавьте:
```
A    @       YOUR_SERVER_IP
A    www     YOUR_SERVER_IP
```

## Готово!
Сайт будет доступен по адресу: https://YOUR_DOMAIN.com
