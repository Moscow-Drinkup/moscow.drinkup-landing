import {contentPartners} from '../content/partners';
import {Page, SubPage} from '../components/layout/PageShell';

export default function PartnersPage() {
  return (
    <SubPage>
      <Page content={contentPartners} />
    </SubPage>
  );
}
