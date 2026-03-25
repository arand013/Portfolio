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
            
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
