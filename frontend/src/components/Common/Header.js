import React from "react";
const Header = () => {
    return (
        <>

        <header className="header header--standard header--market-place-2" data-sticky="true"> 
          <div className="header__content">
            <div className="container">
              <div className="header__content-left"><a className="ps-logo" href="index.html"><img src="img/logo.png" alt="" /></a> 
              </div>
              <div className="header__content-center">
                <form className="ps-form--quick-search" action="http://nouthemes.net/html/martfury/index.html" method="get">
                  <div className="form-group--icon"><i className="icon-chevron-down" />
                    <select className="form-control">
                      <option value={1}>All</option>
                      <option value={1}>Smartphone</option>
                      <option value={1}>Sounds</option>
                      <option value={1}>Technology toys</option>
                    </select>
                  </div>
                  <input className="form-control" type="text" placeholder="I'm shopping for..." />
                  <button>Search</button>
                </form>
              </div>
              <div className="header__content-right">
                <div className="header__actions"><a className="header__extra" href="#"><i className="icon-heart white" /><span><i>0</i></span></a>
                  <div className="ps-cart--mini"><a className="header__extra" href="#"><i className="icon-bag2 white" /><span><i>0</i></span></a>
                    <div className="ps-cart__content">
                      <div className="ps-cart__items">
                        <div className="ps-product--cart-mobile">
                          <div className="ps-product__thumbnail"><a href="#"><img src="img/products/clothing/7.jpg" alt="" /></a></div>
                          <div className="ps-product__content"><a className="ps-product__remove" href="#"><i className="icon-cross" /></a><a href="product-default.html">MVMTH Classical Leather Watch In Black</a>
                            <small>1 x $59.99</small>
                          </div>
                        </div>
                        <div className="ps-product--cart-mobile">
                          <div className="ps-product__thumbnail"><a href="#"><img src="img/products/clothing/5.jpg" alt="" /></a></div>
                          <div className="ps-product__content"><a className="ps-product__remove" href="#"><i className="icon-cross" /></a><a href="product-default.html">Sleeve Linen Blend Caro Pane Shirt</a>
                            &gt;<small>1 x $59.99</small>
                          </div>
                        </div>
                      </div>
                      <div className="ps-cart__footer">
                        <h3>Sub Total:<strong>$59.99</strong></h3>
                        <figure><a className="ps-btn" href="shopping-cart.html">View Cart</a><a className="ps-btn" href="checkout.html">Checkout</a></figure>
                      </div>
                    </div>
                  </div>
                  <div className="ps-block--user-header">
                    <div className="ps-block__left"><i className="icon-user white" /></div>
                    <div className="ps-block__right"><a href="my-account.html" className="white">Login</a><a href="my-account.html" className="white">Register</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="navigation">
            <div className="container">
              <ul className="menu menu--market-2">
                <li><a href="shop-default.html">All Categories</a>
                </li>
                <li><a href="shop-default.html">Today Deals</a>
                </li>
                <li><a href="shop-default.html">Electronics</a>
                </li>
                <li><a href="shop-default.html">Clothing</a>
                </li>
                <li><a href="shop-default.html">Computers</a>
                </li>
                <li><a href="shop-default.html">Furnitures</a>
                </li>
                <li><a href="shop-default.html">Mom &amp; baby</a>
                </li>
                <li><a href="shop-default.html">Track Your Order</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <header className="header header--mobile" data-sticky="true"> 
          <div className="navigation--mobile">
            <div className="navigation__left"><a className="ps-logo" href="index.html"><img src="img/logo_light.png" alt="" /></a></div>
            <div className="navigation__right">
              <div className="header__actions">
                <div className="ps-cart--mini"><a className="header__extra" href="#"><i className="icon-bag2" /><span><i>0</i></span></a>
                  <div className="ps-cart__content">
                    <div className="ps-cart__items">
                      <div className="ps-product--cart-mobile">
                        <div className="ps-product__thumbnail"><a href="#"><img src="img/products/clothing/7.jpg" alt="" /></a></div>
                        <div className="ps-product__content"><a className="ps-product__remove" href="#"><i className="icon-cross" /></a><a href="product-default.html">MVMTH Classical Leather Watch In Black</a>
                          <small>1 x $59.99</small>
                        </div>
                      </div>
                      <div className="ps-product--cart-mobile">
                        <div className="ps-product__thumbnail"><a href="#"><img src="img/products/clothing/5.jpg" alt="" /></a></div>
                        <div className="ps-product__content"><a className="ps-product__remove" href="#"><i className="icon-cross" /></a><a href="product-default.html">Sleeve Linen Blend Caro Pane Shirt</a>
                          <small>1 x $59.99</small>
                        </div>
                      </div>
                    </div>
                    <div className="ps-cart__footer">
                      <h3>Sub Total:<strong>$59.99</strong></h3>
                      <figure><a className="ps-btn" href="shopping-cart.html">View Cart</a><a className="ps-btn" href="checkout.html">Checkout</a></figure>
                    </div>
                  </div>
                </div>
                <div className="ps-block--user-header">
                  <div className="ps-block__left"><i className="icon-user white" /></div>
                  <div className="ps-block__right"><a href="my-account.html" className="white">Login</a><a href="my-account.html" className="white">Register</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-search--mobile">
            <form className="ps-form--search-mobile" action="http://nouthemes.net/html/martfury/index.html" method="get">
              <div className="form-group--nest">
                <input className="form-control" type="text" placeholder="Search something..." />
                <button><i className="icon-magnifier" /></button>
              </div>
            </form>
          </div>
        </header>
        <div className="ps-panel--sidebar" id="cart-mobile">
          <div className="ps-panel__header">
            <h3>Shopping Cart</h3>
          </div>
          <div className="navigation__content">
            <div className="ps-cart--mobile">
              <div className="ps-cart__content">
                <div className="ps-product--cart-mobile">
                  <div className="ps-product__thumbnail"><a href="#"><img src="img/products/clothing/7.jpg" alt="" /></a></div>
                  <div className="ps-product__content"><a className="ps-product__remove" href="#"><i className="icon-cross" /></a><a href="product-default.html">MVMTH Classical Leather Watch In Black</a>
                    <small>1 x $59.99</small>
                  </div>
                </div>
              </div>
              <div className="ps-cart__footer">
                <h3>Sub Total:<strong>$59.99</strong></h3>
                <figure><a className="ps-btn" href="shopping-cart.html">View Cart</a><a className="ps-btn" href="checkout.html">Checkout</a></figure>
              </div>
            </div>
          </div>
        </div>
        <div className="ps-panel--sidebar" id="navigation-mobile">
          <div className="ps-panel__header">
            <h3>Categories</h3>
          </div>
          <div className="ps-panel__content">
            <ul className="menu--mobile">
              <li><a href="#">Hot Promotions</a>
              </li>
              <li className="menu-item-has-children has-mega-menu"><a href="#">Consumer Electronic</a><span className="sub-toggle" />
                <div className="mega-menu">
                  <div className="mega-menu__column">
                    <h4>Electronic<span className="sub-toggle" /></h4>
                    <ul className="mega-menu__list">
                      <li><a href="#">Home Audio &amp; Theathers</a>
                      </li>
                      <li><a href="#">TV &amp; Videos</a>
                      </li>
                      <li><a href="#">Camera, Photos &amp; Videos</a>
                      </li>
                      <li><a href="#">Cellphones &amp; Accessories</a>
                      </li>
                      <li><a href="#">Headphones</a>
                      </li>
                      <li><a href="#">Videosgames</a>
                      </li>
                      <li><a href="#">Wireless Speakers</a>
                      </li>
                      <li><a href="#">Office Electronic</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu__column">
                    <h4>Accessories &amp; Parts<span className="sub-toggle" /></h4>
                    <ul className="mega-menu__list">
                      <li><a href="#">Digital Cables</a>
                      </li>
                      <li><a href="#">Audio &amp; Video Cables</a>
                      </li>
                      <li><a href="#">Batteries</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li><a href="#">Clothing &amp; Apparel</a>
              </li>
              <li><a href="#">Home, Garden &amp; Kitchen</a>
              </li>
              <li><a href="#">Health &amp; Beauty</a>
              </li>
              <li><a href="#">Yewelry &amp; Watches</a>
              </li>
              <li className="menu-item-has-children has-mega-menu"><a href="#">Computer &amp; Technology</a><span className="sub-toggle" />
                <div className="mega-menu">
                  <div className="mega-menu__column">
                    <h4>Computer &amp; Technologies<span className="sub-toggle" /></h4>
                    <ul className="mega-menu__list">
                      <li><a href="#">Computer &amp; Tablets</a>
                      </li>
                      <li><a href="#">Laptop</a>
                      </li>
                      <li><a href="#">Monitors</a>
                      </li>
                      <li><a href="#">Networking</a>
                      </li>
                      <li><a href="#">Drive &amp; Storages</a>
                      </li>
                      <li><a href="#">Computer Components</a>
                      </li>
                      <li><a href="#">Security &amp; Protection</a>
                      </li>
                      <li><a href="#">Gaming Laptop</a>
                      </li>
                      <li><a href="#">Accessories</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li><a href="#">Babies &amp; Moms</a>
              </li>
              <li><a href="#">Sport &amp; Outdoor</a>
              </li>
              <li><a href="#">Phones &amp; Accessories</a>
              </li>
              <li><a href="#">Books &amp; Office</a>
              </li>
              <li><a href="#">Cars &amp; Motocycles</a>
              </li>
              <li><a href="#">Home Improments</a>
              </li>
              <li><a href="#">Vouchers &amp; Services</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navigation--list">
          <div className="navigation__content"><a className="navigation__item ps-toggle--sidebar" href="#menu-mobile"><i className="icon-menu" /><span> Menu</span></a><a className="navigation__item ps-toggle--sidebar" href="#navigation-mobile"><i className="icon-list4" /><span> Categories</span></a><a className="navigation__item ps-toggle--sidebar" href="#search-sidebar"><i className="icon-magnifier" /><span> Search</span></a><a className="navigation__item ps-toggle--sidebar" href="#cart-mobile"><i className="icon-bag2" /><span> Cart</span></a></div>
        </div>
        <div className="ps-panel--sidebar" id="search-sidebar">
          <div className="ps-panel__header">
            <form className="ps-form--search-mobile" action="http://nouthemes.net/html/martfury/index.html" method="get">
              <div className="form-group--nest">
                <input className="form-control" type="text" placeholder="Search something..." />
                <button><i className="icon-magnifier" /></button>
              </div>
            </form>
          </div>
          <div className="navigation__content" />
        </div>
        <div className="ps-panel--sidebar" id="menu-mobile">
          <div className="ps-panel__header">
            <h3>Menu</h3>
          </div>
          <div className="ps-panel__content">
            <ul className="menu--mobile">
              <li className="current-menu-item menu-item-has-children"><a href="index.html">Home</a><span className="sub-toggle" />
                <ul className="sub-menu">
                  <li><a href="index.html">Marketplace Full Width</a>
                  </li>
                  <li><a href="homepage-2.html">Home Auto Parts</a>
                  </li>
                  <li><a href="homepage-10.html">Home Technology</a>
                  </li>
                  <li><a href="homepage-9.html">Home Organic</a>
                  </li>
                  <li><a href="homepage-3.html">Home Marketplace V1</a>
                  </li>
                  <li><a href="homepage-4.html">Home Marketplace V2</a>
                  </li>
                  <li><a href="homepage-5.html">Home Marketplace V3</a>
                  </li>
                  <li><a href="homepage-6.html">Home Marketplace V4</a>
                  </li>
                  <li><a href="homepage-7.html">Home Electronic</a>
                  </li>
                  <li><a href="homepage-8.html">Home Furniture</a>
                  </li>
                  <li><a href="homepage-kids.html">Home Kids</a>
                  </li>
                  <li><a href="homepage-photo-and-video.html">Home photo and picture</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children has-mega-menu"><a href="shop-default.html">Shop</a><span className="sub-toggle" />
                <div className="mega-menu">
                  <div className="mega-menu__column">
                    <h4>Catalog Pages<span className="sub-toggle" /></h4>
                    <ul className="mega-menu__list">
                      <li><a href="shop-default.html">Shop Default</a>
                      </li>
                      <li><a href="shop-default.html">Shop Fullwidth</a>
                      </li>
                      <li><a href="shop-categories.html">Shop Categories</a>
                      </li>
                      <li><a href="shop-sidebar.html">Shop Sidebar</a>
                      </li>
                      <li><a href="shop-sidebar-without-banner.html">Shop Without Banner</a>
                      </li>
                      <li><a href="shop-carousel.html">Shop Carousel</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu__column">
                    <h4>Product Layout<span className="sub-toggle" /></h4>
                    <ul className="mega-menu__list">
                      <li><a href="product-default.html">Default</a>
                      </li>
                      <li><a href="product-extend.html">Extended</a>
                      </li>
                      <li><a href="product-full-content.html">Full Content</a>
                      </li>
                      <li><a href="product-box.html">Boxed</a>
                      </li>
                      <li><a href="product-sidebar.html">Sidebar</a>
                      </li>
                      <li><a href="product-default.html">Fullwidth</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu__column">
                    <h4>Product Types<span className="sub-toggle" /></h4>
                    <ul className="mega-menu__list">
                      <li><a href="product-default.html">Simple</a>
                      </li>
                      <li><a href="product-default.html">Color Swatches</a>
                      </li>
                      <li><a href="product-image-swatches.html">Images Swatches</a>
                      </li>
                      <li><a href="product-countdown.html">Countdown</a>
                      </li>
                      <li><a href="product-multi-vendor.html">Multi-Vendor</a>
                      </li>
                      <li><a href="product-instagram.html">Instagram</a>
                      </li>
                      <li><a href="product-affiliate.html">Affiliate</a>
                      </li>
                      <li><a href="product-on-sale.html">On sale</a>
                      </li>
                      <li><a href="product-video.html">Video Featured</a>
                      </li>
                      <li><a href="product-groupped.html">Grouped</a>
                      </li>
                      <li><a href="product-out-stock.html">Out Of Stock</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu__column">
                    <h4>Woo Pages<span className="sub-toggle" /></h4>
                    <ul className="mega-menu__list">
                      <li><a href="shopping-cart.html">Shopping Cart</a>
                      </li>
                      <li><a href="checkout.html">Checkout</a>
                      </li>
                      <li><a href="whishlist.html">Whishlist</a>
                      </li>
                      <li><a href="compare.html">Compare</a>
                      </li>
                      <li><a href="order-tracking.html">Order Tracking</a>
                      </li>
                      <li><a href="my-account.html">My Account</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="menu-item-has-children has-mega-menu"><a href="#">Pages</a><span className="sub-toggle" />
                <div className="mega-menu">
                  <div className="mega-menu__column">
                    <h4>Basic Page<span className="sub-toggle" /></h4>
                    <ul className="mega-menu__list">
                      <li><a href="about-us.html">About Us</a>
                      </li>
                      <li><a href="contact-us.html">Contact</a>
                      </li>
                      <li><a href="faqs.html">Faqs</a>
                      </li>
                      <li><a href="comming-soon.html">Comming Soon</a>
                      </li>
                      <li><a href="404-page.html">404 Page</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu__column">
                    <h4>Vendor Pages<span className="sub-toggle" /></h4>
                    <ul className="mega-menu__list">
                      <li><a href="become-a-vendor.html">Become a Vendor</a>
                      </li>
                      <li><a href="vendor-store.html">Vendor Store</a>
                      </li>
                      <li><a href="vendor-dashboard-free.html">Vendor Dashboard Free</a>
                      </li>
                      <li><a href="vendor-dashboard-pro.html">Vendor Dashboard Pro</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="menu-item-has-children has-mega-menu"><a href="#">Blogs</a><span className="sub-toggle" />
                <div className="mega-menu">
                  <div className="mega-menu__column">
                    <h4>Blog Layout<span className="sub-toggle" /></h4>
                    <ul className="mega-menu__list">
                      <li><a href="blog-grid.html">Grid</a>
                      </li>
                      <li><a href="blog-list.html">Listing</a>
                      </li>
                      <li><a href="blog-small-thumb.html">Small Thumb</a>
                      </li>
                      <li><a href="blog-left-sidebar.html">Left Sidebar</a>
                      </li>
                      <li><a href="blog-right-sidebar.html">Right Sidebar</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu__column">
                    <h4>Single Blog<span className="sub-toggle" /></h4>
                    <ul className="mega-menu__list">
                      <li><a href="blog-detail.html">Single 1</a>
                      </li>
                      <li><a href="blog-detail-2.html">Single 2</a>
                      </li>
                      <li><a href="blog-detail-3.html">Single 3</a>
                      </li>
                      <li><a href="blog-detail-4.html">Single 4</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
       
        </>
    );
};

export default Header;