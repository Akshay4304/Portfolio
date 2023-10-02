import React from 'react'
import './Works.css'
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worktitle'>My Portfolio</h2>
        <span className='worksDesk'> fjjfdjofuhe</span>
        <div className='worksImgs'>
            <img src={Portfolio1} alt='Portfolio1' className='worksimg' />
            <img src={Portfolio2} alt='Portfolio2' className='worksimg' />
            <img src={Portfolio3} alt='Portfolio3' className='worksimg' />
            <img src={Portfolio4} alt='Portfolio4' className='worksimg' />
            <img src={Portfolio5} alt='Portfolio5' className='worksimg' />
            <img src={Portfolio6} alt='Portfolio6' className='worksimg' />

        </div>
        <button className='workbtn'> More</button>

    </section>
  )
}

export default Works