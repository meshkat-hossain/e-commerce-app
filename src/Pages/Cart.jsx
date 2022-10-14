import React from 'react'
import HomeAbout from '../Component/HomeAbout'
import FooterSubscribe from '../Component/FooterSubscribe'
import FooterDetails from '../Component/FooterDetails'
const Cart = () => {
  return (<>
  
  <div className="Home_container">
        <HomeAbout />
      </div>
 

{/* cart section start */}
<div className="container">

<div className="row mb-5">
                <form className="col-md-12" method="post">
                  <div className="site-blocks-table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Image</th>
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-total">Total</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="product-thumbnail">
                            <img src="images/product-1.png" alt="Image" className="img-fluid" />
                          </td>
                          <td className="product-name">
                            <h2 className="h5 text-black">Product 1</h2>
                          </td>
                          <td>$49.00</td>
                          <td>
                            {/* <div className="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;">
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-black decrease" type="button">−</button>
                              </div>
                              <input type="text" className="form-control text-center quantity-amount" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                              <div className="input-group-append">
                                <button className="btn btn-outline-black increase" type="button">+</button>
                              </div>
                            </div> */}
        
                          </td>
                          <td>$49.00</td>
                          <td><a href="#" className="btn btn-black btn-sm">X</a></td>
                        </tr>
        
                        <tr>
                          <td className="product-thumbnail">
                            <img src="images/product-2.png" alt="Image" className="img-fluid" />
                          </td>
                          <td className="product-name">
                            <h2 className="h5 text-black">Product 2</h2>
                          </td>
                          <td>$49.00</td>
                          <td>
                            {/* <div className="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;">
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-black decrease" type="button">−</button>
                              </div>
                              <input type="text" className="form-control text-center quantity-amount" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                              <div className="input-group-append">
                                <button className="btn btn-outline-black increase" type="button">+</button>
                              </div>
                            </div>
         */}
                          </td>
                          <td>$49.00</td>
                          <td><a href="#" className="btn btn-black btn-sm">X</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>

</div>


      <FooterSubscribe />
      <FooterDetails />
  </>
  )
}

export default Cart