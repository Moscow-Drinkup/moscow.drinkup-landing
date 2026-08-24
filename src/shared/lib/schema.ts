import type {DrinkupEvent} from '@/shared/api';
import {LINKS, SITE} from '@/shared/config';

/**
 * Разметка schema.org. Собирается на этапе сборки и попадает в статический
 * HTML: поисковые и AI-краулеры структурированные данные из JavaScript
 * не собирают, им нужен готовый разметённый документ.
 */

const ORGANIZATION_ID = `${SITE.url}/#organization`;

const moscow = {
  '@type': 'Place',
  name: 'Москва',
  address: {'@type': 'PostalAddress', addressLocality: 'Москва', addressCountry: 'RU'},
  geo: {'@type': 'GeoCoordinates', latitude: 55.755826, longitude: 37.6173},
};

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: SITE.name,
  alternateName: 'Moscow DrinkUp — барные айти-митапы',
  url: `${SITE.url}/`,
  logo: `${SITE.url}${SITE.logo}`,
  description:
    'Неформальные барные айти-митапы в Москве: экспертные доклады и общение за кружкой пива, по четвергам.',
  address: {'@type': 'PostalAddress', addressLocality: 'Москва', addressCountry: 'RU'},
  areaServed: 'Москва',
  sameAs: [LINKS.telegramChannel, LINKS.telegramChat, LINKS.boosty, LINKS.networkly],
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: `${SITE.url}/`,
  inLanguage: 'ru-RU',
  publisher: {'@id': ORGANIZATION_ID},
});

/**
 * Мероприятие. Предстоящему добавляем сведения о регистрации: по правилам
 * schema.org offers описывает возможность попасть на событие, а у прошедших
 * её уже нет.
 */
export const eventSchema = (event: DrinkupEvent, {upcoming = false} = {}) => {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    url: `${SITE.url}/events/${event.id}`,
    description: `Барный айти-митап ${event.name} в Москве: экспертные доклады и общение за кружкой пива. Участие бесплатное, нужна регистрация.`,
    location: moscow,
    organizer: {'@id': ORGANIZATION_ID},
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
  };

  if (event.cover) {
    schema.image = event.cover;
  }

  if (event.start) {
    schema.startDate = event.start;
  }

  if (upcoming) {
    schema.offers = {
      '@type': 'Offer',
      url: event.url,
      price: '0',
      priceCurrency: 'RUB',
      availability: 'https://schema.org/InStock',
    };
  }

  return schema;
};

export const faqSchema = (items: {question: string; answer: string}[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {'@type': 'Answer', text: item.answer},
  })),
});

/** Хлебные крошки для вложенных страниц — помогают поиску показать путь. */
export const breadcrumbsSchema = (crumbs: {name: string; path: string}[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: `${SITE.url}${crumb.path}`,
  })),
});
