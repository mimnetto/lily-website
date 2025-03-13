import React from "react";
import Pdf from './Portfolio25.pdf';

const Content = () => (
  <><div className="content">
        <p className="hithere">Hi there!</p>
        <p>I’m Lily, a Creative Professional specializing in toy design and illustration based in Cranston, RI.</p>

<p>Welcome to my website! While you’re here feel free to:</p>
<ul className="a">
<li><a className="Link-Text" href={Pdf} target="_blank" rel="noreferrer">Download my Portfolio .pdf</a> and get a snapshot of my process, projects and skills</li>
<li>View my professional credentials on <a className="Link-Text" href="https://www.linkedin.com/in/lily-damota-8488aa3b/" target="_blank" rel="noreferrer">LinkedIn</a></li>
<li>Drop me a line <a className="Link-Text" href="mailto:someone@example.com">via e-mail</a>, if you’d like to work together or just get connected</li>
</ul>
<p>Thanks for stopping by!</p>
    </div>
        </>
);

export default Content;