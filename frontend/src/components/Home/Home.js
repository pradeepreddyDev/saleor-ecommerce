import React  from "react";
import Header from "../Common/Header"
import Footer from "../Common/Footer"
const Home = () => {
    return (
        <div>
            <Header />
             <div id="homepage-4">
          <div className="ps-home-banner">
            <div className="container-fluid" style={{paddingRight: 0, paddingLeft: 0}}>
              <div className="ps-section__left">
                <div className="ps-carousel--nav-inside owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed={5000} data-owl-gap={0} data-owl-nav="true" data-owl-dots="true" data-owl-item={1} data-owl-item-xs={1} data-owl-item-sm={1} data-owl-item-md={1} data-owl-item-lg={1} data-owl-duration={1000} data-owl-mousedrag="on"><a href="#"><img src="img/slider/home-4/1.jpg" alt="" style={{width: '100%'}} /></a><a href="#"><img src="img/slider/home-4/2.jpg" alt="" style={{width: '100%'}} /></a><a href="#"><img src="img/slider/home-4/1.jpg" alt="" style={{width: '100%'}} /></a></div>
              </div>
            </div>
          </div>
          <div className="ps-deal-of-day mt-50">
            <div className="container">
              <div className="ps-section__header">
                <div className="ps-block--countdown-deal">
                  <div className="ps-block__left">
                    <h3>Deal of the day</h3>
                  </div> 
                </div><a href="shop-default.html">View all</a>
              </div>
              <div className="ps-section__content">
                <div className="ps-carousel--nav owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed={5000} data-owl-gap={30} data-owl-nav="true" data-owl-dots="true" data-owl-item={5} data-owl-item-xs={2} data-owl-item-sm={3} data-owl-item-md={4} data-owl-item-lg={4} data-owl-item-xl={5} data-owl-duration={1000} data-owl-mousedrag="on">
                  <div className="ps-product ps-product--inner">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/1.jpg" alt="" /></a>
                      <div className="ps-product__badge">-16%</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container">
                      <p className="ps-product__price sale">$567.99 <del>$670.00 </del><small>18% off</small></p>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Korea Long Sofa Fabric In Blue Navy Color</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div> 
                      </div>
                    </div>
                  </div>
                  <div className="ps-product ps-product--inner">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/2.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">Out Of Stock</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container">
                      <p className="ps-product__price">$101.99<small>18% off</small></p>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Aroma Rice Cooker</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div> 
                      </div>
                    </div>
                  </div>
                  <div className="ps-product ps-product--inner">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/3.jpg" alt="" /></a>
                      <div className="ps-product__badge">-25%</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container">
                      <p className="ps-product__price sale">$42.00 <del>$60.00 </del><small>18% off</small></p>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Simple Plastice Chair In White Color</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>02</span>
                        </div> 
                      </div>
                    </div>
                  </div>
                  <div className="ps-product ps-product--inner">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/4.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">Out Of Stock</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container">
                      <p className="ps-product__price">$320.00<small>18% off</small></p>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Korea Fabric Chair In Brown Colorr</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div> 
                      </div>
                    </div>
                  </div>
                  <div className="ps-product ps-product--inner">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/5.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">Out Of Stock</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container">
                      <p className="ps-product__price">$85.00<small>18% off</small></p>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Set 14-Piece Knife From KichiKit</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div> 
                      </div>
                    </div>
                  </div>
                  <div className="ps-product ps-product--inner">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/6.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">Out Of Stock</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container">
                      <p className="ps-product__price">$92.00<small>18% off</small></p>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Magic Bullet NutriBullet Pro 900 Series Blender</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div> 
                      </div>
                    </div>
                  </div>
                  <div className="ps-product ps-product--inner">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/7.jpg" alt="" /></a>
                      <div className="ps-product__badge">-46%</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container">
                      <p className="ps-product__price sale">$42.00 <del>$60.00 </del><small>18% off</small></p>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Letter Printed Cushion Cover Cotton</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>02</span>
                        </div> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-home-categories mt-50">
            <div className="container">
              <div className="ps-section__header">
                <h3>Top Categories Of The Month</h3>
              </div>
              <div className="ps-section__content">
                <div className="row align-content-lg-stretch">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                    <div className="ps-block--category-2" data-mh="categories">
                      <div className="ps-block__thumbnail"><img src="img/categories/shop/5.jpg" alt="" /></div>
                      <div className="ps-block__content">
                        <h4>Electronics</h4>
                        <ul>
                          <li><a href="shop-default.html">TV Televisions</a></li>
                          <li><a href="shop-default.html">Air Conditioners</a></li>
                          <li><a href="shop-default.html">Washing Machines</a></li>
                          <li><a href="shop-default.html">Audio &amp; Theaters</a></li>
                          <li><a href="shop-default.html">Office Electronics</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                    <div className="ps-block--category-2" data-mh="categories">
                      <div className="ps-block__thumbnail"><img src="img/categories/shop/1.jpg" alt="" /></div>
                      <div className="ps-block__content">
                        <h4>Clothings</h4>
                        <ul>
                          <li><a href="shop-default.html">Womens</a></li>
                          <li><a href="shop-default.html">Mens</a></li>
                          <li><a href="shop-default.html">Bags &amp; Backpacks</a></li>
                          <li><a href="shop-default.html">Accessories</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                    <div className="ps-block--category-2" data-mh="categories">
                      <div className="ps-block__thumbnail"><img src="img/categories/shop/9.jpg" alt="" /></div>
                      <div className="ps-block__content">
                        <h4>Computers</h4>
                        <ul>
                          <li><a href="shop-default.html">Desktop PC</a></li>
                          <li><a href="shop-default.html">Laptop</a></li>
                          <li><a href="shop-default.html">PC Gaming</a></li>
                          <li><a href="shop-default.html">Storage &amp; Memory</a></li>
                          <li><a href="shop-default.html">PC Components</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                    <div className="ps-block--category-2" data-mh="categories">
                      <div className="ps-block__thumbnail"><img src="img/categories/shop/2.jpg" alt="" /></div>
                      <div className="ps-block__content">
                        <h4>Home &amp; Kitchen</h4>
                        <ul>
                          <li><a href="shop-default.html">Funitures</a></li>
                          <li><a href="shop-default.html">Decor</a></li>
                          <li><a href="shop-default.html">Cookwares</a></li>
                          <li><a href="shop-default.html">Utensil &amp; Gadgets</a></li>
                          <li><a href="shop-default.html">Garden Tools</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                    <div className="ps-block--category-2" data-mh="categories">
                      <div className="ps-block__thumbnail"><img src="img/categories/shop/10.jpg" alt="" /></div>
                      <div className="ps-block__content">
                        <h4>Healthy &amp; Beauty</h4>
                        <ul>
                          <li><a href="shop-default.html">Makeup</a></li>
                          <li><a href="shop-default.html">Skin Care</a></li>
                          <li><a href="shop-default.html">Hair Care</a></li>
                          <li><a href="shop-default.html">Tools &amp; Equipments</a></li>
                          <li><a href="shop-default.html">Perfurmes</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                    <div className="ps-block--category-2" data-mh="categories">
                      <div className="ps-block__thumbnail"><img src="img/categories/shop/6.jpg" alt="" /></div>
                      <div className="ps-block__content">
                        <h4>Jewelry &amp; Watch</h4>
                        <ul>
                          <li><a href="shop-default.html">Pendant</a></li>
                          <li><a href="shop-default.html">Necklace</a></li>
                          <li><a href="shop-default.html">Watch</a></li>
                          <li><a href="shop-default.html">Bracelets</a></li>
                          <li><a href="shop-default.html">Accessories</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-promotions">
            <div className="container"><a className="ps-collection" href="shop-default.html"><img src="img/promotions/home-4-1.jpg" alt="" /></a></div>
          </div>
          <div className="ps-product-list ps-clothings mt-30">
            <div className="container">
              <div className="ps-section__header">
                <h3>Consumer Electronics</h3>
                <ul className="ps-section__links">
                  <li><a href="shop-grid.html">New Arrivals</a></li>
                  <li><a href="shop-grid.html">Best seller</a></li>
                  <li><a href="shop-grid.html">Must Popular</a></li>
                  <li><a href="shop-grid.html">View All</a></li>
                </ul>
              </div>
              <div className="ps-section__content">
                <div className="ps-carousel--nav owl-slider" data-owl-auto="false" data-owl-loop="false" data-owl-speed={10000} data-owl-gap={30} data-owl-nav="true" data-owl-dots="true" data-owl-item={5} data-owl-item-xs={2} data-owl-item-sm={2} data-owl-item-md={3} data-owl-item-lg={4} data-owl-item-xl={5} data-owl-duration={1000} data-owl-mousedrag="on">
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/electronic/1.jpg" alt="" /></a>
                      <div className="ps-product__badge">-16%</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Go Pro</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Marshall Kilburn Portable Wireless</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price sale">$567.99 <del>$670.00 </del></p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Marshall Kilburn Portable Wireless</a>
                        <p className="ps-product__price sale">$567.99 <del>$670.00 </del></p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/electronic/2.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">Out Of Stock</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Global Office</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Xbox One Wireless Controller Black Color</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price">$101.99</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Xbox One Wireless Controller Black Color</a>
                        <p className="ps-product__price">$101.99</p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/electronic/3.jpg" alt="" /></a>
                      <div className="ps-product__badge">-25%</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Young Shop</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Sound Intone I65 Earphone White Version</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>02</span>
                        </div>
                        <p className="ps-product__price sale">$42.00 <del>$60.00 </del></p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Sound Intone I65 Earphone White Version</a>
                        <p className="ps-product__price sale">$42.00 <del>$60.00 </del></p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/electronic/4.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">Out Of Stock</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Global Office</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Samsung Gear VR Virtual Reality Headset</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price">$320.00</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Samsung Gear VR Virtual Reality Headset</a>
                        <p className="ps-product__price">$320.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/electronic/5.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">Out Of Stock</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Global Office</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Samsung UHD TV 24inch</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price">$85.00</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Samsung UHD TV 24inch</a>
                        <p className="ps-product__price">$85.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/electronic/6.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">Out Of Stock</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Global Store</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">EPSION Plaster Printer</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price">$92.00</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">EPSION Plaster Printer</a>
                        <p className="ps-product__price">$92.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/electronic/7.jpg" alt="" /></a>
                      <div className="ps-product__badge">-46%</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Young Shop</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">LG White Front Load Steam Washer</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>02</span>
                        </div>
                        <p className="ps-product__price sale">$42.00 <del>$60.00 </del></p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">LG White Front Load Steam Washer</a>
                        <p className="ps-product__price sale">$42.00 <del>$60.00 </del></p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/electronic/8.jpg" alt="" /></a>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Go Pro</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Edifier Powered Bookshelf Speakers</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>02</span>
                        </div>
                        <p className="ps-product__price">$42.00</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Edifier Powered Bookshelf Speakers</a>
                        <p className="ps-product__price">$42.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/electronic/9.jpg" alt="" /></a>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Go Pro</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Amcrest Security Camera in White Color</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>02</span>
                        </div>
                        <p className="ps-product__price">$42.00</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Amcrest Security Camera in White Color</a>
                        <p className="ps-product__price">$42.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/electronic/10.jpg" alt="" /></a>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Go Pro</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Amcrest Security Camera in White Color</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>02</span>
                        </div>
                        <p className="ps-product__price">$42.00</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Amcrest Security Camera in White Color</a>
                        <p className="ps-product__price">$42.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-product-list mt-30">
            <div className="container">
              <div className="ps-section__header">
                <h3>Apparels &amp; Clothings</h3>
                <ul className="ps-section__links">
                  <li><a href="shop-grid.html">New Arrivals</a></li>
                  <li><a href="shop-grid.html">Best seller</a></li>
                  <li><a href="shop-grid.html">Must Popular</a></li>
                  <li><a href="shop-grid.html">View All</a></li>
                </ul>
              </div>
              <div className="ps-section__content">
                <div className="ps-carousel--nav owl-slider" data-owl-auto="false" data-owl-loop="false" data-owl-speed={10000} data-owl-gap={30} data-owl-nav="true" data-owl-dots="true" data-owl-item={5} data-owl-item-xs={2} data-owl-item-sm={2} data-owl-item-md={3} data-owl-item-lg={4} data-owl-item-xl={5} data-owl-duration={1000} data-owl-mousedrag="on">
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/clothing/1.jpg" alt="" /></a>
                      <div className="ps-product__badge">-16%</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Young Shop</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Herschel Leather Duffle Bag In Brown Color</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price sale">$567.99 <del>$670.00 </del></p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Herschel Leather Duffle Bag In Brown Color</a>
                        <p className="ps-product__price sale">$567.99 <del>$670.00 </del></p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/clothing/2.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">Out Of Stock</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Global Office</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Unero Military Classical Backpack</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price">$101.99</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Unero Military Classical Backpack</a>
                        <p className="ps-product__price">$101.99</p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/clothing/3.jpg" alt="" /></a>
                      <div className="ps-product__badge">-25%</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Young Shop</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Rayban Rounded Sunglass Brown Color</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>02</span>
                        </div>
                        <p className="ps-product__price sale">$42.00 <del>$60.00 </del></p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Rayban Rounded Sunglass Brown Color</a>
                        <p className="ps-product__price sale">$42.00 <del>$60.00 </del></p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/clothing/4.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">Out Of Stock</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Global Office</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Sleeve Linen Blend Caro Pane Shirt</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price">$320.00</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Sleeve Linen Blend Caro Pane Shirt</a>
                        <p className="ps-product__price">$320.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/clothing/5.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">Out Of Stock</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Global Office</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Men’s Sports Runnning Swim Board Shorts</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price">$85.00</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Men’s Sports Runnning Swim Board Shorts</a>
                        <p className="ps-product__price">$85.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/clothing/6.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">Out Of Stock</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Global Store</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Paul’s Smith Sneaker InWhite Color</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price">$92.00</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Paul’s Smith Sneaker InWhite Color</a>
                        <p className="ps-product__price">$92.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/clothing/7.jpg" alt="" /></a>
                      <div className="ps-product__badge">-46%</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Young Shop</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">MVMTH Classical Leather Watch In Black</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>02</span>
                        </div>
                        <p className="ps-product__price sale">$42.00 <del>$60.00 </del></p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">MVMTH Classical Leather Watch In Black</a>
                        <p className="ps-product__price sale">$42.00 <del>$60.00 </del></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-product-list mt-30">
            <div className="container">
              <div className="ps-section__header">
                <h3>Computers &amp; Technologies</h3>
                <ul className="ps-section__links">
                  <li><a href="shop-grid.html">New Arrivals</a></li>
                  <li><a href="shop-grid.html">Best seller</a></li>
                  <li><a href="shop-grid.html">Must Popular</a></li>
                  <li><a href="shop-grid.html">View All</a></li>
                </ul>
              </div>
              <div className="ps-section__content">
                <div className="ps-carousel--nav owl-slider" data-owl-auto="false" data-owl-loop="false" data-owl-speed={10000} data-owl-gap={30} data-owl-nav="true" data-owl-dots="true" data-owl-item={5} data-owl-item-xs={2} data-owl-item-sm={2} data-owl-item-md={3} data-owl-item-lg={4} data-owl-item-xl={5} data-owl-duration={1000} data-owl-mousedrag="on">
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home-3/technology/1.jpg" alt="" /></a>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Go Pro</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Sound Intone I65 Earphone White Version</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price">105.30</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Sound Intone I65 Earphone White Version</a>
                        <p className="ps-product__price">105.30</p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home-3/technology/2.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">7%</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Global Office</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Beat Spill 2.0 Wireless Speaker – White</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price">$125.00 <del>$135.00 </del></p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Beat Spill 2.0 Wireless Speaker – White</a>
                        <p className="ps-product__price">$125.00 <del>$135.00 </del></p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home-3/technology/3.jpg" alt="" /></a>
                      <div className="ps-product__badge">-25%</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Young Shop</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">ASUS Chromebook Flip – 10.2 Inch</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>02</span>
                        </div>
                        <p className="ps-product__price sale">$990.00 <del>$1250.00 </del></p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">ASUS Chromebook Flip – 10.2 Inch</a>
                        <p className="ps-product__price sale">$990.00 <del>$1250.00 </del></p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home-3/technology/4.jpg" alt="" /></a>
                      <div className="ps-product__badge">10%</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Global Office</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Apple Macbook Retina Display 12”</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>04</span>
                        </div>
                        <p className="ps-product__price">$1090.00 <del>$1550.00 </del></p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Apple Macbook Retina Display 12”</a>
                        <p className="ps-product__price">$1090.00 <del>$1550.00 </del></p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home-3/technology/5.jpg" alt="" /></a>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Global Office</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Samsung Gear VR Virtual Reality Headset</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price">$85.00</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Samsung Gear VR Virtual Reality Headset</a>
                        <p className="ps-product__price">$85.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home-3/technology/6.jpg" alt="" /></a>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Global Store</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Apple iPhone Retina 6s Plus 64GB</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price">$950.60</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Apple iPhone Retina 6s Plus 64GB</a>
                        <p className="ps-product__price">$950.60</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-product-list mt-30">
            <div className="container">
              <div className="ps-section__header">
                <h3>Home, Garden &amp; Kitchen</h3>
                <ul className="ps-section__links">
                  <li><a href="shop-grid.html">New Arrivals</a></li>
                  <li><a href="shop-grid.html">Best seller</a></li>
                  <li><a href="shop-grid.html">Must Popular</a></li>
                  <li><a href="shop-grid.html">View All</a></li>
                </ul>
              </div>
              <div className="ps-section__content">
                <div className="ps-carousel--nav owl-slider" data-owl-auto="false" data-owl-loop="false" data-owl-speed={10000} data-owl-gap={30} data-owl-nav="true" data-owl-dots="true" data-owl-item={5} data-owl-item-xs={2} data-owl-item-sm={2} data-owl-item-md={3} data-owl-item-lg={4} data-owl-item-xl={5} data-owl-duration={1000} data-owl-mousedrag="on">
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/1.jpg" alt="" /></a>
                      <div className="ps-product__badge">-16%</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Young Shop</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Korea Long Sofa Fabric In Blue Navy Color</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price sale">$567.99 <del>$670.00 </del></p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Korea Long Sofa Fabric In Blue Navy Color</a>
                        <p className="ps-product__price sale">$567.99 <del>$670.00 </del></p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/2.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">Out Of Stock</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Global Office</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Aroma Rice Cooker</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price">$101.99</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Aroma Rice Cooker</a>
                        <p className="ps-product__price">$101.99</p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/3.jpg" alt="" /></a>
                      <div className="ps-product__badge">-25%</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Young Shop</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Simple Plastice Chair In White Color</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>02</span>
                        </div>
                        <p className="ps-product__price sale">$42.00 <del>$60.00 </del></p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Simple Plastice Chair In White Color</a>
                        <p className="ps-product__price sale">$42.00 <del>$60.00 </del></p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/4.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">Out Of Stock</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Global Office</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Korea Fabric Chair In Brown Colorr</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price">$320.00</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Korea Fabric Chair In Brown Colorr</a>
                        <p className="ps-product__price">$320.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/5.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">Out Of Stock</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Global Office</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Set 14-Piece Knife From KichiKit</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price">$85.00</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Set 14-Piece Knife From KichiKit</a>
                        <p className="ps-product__price">$85.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/6.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">Out Of Stock</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Global Store</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Magic Bullet NutriBullet Pro 900 Series Blender</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price">$92.00</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Magic Bullet NutriBullet Pro 900 Series Blender</a>
                        <p className="ps-product__price">$92.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/7.jpg" alt="" /></a>
                      <div className="ps-product__badge">-46%</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Young Shop</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Letter Printed Cushion Cover Cotton</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>02</span>
                        </div>
                        <p className="ps-product__price sale">$42.00 <del>$60.00 </del></p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Letter Printed Cushion Cover Cotton</a>
                        <p className="ps-product__price sale">$42.00 <del>$60.00 </del></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-product-list mt-30">
            <div className="container">
              <div className="ps-section__header">
                <h3>Healthy &amp; Beauty</h3>
                <ul className="ps-section__links">
                  <li><a href="shop-grid.html">New Arrivals</a></li>
                  <li><a href="shop-grid.html">Best seller</a></li>
                  <li><a href="shop-grid.html">Must Popular</a></li>
                  <li><a href="shop-grid.html">View All</a></li>
                </ul>
              </div>
              <div className="ps-section__content">
                <div className="ps-carousel--nav owl-slider" data-owl-auto="false" data-owl-loop="false" data-owl-speed={10000} data-owl-gap={30} data-owl-nav="true" data-owl-dots="true" data-owl-item={5} data-owl-item-xs={2} data-owl-item-sm={2} data-owl-item-md={3} data-owl-item-lg={4} data-owl-item-xl={5} data-owl-duration={1000} data-owl-mousedrag="on">
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/1.jpg" alt="" /></a>
                      <div className="ps-product__badge">-16%</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Young Shop</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Korea Long Sofa Fabric In Blue Navy Color</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price sale">$567.99 <del>$670.00 </del></p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Korea Long Sofa Fabric In Blue Navy Color</a>
                        <p className="ps-product__price sale">$567.99 <del>$670.00 </del></p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/2.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">Out Of Stock</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Global Office</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Aroma Rice Cooker</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price">$101.99</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Aroma Rice Cooker</a>
                        <p className="ps-product__price">$101.99</p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/3.jpg" alt="" /></a>
                      <div className="ps-product__badge">-25%</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Young Shop</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Simple Plastice Chair In White Color</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>02</span>
                        </div>
                        <p className="ps-product__price sale">$42.00 <del>$60.00 </del></p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Simple Plastice Chair In White Color</a>
                        <p className="ps-product__price sale">$42.00 <del>$60.00 </del></p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/4.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">Out Of Stock</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Global Office</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Korea Fabric Chair In Brown Colorr</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price">$320.00</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Korea Fabric Chair In Brown Colorr</a>
                        <p className="ps-product__price">$320.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/5.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">Out Of Stock</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Global Office</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Set 14-Piece Knife From KichiKit</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price">$85.00</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Set 14-Piece Knife From KichiKit</a>
                        <p className="ps-product__price">$85.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/6.jpg" alt="" /></a>
                      <div className="ps-product__badge out-stock">Out Of Stock</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Global Store</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Magic Bullet NutriBullet Pro 900 Series Blender</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>01</span>
                        </div>
                        <p className="ps-product__price">$92.00</p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Magic Bullet NutriBullet Pro 900 Series Blender</a>
                        <p className="ps-product__price">$92.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="ps-product">
                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/7.jpg" alt="" /></a>
                      <div className="ps-product__badge">-46%</div>
                      <ul className="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2" /></a></li>
                        <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars" /></a></li>
                      </ul>
                    </div>
                    <div className="ps-product__container"><a className="ps-product__vendor" href="#">Young Shop</a>
                      <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Letter Printed Cushion Cover Cotton</a>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select><span>02</span>
                        </div>
                        <p className="ps-product__price sale">$42.00 <del>$60.00 </del></p>
                      </div>
                      <div className="ps-product__content hover"><a className="ps-product__title" href="product-default.html">Letter Printed Cushion Cover Cotton</a>
                        <p className="ps-product__price sale">$42.00 <del>$60.00 </del></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-download-app">
            <div className="container">
              <div className="ps-block--download-app">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                    <div className="ps-block__thumbnail"><img src="img/app.png" alt="" /></div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                    <div className="ps-block__content">
                      <h3>Download Martfury App Now!</h3>
                      <p>Shopping fastly and easily more with our app. Get a link to download the app on your phone</p>
                      <form className="ps-form--download-app" action="http://nouthemes.net/html/martfury/do_action" method="post">
                        <div className="form-group--nest">
                          <input className="form-control" type="Email" placeholder="Email Address" />
                          <button className="ps-btn">Subscribe</button>
                        </div>
                      </form>
                      <p className="download-link"><a href="#"><img src="img/google-play.png" alt="" /></a><a href="#"><img src="img/app-store.png" alt="" /></a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            <Footer />
       </div>
   
    );
};

export default Home;
