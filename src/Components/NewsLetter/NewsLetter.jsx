import React from 'react'
import './NewsLetter.css'
function NewsLetter() {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer On Your Email</h1>
        <p>Subscibe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email Id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter