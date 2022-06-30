import react from 'react';
import Sidebar from './Sidebar';
import '../static/styles/About.css';
import jorge from '../static/imgs/jorge_aqp.jpg';
import { Link } from 'react-router-dom';

import logo_facebook from '../static/icons/facebook.png';
import logo_github from '../static/icons/github.png';
import logo_email from '../static/icons/email.png';
import logo_linkedin from '../static/icons/linkedin.png';

const About = () => {

  return(
    <main>
      <Sidebar/>
      <div className="content-bio">
        <div className="bio-image">
          <img src={jorge} alt='mota'/>
        </div>
        <div className="bio-about">
          <p>Electronic Engineer, Highly motivated and pasionate about new technologies and cultural topics. </p>
          <p>knowdledge in techonologies in Iot (sensors and embedded systems), web design (front end and backend) cloud computing (AWS and Azure), digital marketing (SEO and Google Analytics), data analysis (statistics, R, SQL and Python), data explotation (Power BI).</p>

          <p>Also good knowledge in English (B2), French (B1), German (B2) and italian, Spanish as mother tongue.</p>

          <p>Interested in cultural topics, photographer and traveler.</p>
          <br></br>

          <div className="social-networks">
          <a href="https://www.facebook.com/jorge.enrique.be/"><img src={logo_facebook}/></a>
          <a href="https://github.com/jbarba87"><img src={logo_github}/></a>
          <a href="mailto:jbarba.87.2@gmail.com"><img src={logo_email}/></a>
          <a href="https://www.linkedin.com/in/jbarba87/"><img src={logo_linkedin}/></a>

          </div>
        </div>
      
      </div>
    </main>
  )
}

export default About;