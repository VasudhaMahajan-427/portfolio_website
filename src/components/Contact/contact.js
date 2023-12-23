import React from 'react';
import './contact.css';
import Google from '../../assets/google.png'
import Microsoft from '../../assets/microsoft-txt.png';
import Facebook from '../../assets/facebook-txt.png';
import Adobe from '../../assets/adobe.png';
import FacebookIcon from '../../assets/facebook.png';
import GithubIcon from '../../assets/github.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import linkedinIcon from '../../assets/linkedin.png';


const Contact = () => {
    const socialMediaLinks = {
        facebook: 'https://www.facebook.com/yourusername',
        github: 'https://github.com/VasudhaMahajan-427',
        youtube: 'https://www.youtube.com/c/@vasudhamahajan5997',
        instagram: 'https://www.instagram.com/vasudha_mahajan27',
        linkedin: 'https://www.linkedin.com/in/vasudha-mahajan-5982b3259',
      };
  return (
   <section id="contactPage">
    <div id="clients">
        <h1 className="contactPageTitle">Learning Platform</h1>
        <p className="clientDesc">
            I,ve cultivate my skills through diverse learning platforms, including Google, YouTube, Udemy, LinkedIn, creating a well-rounded foundation in programming and technology. My journey involves continuous exploration and learning from various reputable sources.
        </p>
        <div className="clientImgs">
            <img src={Google} alt="Client" className="clientImg" />
            <img src={Microsoft} alt="Client" className="clientImg" />
            <img src={Facebook} alt="Client" className="clientImg" />
            <img src={Adobe} alt="Client" className="clientImg" />
        </div>
    </div>
    <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form className="contactForm">
          <input type="text" className="name" placeholder='Your Name' />
          <input type="email" className="email" placeholder='Your Email' />
          <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
          <button type='submit' value='Send' className="submitBtn">Submit</button>
          <div className="links">
            <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer" className="link">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer" className="link">
              <img src={GithubIcon} alt="Github" />
            </a>
            <a href={socialMediaLinks.youtube} target="_blank" rel="noopener noreferrer" className="link">
              <img src={YouTubeIcon} alt="YouTube" />
            </a>
            <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer" className="link">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" className="link">
              <img src={linkedinIcon} alt="Linkedin" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
