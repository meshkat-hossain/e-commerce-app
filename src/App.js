import React from "react";
import "./App.css";

import { BrowserRouter as Router , Routes,Route} from "react-router-dom";


 import Services from "./Pages/Services";
// import HomeAbout from "./Component/HomeAbout";
 import AboutUs from './Pages/AboutUs'
 import Shop from "./Pages/Shop";
import Homepages from "./Pages/Homepages";
 import Blog from './Pages/Blog'
 import Cart from './Pages/Cart'
 import Contact from './Pages/Contact'
// import SignUp from './Pages/SignUp'
import Nav from "./Component/Nav";
const App = () => {
  return (
    <>
      {/* <Homepages />  */}
      {/* <Shop /> */}
      {/* <AboutUs /> */}
      {/* <Blog /> */}
      {/* <Cart /> */}
      {/* <Contact /> */}
      {/* <Services /> */}
      {/* <SignUp /> */}


      

      <Router>
        <div className="Home_container">

       <Nav />
        </div>
        <Routes>
          
          <Route path="/" element={<Homepages />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/cart" element={<Cart />}/>

        
          
        </Routes>
      </Router>

    </>
  );
};

export default App;
