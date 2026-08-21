import {useParams} from 'react-router-dom';
import {EventPage} from '../components/EventPage';
import {SubPage} from '../components/PageShell';
import {events} from '../generated-events';

export default function EventDetailPage() {
  const {id} = useParams();
  const event = events.find((e) => e.id === Number(id));
  if (!event) {
    return (
      <SubPage>
        <div style={{padding: '48px 24px', textAlign: 'center'}}>
          Страница не найдена — <a href="#/events">к списку мероприятий</a>
        </div>
      </SubPage>
    );
  }
  return (
    <SubPage>
      <EventPage event={event} />
    </SubPage>
  );
}
