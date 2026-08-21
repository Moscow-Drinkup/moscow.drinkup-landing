import {contentEvents} from '../content/events';
import {Page, SubPage} from '../components/PageShell';

export default function EventsPage() {
  return (
    <SubPage>
      <Page content={contentEvents} />
    </SubPage>
  );
}
