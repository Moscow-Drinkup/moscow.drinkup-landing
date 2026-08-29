# SKILLS.lock.md — закреплённые скиллы проекта Moscow DrinkUp

Скиллы, которые используются при работе над этим проектом. Перед новой сессией по проекту
убедитесь, что они установлены, и загружайте профильные скиллы перед задачами
(см. также AGENTS.md).

## Обязательные (ядро проекта)

| Скилл | Источник | Для чего используется |
|---|---|---|
| `gravity-ui-page-constructor` | самописный (создан для этого проекта) | Все правки на Gravity UI: блоки, тема, грабли page-constructor |
| `seo` | addyosmani/web-quality-skills (хаб) | Техническое SEO: meta, canonical, структурированные данные, чек-листы |
| `seo-geo` | agricidaniel/claude-seo (хаб) | GEO: видимость в AI-поиске (ChatGPT/Perplexity), llms.txt, AI-краулеры |
| `seo-local` | agricidaniel/claude-seo (хаб) | Локальное SEO: гео-сигналы Москвы, NAP, локальная разметка |
| `seo-schema` | agricidaniel/claude-seo (хаб) | Schema.org: генерация и валидация JSON-LD |
| `seo-sitemap` | agricidaniel/claude-seo (хаб) | Правила sitemap: lastmod, без priority/changefreq |
| `seo-technical` | agricidaniel/claude-seo (хаб) | Технический аудит: robots, IndexNow, JS-рендеринг, CWV |
| `seo-page` | agricidaniel/claude-seo (хаб) | Постраничный on-page анализ |
| `seo-audit` | agricidaniel/claude-seo (хаб) | Полный SEO-аудит сайта |

## Поддерживающие (для отдельных задач)

| Скилл | Для чего используется |
|---|---|
| `web-performance-audit` | Аудит производительности и доступности (методики Lighthouse/Web Vitals) |
| `spa-seo-and-social-previews` | SPA SEO и социальные превью (Open Graph) |
| `github-pages-deployment` | Деплой статики на GitHub Pages |
| `dogfood` | Системный QA-прогон сайта |

## Установка (если скиллы отсутствуют на новой машине)

```bash
# SEO-набор из хаба (при rate-limit GitHub API — git clone репозитория
# addyosmani/web-quality-skills и agricidaniel/claude-seo, копия папок skills/* в ~/.hermes/skills/seo/)
hermes skills install "skills-sh/addyosmani/web-quality-skills/seo"
hermes skills install "skills-sh/agricidaniel/claude-seo/seo"     # сюита seo-* (все 8)
# остальные (если не предустановлены)
hermes skills install web-performance-audit
hermes skills install spa-seo-and-social-previews
hermes skills install github-pages-deployment
hermes skills install dogfood
```

`gravity-ui-page-constructor` — самописный, живёт в `~/.hermes/skills/software-development/`.
