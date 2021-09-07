import React from 'react';
import coverImage from '../../assets/cover/ME-PICTURE.jpeg';

function About() {

  return (
    <section className="my-5">
      <img src={coverImage} className="my-2" style={{ width: "20.5%" }} alt="cover" />
      <div className="my-2">
        <p>
          This is my Portfolio! Please take a look at my recent work.
          Feel free to reach out by phone or email.

          I am a Full Stack Web Developer leveraging an opportunity to build a more creative user experience on
          the web. Working towards earingn a certificate in full stack web development from the University of
          California Los Angeles, developing skills such as Javascript, CSS and React.js. To build user responsive
          web applications. In a project involving a team of three developers, we built a dynamic database system
          along with a polished UI web-page. That now helps a local business owner to track their clients
          appointments and deal with requests by sending technicians to appointments. In terms of my attitude I
          have an ambitious outlook to work with industry leaders and group efforts to meet goals and over-deliver
          on client expectations.

        </p>
      </div>
    </section>
  );
}

export default About;
