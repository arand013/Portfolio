function AnalyticsPanel({ panel }) {
  return (
    <div className="analytics-panel">
      <div className="analytics-panel__header">
        <span className="analytics-badge">{panel.badge}</span>
        <span className="analytics-status">Verified path / college growth</span>
      </div>

      <div className="analytics-panel__intro">
        <h3>{panel.headline}</h3>
        <p>{panel.copy}</p>
      </div>

      <div className="analytics-timeline" aria-label="Education timeline">
        {panel.timeline.map((item) => (
          <article key={`${item.period}-${item.title}`} className="analytics-timeline__item">
            <span className="analytics-timeline__period">{item.period}</span>
            <strong>{item.title}</strong>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>

      <div className="analytics-card-row">
        {panel.cards.map((card) => (
          <article key={card.label} className={`signal-card signal-card--${card.tone}`}>
            <span>{card.label}</span>
            <strong>{card.value}</strong>
          </article>
        ))}
      </div>

      <dl className="analytics-metric-list">
        {panel.metrics.map((metric) => (
          <div key={metric.label} className="analytics-metric">
            <dt>{metric.label}</dt>
            <dd>{metric.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default AnalyticsPanel;
