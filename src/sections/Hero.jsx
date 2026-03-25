import AnalyticsPanel from '../components/AnalyticsPanel';
import Reveal from '../components/Reveal';

function Hero({ content }) {
  return (
    <section
      id="hero"
      className="section hero"
    >
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="hero-description">{content.description}</p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href={content.primaryCta.href}
            >
              {content.primaryCta.label}
            </a>
            <a
              className="button button-secondary"
              href={content.secondaryCta.href}
            >
              {content.secondaryCta.label}
            </a>
          </div>

          <ul className="signal-list" aria-label="Primary specialties">
            {content.signals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>

          <div className="hero-meta">
            <div className="hero-socials" aria-label="Social links">
              {content.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                >
                  {social.label}
                </a>
              ))}
            </div>

            <dl className="hero-metrics">
              {content.metrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <dt>{metric.label}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal
          className="hero-panel"
          style={{ '--delay': '120ms' }}
        >
          <AnalyticsPanel panel={content.panel} />
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
