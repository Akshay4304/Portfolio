import React, { useRef } from 'react'
import './Contact.css'
import codeme from '../../assets/43190.jpg'
import Orion from '../../assets/le-orion.jpg'
import facebookicon from '../../assets/facebook-icon.png'
import instagramicon from '../../assets/instagram.png'
import twittericon from '../../assets/twitter.png'
import youtubeicon from '../../assets/youtube.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
     // Get the form field values
  const formData = new FormData(form.current);
  const yourName = formData.get("your_name");
  const yourEmail = formData.get("your_email");
  const message = formData.get("message");

  // Check if required fields are empty
  if (!yourName || !yourEmail || !message) {
    alert("Please fill out all required fields.");
    return;
  }

    emailjs.sendForm('service_w5xcm3v', 'template_vdzyewc', form.current, 'GSwVuEdV7OTTmTAW6')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent successfully!")
       })
       .catch((error) => {
          console.error("Error sending email:", error);
          alert('Email not sent')
       });
    };
  return (
    <section id='contactPage'>
        <div className='clients'>
            <h1 className='contactPagTitle'>My Clients </h1>
            <p className='clientDesk'>
                I have had the opportunity to work with a diverde group of companies.
                some of the notable companies I have worked with includes
            </p>
            <div className='clientImgs'>
                <img src={codeme} alt='client' className='clientImg' />
                <img src={Orion} alt='client' className='clientImg' />
               
            </div>
        </div>
       <div id='contact'>
        <h1 className='contactPagTitle'>Contact Me</h1>
        <span className='contactDesk'> please fill out the form below to discuss any work opportunities</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input className='name' type='text' placeholder='Your Name' name="your_name" />
            <input type='Email' className='email' placeholder='your Email'  name="your_email"/>
            <textarea className='msg' rows='5' name="message" placeholder='Your Message' />
            <button  type='submit' value="Send" className='submitBtn'>Submit</button>
            <div className='links'>
                <a href='https://www.facebook.com/akshay.akshayk.3958'><img src={facebookicon} alt='Facebook' className='link' /></a>
                <a href='https://twitter.com/Akshayk63188920'><img src={twittericon} alt='Twitter' className='link' /></a>
                <a href='https://www.instagram.com/_akshayyy_______/'><img src={instagramicon} alt='instagram' className='link' /></a> 
                <a href=''><img src={youtubeicon} alt='youtube' className='link' /></a>
            </div>


             
        </form>
           
       </div>

    </section>
  )
}

export default Contact