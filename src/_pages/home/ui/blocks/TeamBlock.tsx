import {EXTERNAL_LINK_ATTRS} from '@/shared/config';
import {withBase} from '@/shared/lib';
import './team.css';

export interface TeamBlockProps {
  title: string;
  members: {name: string; role: string; telegram: string; photo: string}[];
}

/** Организаторы сообщества. */
export const TeamBlock = ({title, members}: TeamBlockProps) => (
  <section className="team" id="team" aria-labelledby="team-title">
    <h2 className="team__title" id="team-title">
      {title}
    </h2>

    <ul className="team__list">
      {members.map((member) => (
        <li className="team__card" key={member.telegram}>
          <img
            className="team__photo"
            src={withBase(member.photo)}
            alt=""
            width="96"
            height="96"
            loading="lazy"
          />
          <p className="team__name">{member.name}</p>
          <p className="team__role">{member.role}</p>
          <a
            className="team__telegram"
            href={`https://t.me/${member.telegram.replace('@', '')}`}
            {...EXTERNAL_LINK_ATTRS}
          >
            {member.telegram}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default TeamBlock;
