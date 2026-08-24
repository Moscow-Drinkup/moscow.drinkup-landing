import './faq.css';

export interface FaqBlockProps {
  title: string;
  items: {question: string; answer: string}[];
}

/** Частые вопросы. Раскрытие — нативное поведение details, скрипт не нужен. */
export const FaqBlock = ({title, items}: FaqBlockProps) => (
  <section className="faq" aria-labelledby="faq-title">
    <h2 className="faq__title" id="faq-title">
      {title}
    </h2>

    <div className="faq__list">
      {items.map((item) => (
        <details className="faq__item" key={item.question}>
          <summary className="faq__question">{item.question}</summary>
          <p className="faq__answer">{item.answer}</p>
        </details>
      ))}
    </div>
  </section>
);

export default FaqBlock;
