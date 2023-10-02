import React from 'react'
import './Skills.css'
import reactDev from '../../assets/react.jpg'
import djangoDev from '../../assets/Django.jpg'
import pythonDev from '../../assets/Python-Symbol.png'

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'> What I Do </span>
      <span className='skillDesk'>Dedicated full stack developer with a passion for crafting seamless and innovative web applications, utilizing both front-end and back-end technologies to deliver exceptional user experiences</span>
      <div className='skillBars'>
        <div className='skillBar'>
            <img src={reactDev} alt='reactdev' className='skillBarImg' />
            <div className='skillBarText'>
                <h2>
                React.js Developer
                </h2>
                <p>Experienced in building responsive web interfaces with React.js for engaging user experiences</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={djangoDev} alt='djangoDev' className='skillBarImg' />
            <div className='skillBarText'>
                <h2>
                Django Developer
                </h2>
                <p>Proficient in developing web applications with Django, leveraging its powerful framework for efficient and robust back-end solutions</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={pythonDev} alt='pythonDev' className='skillBarImg' />
            <div className='skillBarText'>
                <h2>
                Python Developer
                </h2>
                <p>Skilled Python developer adept at creating efficient and versatile solutions for diverse programming challenges.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills