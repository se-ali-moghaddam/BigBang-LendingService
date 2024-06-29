import Header from '../../components/header';
import Footer from '../../components/footer';
import './home.css';

export default function Home() {
    return (
        <div>
            {/****** Header Area Start ******/}
            < Header >
                {/****** Menu Start ******/}
                < ul className="nav" >
                    <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                    <li className="scroll-to-section"><a href="#services">Services</a></li>
                    <li className="scroll-to-section"><a href="#about">About</a></li>
                    <li>
                        <div className="gradient-button">
                            <a href=""><i className="fa fa-sign-in-alt"></i> Launch App</a>
                        </div>
                    </li>
                </ul >
                <a className='menu-trigger'>
                    <span>Menu</span>
                </a>
                {/****** Menu Start ******/}
            </Header >
            {/****** Header Area End ******/}

            <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data- wow-delay="0.5s" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-6 align-self-center">
                                    <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h2>BigBang</h2>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita repudiandae, rerum inventore dolor nisi officia non accusantium ullam aperiam sequi quos libero impedit veritatis, culpa repellendus laboriosam? Quam, necessitatibus harum.</p>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="white-button first-button scroll-to-section">
                                                    <a href="">Get Satarted !</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <img src="assets/images/slider-dec.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="services" className="services section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                                <h4>Amazing <em>Services &amp; Features</em> for you</h4>
                                <img src="assets/images/heading-line-dec.png" alt="" />
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus numquam voluptate reiciendis quo minus vero libero fugit doloremque iure aliquid, explicabo ipsum architecto nesciunt ea nobis similique quaerat dolorum, quisquam recusandae totam a rerum. Vitae illum repudiandae omnis rem officiis blanditiis accusantium dolores quae impedit? Esse illum maiores officiis maxime.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="service-item first-service">
                                <div className="icon"></div>
                                <h4>Lorem, ipsum.</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptas.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-item second-service">
                                <div className="icon"></div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, ipsam.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-item third-service">
                                <div className="icon"></div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, minima.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-item fourth-service">
                                <div className="icon"></div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <p>Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth quinoa and fashion axe.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="about" className="about-us section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="section-heading">
                                <h4>About <em>What We Do</em> &amp; Who We Are</h4>
                                <img src="assets/images/heading-line-dec.png" alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="box-item">
                                        <h4><a href="#">Lorem, ipsum dolor.</a></h4>
                                        <p>Lorem Ipsum Text</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="box-item">
                                        <h4><a href="#">Lorem, ipsum dolor.</a></h4>
                                        <p>Lorem Ipsum Text</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="box-item">
                                        <h4><a href="#">Lorem, ipsum dolor.</a></h4>
                                        <p>Lorem Ipsum Text</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="box-item">
                                        <h4><a href="#">Lorem, ipsum dolor.</a></h4>
                                        <p>Lorem Ipsum Text</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor idunte ut labore et dolore adipiscing  magna.</p>
                                    <div className="gradient-button">
                                        <a href="#">Get Started !</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-image">
                                <img src="assets/images/about-right-dec.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-heading">
                            <h4>Getting Touch and retch more informations about our company</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer-widget">
                            <h4>Contact Us</h4>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <p><a href="#">+98-21-000-0000-000</a></p>
                            <p><a href="#">@company-socials</a></p>
                            <p><a href="#">info@company.co</a></p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-widget">
                            <h4>About Us</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Refrence</a></li>
                                <li><a href="#">Refrence</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-widget">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="#">Refrence</a></li>
                                <li><a href="#">Refrence</a></li>
                                <li><a href="#">Refrence</a></li>
                                <li><a href="#">Refrence</a></li>
                                <li><a href="#">Refrence</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-widget">
                            <h4>About Our Company</h4>
                            <div className="logo">
                                <img src="assets/images/white-logo.png" alt="" />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="copyright-text">
                            <p>Copyright © 2024 BigBnag Group. All Rights Reserved.
                                 <br />Development : {/*<a href="https://ali-moghaddam.me" target="_blank" title="designer">Ali Moghaddam</a>*/} Ali Moghaddam</p>
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    )
}