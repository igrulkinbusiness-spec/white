#!/bin/bash

# Strade d'Italia - Автоматический скрипт деплоя для Ubuntu
# Использование: ./deploy.sh YOUR_DOMAIN.com

set -e

DOMAIN=${1:-"example.com"}
APP_DIR="/var/www/strade-italia"

echo "=========================================="
echo "  Strade d'Italia - Deploy Script"
echo "  Domain: $DOMAIN"
echo "=========================================="

# Проверка root
if [ "$EUID" -ne 0 ]; then
    echo "Запустите скрипт от root: sudo ./deploy.sh $DOMAIN"
    exit 1
fi

echo "[1/8] Обновление системы..."
apt update && apt upgrade -y

echo "[2/8] Установка Node.js 20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

echo "[3/8] Установка Python..."
apt install -y python3 python3-pip python3-venv git

echo "[4/8] Установка Nginx..."
apt install -y nginx

echo "[5/8] Установка MongoDB..."
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | gpg --dearmor -o /usr/share/keyrings/mongodb-server-7.0.gpg
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/7.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-7.0.list
apt update
apt install -y mongodb-org
systemctl start mongod
systemctl enable mongod

echo "[6/8] Настройка Backend..."
cd $APP_DIR/backend
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt

cat > .env << EOF
MONGO_URL=mongodb://localhost:27017
DB_NAME=strade_italia
CORS_ORIGINS=https://$DOMAIN,http://$DOMAIN,https://www.$DOMAIN
EOF

# Systemd service
cat > /etc/systemd/system/strade-backend.service << EOF
[Unit]
Description=Strade Italia Backend
After=network.target mongod.service

[Service]
User=www-data
Group=www-data
WorkingDirectory=$APP_DIR/backend
Environment="PATH=$APP_DIR/backend/venv/bin"
ExecStart=$APP_DIR/backend/venv/bin/uvicorn server:app --host 127.0.0.1 --port 8001
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
EOF

chown -R www-data:www-data $APP_DIR/backend
systemctl daemon-reload
systemctl start strade-backend
systemctl enable strade-backend

echo "[7/8] Сборка Frontend..."
cd $APP_DIR/frontend

cat > .env << EOF
REACT_APP_BACKEND_URL=https://$DOMAIN
EOF

npm install
npm run build

echo "[8/8] Настройка Nginx..."
cat > /etc/nginx/sites-available/strade-italia << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    # Frontend
    location / {
        root $APP_DIR/frontend/build;
        try_files \$uri \$uri/ /index.html;
        
        # Кэширование статики
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }

    # Backend API
    location /api {
        proxy_pass http://127.0.0.1:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

ln -sf /etc/nginx/sites-available/strade-italia /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl restart nginx

echo ""
echo "=========================================="
echo "  Деплой завершён!"
echo "=========================================="
echo ""
echo "Сайт доступен: http://$DOMAIN"
echo ""
echo "Для SSL выполните:"
echo "  apt install -y certbot python3-certbot-nginx"
echo "  certbot --nginx -d $DOMAIN -d www.$DOMAIN"
echo ""
echo "Проверка статуса:"
echo "  systemctl status strade-backend"
echo "  systemctl status nginx"
echo ""
