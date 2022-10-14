import React from 'react'


const HelpSection = () => {
  
  return (
    <div className="we-help-section">
    <div className="decoration-image">
      <div className="images1">
        <img
          src="https://untree.co/demos/furni/images/img-grid-1.jpg"
          alt="image1"
        ></img>
      </div>

      <div className="images2">
        <img
          src="https://untree.co/demos/furni/images/img-grid-3.jpg"
          alt="image2"
        ></img>
      </div>
      <div className="images3">
        <img
          src="https://untree.co/demos/furni/images/img-grid-2.jpg"
          alt="image3"
        ></img>
      </div>
      <div className="Bg-image">
        <img
          src="https://untree.co/demos/furni/images/dots-green.svg"
          alt="image4"
        ></img>
      </div>
    </div>

    <div className="description-text">
      <div className="pera">
        <h2>We Help You Make Modern Interior Design</h2>
        <p>
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
          quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
          vulputate velit imperdiet dolor tempor tristique. Pellentesque
          habitant morbi tristique senectus et netus et malesuada
       
        </p>
      </div>

      <div className="ul-help">
        <div className="list1">
          <ol>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
          </ol>
        </div>
        <div className="list2">
          <ol>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
          </ol>
        </div>
      </div>
      <div className="button">
        <button className="button-explore">Explore</button>
      </div>
    </div>
  </div>
  )
}

export default HelpSection