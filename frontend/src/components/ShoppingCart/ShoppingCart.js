import React  from "react";
import Header from "../Common/Header"
import Footer from "../Common/Footer"

const ShoppingCart = () => {
    return (<>
    
    <div className="ps-page--simple">
        <div className="ps-breadcrumb">
          <div className="container">
            <ul className="breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li><a href="shop-default.html">Shop</a></li>
              <li>Whishlist</li>
            </ul>
          </div>
        </div>
        <div className="ps-section--shopping ps-shopping-cart">
          <div className="container">
            <div className="ps-section__header">
              <h1>Shopping Cart</h1>
            </div>
            <div className="ps-section__content">
              <div className="table-responsive">
                <table className="table ps-table--shopping-cart">
                  <thead>
                    <tr>
                      <th>Product name</th>
                      <th>PRICE</th>
                      <th>QUANTITY</th>
                      <th>TOTAL</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="ps-product--cart">
                          <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/electronic/1.jpg" alt="" /></a></div>
                          <div className="ps-product__content"><a href="product-default.html">Marshall Kilburn Wireless Bluetooth Speaker, Black (A4819189)</a>
                            <p>Sold By:<strong> YOUNG SHOP</strong></p>
                          </div>
                        </div>
                      </td>
                      <td className="price">$205.00</td>
                      <td>
                        <div className="form-group--number">
                          <button className="up">+</button>
                          <button className="down">-</button>
                          <input className="form-control" type="text" placeholder={1} defaultValue={1} />
                        </div>
                      </td>
                      <td>$205.00</td>
                      <td><a href="#"><i className="icon-cross" /></a></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="ps-product--cart">
                          <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/clothing/2.jpg" alt="" /></a></div>
                          <div className="ps-product__content"><a href="product-default.html">Unero Military Classical Backpack</a>
                            <p>Sold By:<strong> YOUNG SHOP</strong></p>
                          </div>
                        </div>
                      </td>
                      <td className="price">$205.00</td>
                      <td>
                        <div className="form-group--number">
                          <button className="up">+</button>
                          <button className="down">-</button>
                          <input className="form-control" type="text" placeholder={1} defaultValue={1} />
                        </div>
                      </td>
                      <td>$205.00</td>
                      <td><a href="#"><i className="icon-cross" /></a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="ps-section__cart-actions"><a className="ps-btn" href="shop-default.html"><i className="icon-arrow-left" /> Back to Shop</a><a className="ps-btn ps-btn--outline" href="shop-default.html"><i className="icon-sync" /> Update cart</a></div>
            </div>
            <div className="ps-section__footer">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                  <figure>
                    <figcaption>Coupon Discount</figcaption>
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder />
                    </div>
                    <div className="form-group">
                      <button className="ps-btn ps-btn--outline">Apply</button>
                    </div>
                  </figure>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                  <figure>
                    <figcaption>Calculate shipping</figcaption>
                    <div className="form-group">
                      <select className="ps-select">
                        <option value={1}>America</option>
                        <option value={2}>Italia</option>
                        <option value={3}>Vietnam</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Town/City" />
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Postcode/Zip" />
                    </div>
                    <div className="form-group">
                      <button className="ps-btn ps-btn--outline">Update</button>
                    </div>
                  </figure>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                  <div className="ps-block--shopping-total">
                    <div className="ps-block__header">
                      <p>Subtotal <span> $683.49</span></p>
                    </div>
                    <div className="ps-block__content">
                      <ul className="ps-block__product">
                        <li><span className="ps-block__shop">YOUNG SHOP Shipping</span><span className="ps-block__shipping">Free Shipping</span><span className="ps-block__estimate">Estimate for <strong>Viet Nam</strong><a href="#"> MVMTH Classical Leather Watch In Black ×1</a></span></li>
                        <li><span className="ps-block__shop">ROBERT’S STORE Shipping</span><span className="ps-block__shipping">Free Shipping</span><span className="ps-block__estimate">Estimate for <strong>Viet Nam</strong><a href="#">Apple Macbook Retina Display 12” ×1</a></span></li>
                      </ul>
                      <h3>Total <span>$683.49</span></h3>
                    </div>
                  </div><a className="ps-btn ps-btn--fullwidth" href="checkout.html">Proceed to checkout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </>);
};

export default ShoppingCart;