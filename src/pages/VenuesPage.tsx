import {contentVenues} from '../content/venues';
import {Page, SubPage} from '../components/layout/PageShell';

export default function VenuesPage() {
  return (
    <SubPage>
      <Page content={contentVenues} />
    </SubPage>
  );
}
