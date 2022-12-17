import React from 'react'
import HomeAbout from '../Style/HomeAbout.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Home_About = ({name}) => {


const navigate = useNavigate

  return (
    <div className="Home-about-section">
    {/* home description start */}
    <div className="Home-description">
      <h1 className='Home-heading'>Modern Interior Design Studio</h1>
      <p className="home-pera2">
       
        Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
         velit. Aliquam vulputate velit imperdiet dolor tempor
        tristique.
      </p>
      <div className="Home-Description-button">
      <Link to={`/shop`}>

        <button className="btn1 color-5">Shop Now</button>
      </Link>
        <button className="btn2 color-5 " onClick={() => {
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