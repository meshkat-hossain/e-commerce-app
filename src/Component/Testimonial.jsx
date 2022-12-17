import React from "react";
import Testimonials from "../Style/Testimonials.css";
import Carousel from "react-bootstrap/Carousel";
import download from '../Image/istockphoto-1163294201-612x612.jpg'
import download2 from '../Image/professional-smiling-woman.jpg'
const Testimonial = () => {
  return (
    <>
      <Carousel className="carousel">
        <Carousel.Item className="carouseItem">
        <h1 className="Heading-testimonil">Testimonials</h1>

        <h4 className="testimonial-pera">
          “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
          nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
          velit imperdiet dolor tempor tristique. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Integer convallis volutpat dui quis scelerisque.”
        </h4>

        <img
          className="carouselImage"
          alt="#"
          src="https://untree.co/demos/furni/images/person-1.png"
          
        ></img>
        <h5>Maria Jones</h5>
        <h6 className="position">CEO, Co-Founder, XYZ Inc</h6>
        </Carousel.Item>

        <Carousel.Item>
        <h1 className="Heading-testimonil">Testimonials</h1>

        <h4 className="testimonial-pera">
          “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
          nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
          velit imperdiet dolor tempor tristique. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Integer convallis volutpat dui quis scelerisque.”
        </h4>

        <img
          className="carouselImage"
          alt="#"
          src={download}
        ></img>
        <h5>Maria Jones</h5>
        <h6 className="position">CEO, Co-Founder, XYZ Inc</h6>
        </Carousel.Item>

        <Carousel.Item>
        <h1 className="Heading-testimonil">Testimonials</h1>

        <h4 className="testimonial-pera">
          “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
          nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
          velit imperdiet dolor tempor tristique. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Integer convallis volutpat dui quis scelerisque.”
        </h4>

        <img 
          className="carouselImage"
          alt="#"
          src={download2}
        ></img>
        <h5>Maria Jones</h5>
        <h6 className="position">CEO, Co-Founder, XYZ Inc</h6>
        </Carousel.Item>
      </Carousel>

      {/* <div className="Testimonials">
    <h1>Testimonials</h1>
  </div>
  <div className="testimonials-pera">
    <div className="peragraph-testimonials">
      <p>
        “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
        quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
        vulputate velit imperdiet dolor tempor tristique. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac
        turpis egestas. Integer convallis volutpat dui quis scelerisque.”
      </p>
    </div>
    <div className="image-testimonials">
      <img
        alt=""
        src="https://untree.co/demos/furni/images/person-1.png"
      ></img>
      <h5>Maria Jones</h5>
      <p>CEO, Co-Founder, XYZ Inc</p>
    </div>
  </div> */}
    </>
  );
};

export default Testimonial;
