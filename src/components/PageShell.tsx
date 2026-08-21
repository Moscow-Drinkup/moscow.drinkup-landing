import {PageConstructor} from '@gravity-ui/page-constructor';
import type {PageContent} from '@gravity-ui/page-constructor';
import GalleryBlock from './GalleryBlock';
import TeamBlock from './TeamBlock';
import EventsBlock from './EventsBlock';
import NextEventCard from './NextEventCard';
import ReviewQuote from './ReviewQuote';

// Кастомные блоки и саб-блоки, зарегистрированные для PageConstructor
export const custom = {
  blocks: {
    gallery: GalleryBlock as unknown as React.ComponentType<any>,
    team: TeamBlock as unknown as React.ComponentType<any>,
    events: EventsBlock as unknown as React.ComponentType<any>,
    nextEventCard: NextEventCard as unknown as React.ComponentType<any>,
  },
  subBlocks: {
    review: ReviewQuote as unknown as React.ComponentType<any>,
  },
};

export function Page({content}: {content: PageContent}) {
  return <PageConstructor content={content} custom={custom} />;
}

export const SubPage = ({children}: {children: React.ReactNode}) => (
  <div className="drinkup-page drinkup-page--sub">{children}</div>
);
