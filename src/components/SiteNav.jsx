function SiteNav({ links, activeSection }) {
  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <a
          className="brand"
          href="#hero"
        >
          <span className="brand-mark">AA</span>
          <span className="brand-copy">
            <strong>Alexander Aranda</strong>
            <span>Engineer / Builder</span>
          </span>
        </a>

        <nav
          className="nav-links"
          aria-label="Primary"
        >
          {links.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link${isActive ? ' is-active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <a
          className="button button-ghost nav-cta"
          href="#contact"
        >
          Connect
        </a>
      </div>
    </header>
  );
}

export default SiteNav;
