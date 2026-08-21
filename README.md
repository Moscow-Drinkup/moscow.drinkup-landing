# Moscow DrinkUp — сайт комьюнити

Лендинг барных айти-митапов в Москве: экспертные доклады за кружкой пива, по четвергам.
Живой сайт: [drinkup.moscow](https://drinkup.moscow) (GitHub Pages, автодеплой из `main`).

## Стек

- **React + Vite + TypeScript**
- **Gravity UI** — `@gravity-ui/uikit` + `@gravity-ui/page-constructor` (дизайн-система, свои стили только точечно)
- Шрифты: только **JetBrains Sans / JetBrains Mono** (self-hosted, `public/fonts/`)
- Хостинг: **GitHub Pages** + Actions (`deploy.yml`)

## Структура

```
src/
  content/        # контент страниц (home, venues, partners, events) + общий shared
  components/     # кастомные блоки (gallery, team, events, nextEventCard, review) и сервисы
  pages/          # ленивые обёртки маршрутов
  theme.css       # брендовые токены (тёмная тема, оранжевый #f09018)
  fonts.css       # @font-face JetBrains
scripts/
  fetch-events.mjs   # данные из API Networkly → src/generated-* (gitignored) + sitemap/llms.txt
  lighthouse-*.mjs   # локальные Lighthouse-аудиты
  make-og-banner.py  # генерация og-баннера 1200×630
  gzip-server.py     # локальный сервер с gzip для аудита
```

## Команды

```bash
npm install        # установка зависимостей
npm run dev        # dev-сервер
npm run build      # fetch-events → tsc → vite build (dist/)
```

## Деплой

Пуш в ветку `main` → GitHub Actions собирает и публикует на https://drinkup.moscow.
После деплоя CI отправляет пинг **IndexNow** (Bing/Yandex) для быстрой индексации.

## Важно знать

- **Данные о мероприятиях** приходят из API Networkly **на этапе сборки**
  (`scripts/fetch-events.mjs`): события, даты, обложки. При анонсе нового дринкапа добавьте его
  id в таблицу `POST_BY_EVENT` в этом скрипте — иначе событие отфильтруется.
- **SEO генерируется при сборке**: JSON-LD (Organization/WebSite/Event) встраивается в `index.html`,
  `sitemap.xml` и `llms.txt` обновляются автоматически. `src/generated-*` — в `.gitignore`.
- **Роутинг — HashRouter** (`#/events`, `#/venues`, `#/partners`), `base: './'` — работает на
  GitHub Pages из любого места.
- Не разделяйте вендоров на чанки (`manualChunks`): сплит react/uikit ломает Gravity UI
  (CJS-интероп, `React.createContext`). Ленивые роуты уже дают отдельные чанки под-страниц.
- Ссылка «Регистрация на дринкап» в футере ведёт на сообщество Networkly (список всех
  мероприятий); кнопка в hero — на ближайшее событие из API.
