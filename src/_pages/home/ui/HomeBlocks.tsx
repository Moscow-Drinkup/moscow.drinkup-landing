import {
  Col,
  Grid,
  HeroBlock,
  InfoBlock,
  PageConstructorProvider,
  Row,
  Theme,
} from '@gravity-ui/page-constructor';
import {EXTERNAL_LINK_ATTRS, LINKS} from '@/shared/config';
import {withBase} from '@/shared/lib';

/**
 * Блоки Gravity UI, отрисованные напрямую, без контейнера PageConstructor.
 *
 * Контейнер безусловно оборачивает содержимое в собственный <main> (см. Layout
 * в page-constructor), отключить это пропсами нельзя — на странице получалось
 * несколько элементов main. Документация пакета допускает использование блоков
 * и сетки отдельно, чем мы и пользуемся: разметку страницы задаёт Astro.
 *
 * Компоненты рендерятся на этапе сборки и не гидрируются.
 */

export const HeroSection = ({registrationUrl}: {registrationUrl: string}) => (
  <PageConstructorProvider theme={Theme.Dark}>
    <HeroBlock
      overtitle="Барные митапы для IT-сообщества · Москва · по четвергам"
      title="Moscow DrinkUp"
      text="Собираемся выпить пиво, поделиться болячками, поныть — и послушать экспертные доклады за кружкой пива. Афтепати и митап в одном формате, без разделения на официальное и неформальное."
      buttons={[
        {
          text: 'Зарегистрироваться',
          url: registrationUrl,
          primary: true,
          extraProps: EXTERNAL_LINK_ATTRS,
        },
        {
          text: 'Поддержать',
          url: LINKS.boosty,
          primary: false,
          extraProps: EXTERNAL_LINK_ATTRS,
        },
      ]}
      additionalInfo="Участие бесплатное. Регистрация и анонсы — в сообществе на Networkly."
      theme="dark"
      verticalOffset="l"
    />
  </PageConstructorProvider>
);

export const AboutSection = () => (
  <PageConstructorProvider theme={Theme.Dark}>
    <Grid>
      <Row>
        <Col>
          <InfoBlock
            theme="dark"
            backgroundColor="#1a1206"
            leftContent={{
              title: 'Дринкап как концепция',
              text: 'Дринкап — это объединение форматов афтепати и митапа. Основное различие в том, что нет разделения между формальной и неформальной частью: зрители совмещают приятное с полезным — слушают технические (и не только) доклады за кружкой пива.',
              additionalInfo:
                'В прошлом мы — часть международного объединения beerjs.global. Продолжаем как Moscow DrinkUp.',
            }}
            rightContent={{
              text: 'Это сообщество для тех, чьи айтишные проблемы в полной мере не понимают даже коллеги. Мы собираемся по четвергам выпить пиво, поделиться болячками, поныть и просто пообщаться.',
              list: [
                {
                  title: 'Формат',
                  text: 'Афтепати × митап: доклады и общение без разделения на «сцену» и «после».',
                },
                {
                  title: 'Периодичность',
                  text: 'Встречаемся по четвергам, несколько раз в год.',
                },
                {
                  title: 'Билеты',
                  text: 'Мероприятия бесплатные — билеты не продаём, поэтому в поиске партнёров.',
                },
              ],
              links: [
                {text: 'Все мероприятия', url: withBase('/events')},
                {text: 'Как стать партнёром', url: withBase('/partners')},
              ],
            }}
          />
        </Col>
      </Row>
    </Grid>
  </PageConstructorProvider>
);
