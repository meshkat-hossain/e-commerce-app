import React from 'react'
import FooterSubscribes from '../Style/FooterSubscribes.css'


const FooterSubscribe = () => {
  return (
    <div className="mail-section">
    <div className="mail-container">
      <div className="form-p">
        <span>Subscribe to Newsletter</span>
      </div>
      <div className="forms">
        <div className="form-1">
          <input placeholder="Enter Your Name"></input>
        </div>
        <div className="form-2">
          <input placeholder="Enter Your mail"></input>
        </div>
        <div className="form-button">
          <button>SEND</button>
        </div>
      </div>
    </div>

    
 

  </div>
  )
}

export default FooterSubscribe