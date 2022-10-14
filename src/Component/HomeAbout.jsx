import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home_About = () => {
const navigate = useNavigate

  return (
    <div className="Home-about-section">
    {/* home description start */}
    <div className="Home-description">
      <p className="home-pera2">
        Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
        <br></br> velit. Aliquam vulputate velit imperdiet dolor tempor
        tristique.
      </p>
      <div className="Home-Description-button">
        <button className="btn1">Shop Now</button>
        <button className="btn2" onClick={() => {
          navigate("/")
        }}> Explore</button>
      </div>
    </div>
    {/* home description end */}

    {/* start Home Image */}
    <div className=" Home-image">
      <img
        className="Home-image-1"
        alt=""
        src="https://untree.co/demos/furni/images/couch.png"
      ></img>
    </div>
  </div>
  )
}

export default Home_About;