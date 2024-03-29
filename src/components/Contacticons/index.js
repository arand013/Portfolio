import React from 'react';

function ContactIcons() {
  const contactLinks = [
    {
      "name": "email",
      "url": "mailto:arandaresume23@gmail.com",
      "classes": "far fa-envelope"
    },
    {
      "name": "linkedin",
      "url": "https://www.linkedin.com/in/alexander-aranda1",
      "classes": "fab fa-linkedin"
    },
    {
      "name": "github",
      "url": "https://github.com/arand013",
      "classes": "fab fa-github"
    }
  ]

  return (
    <div className="mt-2 mt-lg-0">
      {contactLinks.map((contactLink) => {
        return (
          <a href={contactLink.url}
            key={contactLink.name}
            target="_blank"
            rel="noopener noreferrer"
            className="m-3">
            <span><i className={contactLink.classes}></i></span>
          </a>
        )
      })}
    </div>
  )
}

export default ContactIcons;