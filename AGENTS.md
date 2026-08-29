# AGENTS.md — Moscow DrinkUp

Лендинг барных айти-митапов в Москве: React + Vite + TypeScript на дизайн-системе
**Gravity UI** (`@gravity-ui/uikit` + `@gravity-ui/page-constructor`), хостинг — GitHub Pages.
Прод: https://drinkup.moscow · Репо: `Moscow-Drinkup/moscow.drinkup-landing` (deploy key `hermes-server`).

## Команды

```bash
npm install        # зависимости
npm run dev        # dev-сервер
npm run build      # node scripts/fetch-events.mjs && tsc -b && vite build → dist/
```

Деплой: push в `main` → GitHub Actions собирает, публикует на Pages и шлёт IndexNow-пинг (Bing/Yandex).

## Архитектура

```
src/
  app/App.tsx          # роутинг (HashRouter), провайдеры, ленивые роуты, OrgAnchor, AppFixes
  theme/               # токены бренда (тёмная тема, оранжевый #f09018) + JetBrains-шрифты
  content/             # контент страниц: shared (общее) + home/venues/partners/events
  components/
    layout/            # каркас: TopNav, PageShell (Page/SubPage)
    blocks/            # кастомные блоки page-constructor: gallery, team, events, next-event, reviews
  pages/               # страницы-маршруты (Venues, Partners, Events, EventDetail, EventPage)
  lib/seo.tsx          # per-route title/meta/og
  shims/url.ts         # браузерный шим Node-модуля url (обязателен для page-constructor)
scripts/
  fetch-events.mjs     # данные из API Networkly на этапе сборки
```

Кастомные блоки регистрируются в `components/layout/PageShell.tsx` (`custom.blocks` / `custom.subBlocks`).

## Данные о мероприятиях (важно)

- Источник: `https://networkly.app/api/events?name=Moscow%20DrinkUp` — тянется **на этапе сборки**
  скриптом `scripts/fetch-events.mjs` → `src/generated-events.ts` + `src/generated-jsonld.json` (gitignored).
- **Новый дринкап**: добавьте его id в таблицу `POST_BY_EVENT` в `scripts/fetch-events.mjs` —
  события без записи в таблице отфильтровываются и не попадают на сайт.
- Поля API: дата — `startDatetime` (не `start_datetime`), обложка — `cover.paths.to_webp`.
- Ссылки регистрации: **в футере** — на сообщество Networkly (список всех мероприятий);
  **в hero и карточке ближайшего события** — динамически на ближайшее (`nextEvent.url`).

## SEO (генерируется при сборке)

- JSON-LD (Organization / WebSite / Event) встраивается в `index.html` плагином `seoJsonLd`
  (`vite.config.ts`) из `src/generated-jsonld.json` — разметка обязана быть в начальном HTML
  (AI-краулеры и schema-рендер Google JS не исполняют).
- `public/sitemap.xml` — только `<lastmod>` (без `priority`/`changefreq`: Google игнорирует),
  hash-URLы нужны для Яндекса. `public/llms.txt` — для AI-краулеров (Google игнорирует).
- `public/robots.txt` — открыт всем, включая AI-краулеров (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot).
- IndexNow: ключ `public/<uuid>.txt`, пинг в `.github/workflows/deploy.yml`.

## Конвенции

- **Шрифты: только JetBrains Sans / JetBrains Mono** — переменные `--g-font-family-*` в `theme.css`
  с `!important` (иначе дефолты uikit Inter/Menlo перебивают); `button {font-family: inherit}`
  (Chrome по умолчанию ставит кнопкам Arial).
- **Gravity UI**: свои стили только точечно (theme.css + css кастомных блоков); не писать свои
  стили там, где есть токены/блоки дизайн-системы.
- **HashRouter + `base: './'`** — работает на Pages из любого места.
- **НЕ разделять вендоров на чанки** (`build.rollupOptions.output.manualChunks`) — сплит
  react/uikit/pc ломает CJS-интероп Gravity UI (uikit падает на `React.createContext`).
  Код-сплит только ленивыми роутами (`React.lazy`).
- Картинки: **без** `loading="lazy"` (в фоновых вкладках не догружаются); WebP; у
  изображений с неизвестным соотношением задавать `aspect-ratio` (CLS).

## Питфоллы (грабли, на которые уже наступили)

- page-constructor требует: алиасы `~@gravity-ui/...` в vite, шим `url`, `box-sizing: border-box`
  reset, `Theme.Dark` — enum именно из `@gravity-ui/page-constructor`.
- TabsBlock: контент таба рендерится **только если у item есть `text`**.
- Footer рендерит заголовки колонок `h6`, hero — `h2` в div: нормализация (h6→h2, h2→h1)
  делается в `AppFixes` (MutationObserver) — не удалять, без неё падают heading-order-аудиты.
- Прод-домен долго был без HTTPS-сертификата: Chrome грузит сайт по `http://`, но не по
  `https://` (не путать с поломкой сайта). Проверять локально или по http.
- Локальный аудит Lighthouse: гонять на тёплый Chrome (порт 9222), свежий Chrome даёт
  артефакт TTFB ~4s; симулированные метрики локально завышены — читать `observed-*`.

## Скиллы

Список закреплённых скиллов проекта — в **SKILLS.lock.md**. Перед профильными задачами
(SEO/GEO, аудит производительности, правки Gravity UI) загружать соответствующие скиллы
из этого списка, а не выдумывать реализацию.

При любой работе с `@gravity-ui/*` загружать официальный скилл **`gravity-ui`**
(установлен через `npx skills add gravity-ui/skills`): он маршрутизирует к правильному
пакету и актуальным API. Живой каталог экосистемы: `https://gravity-ui.com/llms.txt`,
версионные доки пакета: `https://gravity-ui.com/llms/<pkg>/<major>/llms.txt`.
