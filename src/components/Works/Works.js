import React from 'react'
import './Works.css'
import Portfolio1 from '../../assets/jobportal,django.png'
// import Portfolio2 from '../../assets/portfolio-2.png'
// import Portfolio3 from '../../assets/portfolio-3.png'
// import Portfolio4 from '../../assets/portfolio-4.png'
// import Portfolio5 from '../../assets/portfolio-5.png'
// import Portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worktitle'>My Portfolio</h2>
        <span className='worksDesk'> My Works </span>
        <div className='worksImgs'>
          <div className="card">
          <a href='https://github.com/Akshay4304/workspot.git'><img src={Portfolio1} alt='Portfolio1' className='worksimg' /></a>
            <p>Job Portal Django</p>
          </div>
          {/* <div className="card">
          <a href='/'><img src='' alt='Portfolio1' className='worksimg' /></a>
            <p>React E-Commerce</p>
          </div> */}
         
   

        </div>
        {/* <button className='workbtn'> More</button> */}

    </section>
  )
}

export default Works