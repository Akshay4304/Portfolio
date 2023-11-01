import React from 'react'
import { useState } from 'react'
import './Works.css'
import Portfolio1 from '../../assets/jobportal django1.png'
import Portfolio2 from '../../assets/react .ecommerce.png'
import Portfolio3 from '../../assets/bmt.png'


const Works = () => {
  // the more button functions
  const [showAllCards, setShowAllCards] = useState(false);

  const toggleShowAllCards = () => {
    setShowAllCards(!showAllCards);
  }

  const cards = [
    {
      link: 'https://github.com/Akshay4304/workspot.git',
      imgSrc: Portfolio1,
      alt: 'Portfolio1',
      text: 'Job Portal Django'
    },
    {
      link: 'https://github.com/Akshay4304/React-E-commerce.git',
      imgSrc: Portfolio2,
      alt: 'Portfolio2',
      text: 'React E-Commerce'
    },
    {
      link: 'https://github.com/Akshay4304/Bmi-calculator-react.git',
      imgSrc: Portfolio3,
      alt: 'Portfolio3',
      text: 'React Bmi-calculator'
    },
   
  ];

  const visibleCards = showAllCards ? cards : cards.slice(0, 2);

  return (
    <section id='works'>
        <h2 className='worktitle'>My Portfolio</h2>
        <span className='worksDesk'> My Works </span>
        <div className='worksImgs'>
        {visibleCards.map((card, index) => (
          <div className="card" key={index}>
            <a href={card.link}><img src={card.imgSrc} alt={card.alt} className='worksimg' /></a>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
      {!showAllCards && <button className='workbtn' onClick={toggleShowAllCards}> More</button>}

        

    </section>
  )
}

export default Works