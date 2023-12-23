import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
//import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Vasudha</span> <br /> Computer Science Engineering<br/> Student</span>
            <p className="introPara"> I,m a third-year computer engineering student at SIPNA College of Enginneering<br/> and Technology,Amravati. Currently working on expanding my skills and<br/> knowledge in the field. Check out my portfolio to learn more about my projects<br/> and experiences.</p>
            
            <a href="https://drive.google.com/file/d/17Fb1PyjINXDEJTo4a7iVOp-IU1r9fKVb/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className="btn"><img src={btnImg} alt="Resume" className='btnImg' />Resume</button>
             </a>
            
        </div>
        <img src={bg} alt="profile" className="bg"/>
    </section>
  )
}

export default Intro;
