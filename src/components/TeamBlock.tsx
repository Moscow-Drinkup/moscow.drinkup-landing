import {Card} from '@gravity-ui/uikit';
import './team.css';

export type TeamMember = {
  name: string;
  role: string;
  tg: string;
  photo: string;
};

export type TeamBlockProps = {
  title?: string;
  members: TeamMember[];
};

const TeamBlock = ({title, members}: TeamBlockProps) => {
  return (
    <div className="drinkup-team-section">
      {title && <h2 className="drinkup-team-title">{title}</h2>}
      <div className="drinkup-team">
        {members.map((m) => (
          <Card key={m.name} className="drinkup-team-card" view="outlined" type="container" size="m">
            <img className="drinkup-team-photo" src={m.photo} alt={m.name} />
            <div className="drinkup-team-name">{m.name}</div>
            <div className="drinkup-team-role">{m.role}</div>
            <a className="drinkup-team-tg" href={`https://t.me/${m.tg.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
              {m.tg}
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamBlock;
