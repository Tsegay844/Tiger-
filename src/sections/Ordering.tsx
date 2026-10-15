import { orderSteps } from '../content';

export function Ordering() {
  return (
    <section className="section" id="ordering" aria-labelledby="ordering-title">
      <div className="container">
        <div className="section-head section-head-wide reveal">
          <p className="eyebrow">How to order</p>
          <h2 id="ordering-title">A direct conversation, start to finish.</h2>
        </div>
        <ol className="steps">
          {orderSteps.map((step, index) => (
            <li className="step reveal" key={step.title}>
              <span className="step-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
