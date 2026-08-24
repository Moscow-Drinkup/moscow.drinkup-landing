/**
 * Внутренние ссылки строятся только через эти помощники.
 *
 * Обычная сборка идёт в корень домена, а превью пул-реквеста — в подпапку
 * (`/pr-preview/pr-12/`). Astro кладёт актуальный префикс в
 * `import.meta.env.BASE_URL`, но не переписывает href в разметке: абсолютный
 * путь `/events` в превью увёл бы на несуществующий адрес.
 */

const BASE = import.meta.env.BASE_URL;

/** Собирает внутреннюю ссылку с учётом базового пути сборки. */
export const withBase = (path: string): string => {
  const normalized = path.replace(/^\//, '');
  const base = BASE.endsWith('/') ? BASE : `${BASE}/`;
  return `${base}${normalized}`;
};

/** Сборка идёт в подпапку — значит это превью пул-реквеста, а не боевой сайт. */
export const isPreviewBuild = (): boolean => BASE !== '/';
