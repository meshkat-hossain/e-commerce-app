import React from 'react'

const Testimonial = () => {
  return (<>
    <div className="Testimonials">
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
  </div>
  </>
  )
}

export default Testimonial