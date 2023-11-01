import React from 'react'
import './Intro.css'
import resume from '../../assets/resume.pdf';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';


const Intro = () => {
  // const resumeUrl = process.env.PUBLIC_URL + '/AKSHAY_K_Resume.pdf'; 
  return (
    <section id='intro'>
    <div className='introContent'>
     <span className='hello'> Hello</span>
     <span className='introText'>I'm <span className='introName'>Akshay</span> <br />Full Stack Developer</span>
     <p className='introPara'> Passionate full stack developer creating seamless web applications by combining front-end and back-end technologies for exceptional user experiences.</p>
    <a href={resume} download ='resume' ><button className='btn'><img src={btnImg} alt='' className='btnImg'/>Resume</button></a>  
    </div>
    <img src='' alt='profile' className='bg' />

    </section>
  )
}

export default Intro