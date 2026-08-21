import {useParams} from 'react-router-dom';
import {EventPage} from './EventPage';
import {SubPage} from '../components/layout/PageShell';
import {events} from '../generated-events';

export default function EventDetailPage() {
  const {id} = useParams();
  const event = events.find((e) => e.id === Number(id));
  if (!event) {
    return (
      <SubPage>
        <main className="drinkup-event-main">
          <div style={{padding: '48px 24px', textAlign: 'center'}}>
            Страница не найдена — <a href="#/events">к списку мероприятий</a>
          </div>
        </main>
      </SubPage>
    );
  }
  return (
    <SubPage>
      <main className="drinkup-event-main">
        <EventPage event={event} />
      </main>
    </SubPage>
  );
}
