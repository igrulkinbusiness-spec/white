# Roads of Ireland - PRD

## Problem Statement
Информационный сайт на 10-15 страниц о дорогах Ирландии. Без коммерции, чисто информационные страницы для Google ADS. Двуязычный сайт (английский + ирландский/Gaeilge).

## User Personas
- **Основная аудитория**: Туристы, планирующие автопутешествие по Ирландии
- **Вторичная аудитория**: Новые резиденты Ирландии, изучающие местные правила дорожного движения

## Core Requirements
- 13 информационных страниц о дорогах Ирландии
- Двуязычность (английский + ирландский/Gaeilge)
- Цвета ирландского флага (зелёный, белый, оранжевый)
- Стиль путеводителя с качественными фото
- Форма обратной связи
- Favicon - клевер (Irish clover)

## What's Been Implemented (Dec 2025)

### Pages (13 total)
1. **Home** (/) - Главная с hero-секцией и навигацией
2. **Motorways** (/motorways) - Сеть мотор-трасс (M1, M50, etc.)
3. **Toll Roads** (/toll-roads) - Платные дороги и eFlow
4. **Traffic Rules** (/traffic-rules) - ПДД Ирландии (левостороннее движение)
5. **Scenic Routes** (/scenic-routes) - Wild Atlantic Way, Ring of Kerry
6. **Petrol Stations** (/petrol-stations) - Заправки и топливо
7. **Parking** (/parking) - Парковки и clampинг
8. **Road Signs** (/road-signs) - Двуязычные дорожные знаки
9. **Speed Limits** (/speed-limits) - Скоростные ограничения
10. **Emergency** (/emergency) - Экстренные службы 999/112
11. **Tips** (/tips) - Полезные советы
12. **About** (/about) - О проекте
13. **Contact** (/contact) - Контактная форма

### Features
- ✅ Двуязычность EN/GA (English/Irish) с переключателем в header
- ✅ Сохранение языка в localStorage
- ✅ Полный перевод всех 13 страниц на ирландский
- ✅ Адаптивный дизайн
- ✅ Dropdown меню навигации
- ✅ Форма обратной связи с MongoDB хранением
- ✅ Качественные фотографии Ирландии (Unsplash)
- ✅ Favicon - зелёный клевер

### Tech Stack
- Frontend: React + Tailwind CSS + Shadcn/UI
- Backend: FastAPI + MongoDB
- Localization: Custom React Context (useLanguage hook)

### Architecture
```
/app
├── backend/
│   └── server.py (FastAPI: /api/contact endpoint)
├── frontend/
│   ├── public/
│   │   └── index.html, favicon
│   ├── src/
│   │   ├── components/ (Header, Footer, shared components)
│   │   ├── i18n/ (LanguageContext, translations.js)
│   │   ├── pages/ (13 page components with en/ga content)
│   │   └── App.js (Router)
│   └── package.json
```

## Latest Update (Dec 2025) - COMPLETED
**Issue Fixed:** Language switching was only translating navigation, not page content.
**Solution:** Refactored TipsPage.jsx and AboutPage.jsx to use content objects with en/ga keys. Added contact page translations to translations.js.
**Testing:** All 13 pages verified - 100% translation coverage (EN ↔ GA).

## Prioritized Backlog

### P0 (Done)
- [x] 13 страниц контента об Ирландии
- [x] Английская + ирландская локализация (полная)
- [x] Форма обратной связи

### P1 (Next)
- [ ] SEO мета-теги для каждой страницы
- [ ] Sitemap.xml для поисковиков
- [ ] Schema.org разметка

### P2 (Future)
- [ ] Интерактивная карта маршрутов
- [ ] Калькулятор дола M50
- [ ] Больше языков (немецкий, французский)

## Deployment Notes
- **User's VPS:** Ubuntu 24.04 with Nginx, PHP-FPM, Docker (MongoDB)
- **Domain:** itforsstrasse.lat
- **Cloaking:** PHP-based TDS via index.php (user-managed)
- **Build:** `npm run build` → deploy to /var/www/strade-italia/frontend/build/
