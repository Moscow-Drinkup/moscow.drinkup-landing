import {BlockType} from '@gravity-ui/page-constructor';
import type {PageContent} from '@gravity-ui/page-constructor';
import {footerBlock, partnerQuotes} from './shared';

/* ================= ПАРТНЁРАМ ================= */
export const contentPartners: PageContent = {
  background: {color: '#0b0907'},
  blocks: [
    {
      type: BlockType.HeaderBlock,
      overtitle: 'Для партнёров',
      title: 'Партнёрам',
      description:
        'Спонсорские активности на дринкапах обеспечивают глубокое касание аудитории и формируют приятные ассоциации с брендами.',
      background: {color: '#0b0907'},
      theme: 'dark',
      verticalOffset: 'l',
    },
    {
      type: BlockType.InfoBlock,
      theme: 'dark',
      backgroundColor: '#1a1206',
      leftContent: {
        title: 'Спонсорство дринкапа',
        text: 'Благодаря дружественной атмосфере дринкапов спонсорские активности обеспечивают глубокое касание аудитории и формируют приятные ассоциации с брендами. Мы готовы к сотрудничеству в удобном для вас формате — финансовом (закрытие чека мероприятия) или нефинансовом (площадка, оборудование и т.д.).',
        list: [
          {
            title: 'Активности с брендом',
            text: 'Проведём совместные активности с упоминанием вашего бренда.',
          },
          {
            title: 'Спикеры',
            text: 'Пригласим интересных спикеров из Москвы и других городов.',
          },
          {
            title: 'Места для сотрудников',
            text: 'Зарезервируем места для ваших сотрудников.',
          },
        ],
        links: [
          {text: 'Посмотреть мероприятия', url: '#/events'},
          {text: 'Напишите организаторам', url: '#/?orgs'},
        ],
      },
      rightContent: {
        title: 'Кейс «Пивка для рывка»',
        text: 'На дринкапе №4 мы опробовали спонсорский пакет поддержки мероприятия: на средства спонсоров организовали акцию — посетителей на баре ждало welcome-пиво.',
        links: [{text: 'Страница дринкапа №4', url: '#/events/4453'}],
      },
    },
    {
      type: BlockType.CardLayoutBlock,
      title: 'Отзывы партнёров',
      children: partnerQuotes,
    },
    footerBlock,
  ],
};
