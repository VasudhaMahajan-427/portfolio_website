import React from 'react';
import './skills.css';
import JavaDev from '../../assets/java.png';
import PythonDev from '../../assets/python.png';
import WebDev from '../../assets/web-developer.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">In my portfolio, you'll find a showcase of my proficiency in Python, Java, HTML, CSS and JavaScript. I've Successfully executed projects in Java, HTML, CSS, and Python. Committed to continuous learning and staying updated on essential engineering skills. </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={JavaDev} alt="JavaDev" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>JAVA</h2>
                    <p>Developed an ATM Simulator using Java with a focus on DBMS</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={PythonDev} alt="PythonDev" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>PYTHON</h2>
                    <p>Completed a Python internship with TechnoHacks company, successfully delivering assigned projects during the internship</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={WebDev} alt="WebDev" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Development</h2>
                    <p>Developed a Login & Registration page and crafted a Netflix clone using HTML, CSS, JavaScript. Additionally, contributed to another impactful project.</p>
                </div>
            </div>

        </div>
    </section>
  );
}

export default Skills;