import React from "react";

import "../../assets/css/base.css";
import "../../assets/css/header.css";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function Header() {
    const product = useSelector((state) => state.cart.cartItem);
    const qttProduct = product.length;
    return (
        <div className="header container">
            <div className="header_top">
                <div className="col-12 container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header-top-wrapper">
                                <div className="top-bar-left">
                                    <ul className="top-bar-left-menu">
                                        <li className="top-bar-left-menu__list">
                                            <a href=" ">Tra cứu đơn hàng</a>
                                        </li>
                                        <li className="top-bar-left-menu__list">
                                            <a href=" ">Tạp chí thời trang</a>
                                        </li>
                                        <li className="top-bar-left-menu__list">
                                            <a href=" ">Liên hệ</a>
                                        </li>
                                        <li className="top-bar-left-menu__list">
                                            <a href=" ">
                                                HỆ THỐNG CỬA HÀNG TOÀN QUỐC
                                            </a>
                                        </li>
                                        <li className="top-bar-left-menu__list">
                                            <a href=" ">Tuyển dụng</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="top-bar-right">
                                    <p>
                                        HotLine:
                                        <a href=" ">
                                            <b> 1800 2086 </b>
                                        </a>
                                        (Miễn phí)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-container">
                <div className="container">
                    <div className="row box-logo-mobile">
                        {/* start header logo search cart mobile */}
                        <div className="mobile-box-logo">
                            <div className="box-logo__logo">
                                <Link to="/">
                                    <img
                                        src="https://yody.vn/tp/T0110/img/tmp/homeMobile/logoMobile.svg"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="mobile-search-cart">
                                <form className="mobile-form">
                                    <button type="">
                                        <i className="far fa-search"></i>
                                    </button>
                                    <input
                                        type="text"
                                        placeholder="Tìm sản phẩm"
                                    />
                                </form>
                                <Link to="/cart" className="icon-cart">
                                    <i className="far fa-shopping-cart"></i>
                                </Link>
                                <Link to="" className="icon-menu">
                                    <i className="far fa-bars"></i>
                                </Link>
                            </div>
                        </div>
                        {/* end header logo search cart mobile */}
                        <div className="col-lg-3 col-md-3 header-container-img">
                            <Link to="/" className="hide-on-mobile">
                                <img
                                    src="https://storage.googleapis.com/cdn.nhanh.vn/store/3138/logo_1615426885_logo-yody.png"
                                    alt="logo"
                                />
                            </Link>
                        </div>
                        <div className="col-lg-5 col-md-5 header-container-search-wrap">
                            <form className="d-flex">
                                <input
                                    type="text"
                                    className="header-container-search-wrap__input form-control"
                                    placeholder="Tìm sản phẩm"
                                />
                                <button className="header-container-search-wrap__btn">
                                    <i className="icon fas fa-search"></i>
                                </button>
                            </form>
                        </div>
                        <div className="col-lg-4 col-md-4 header-container-right">
                            <div className="header-container-right-login">
                                <div className="header-container-right-login__wrapper">
                                    <div className="header-container-right-login--separate">
                                        <i className="far fa-user"></i>
                                    </div>
                                    <p>Tài khoản</p>
                                    <i className="far fa-caret-down"></i>
                                </div>
                                {/* hover user */}
                                <div className="header-container-login-user">
                                    <div className="header-container-login-user__register">
                                        <Link to="/user/singin">Đăng nhập</Link>
                                    </div>
                                    <div className="header-container-login-user__login">
                                        <Link to="/user/singup">Đăng ký</Link>
                                    </div>
                                </div>
                            </div>
                            <Link to="/cart">
                                <div className="header-container-right-cart">
                                    <div className="header-container-right-cart__wrapper">
                                        <div className="header-container-right-cart--separate">
                                                <i className="far fa-shopping-cart"></i>
                                            
                                        </div>
                                        <div className="qtt-cart">
                                            <span className="count-cart"></span>
                                            <p> {qttProduct} Sản phẩm</p>
                                        </div>
                                        <i className="far fa-caret-down" style={{color:'#333'}}></i>
                                    </div>
                                    {/* has cart */}
                                    {/* <div className="header-container-right-cart-has-cart">
                                        <div className="header-container-right-cart-no-cart">
                                            <p>Giỏ hàng của bạn đang trống</p>
                                        </div>
                                    </div> */}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
