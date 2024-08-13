import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <footer className="footer section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="widget">
                                    <h4 className="text-capitalize mb-4">Company</h4>

                                    <ul className="list-unstyled footer-menu lh-35">
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Support</a></li>
                                        {/* <li><a href="#">FAQ</a></li> */}
                                        <li><Link to="/Faqs">FAQ</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="widget">
                                    <h4 className="text-capitalize mb-4">Quick Links</h4>

                                    <ul className="list-unstyled footer-menu lh-35">
                                        {/* <li><a href="#">About</a></li> */}
                                        <li><Link to="/About">About</Link></li>
                                        <li><Link to="/Services">Services</Link></li>
                                        <li><a href="#">Team</a></li>
                                        <li><Link to="/Contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="widget">
                                    <h4 className="text-capitalize mb-4">Contact Us</h4>
                                    <p>contact us low rates data scraping  </p>

                                    <form action="#" className="sub-form">
                                        <input type="text" className="form-control mb-3" placeholder="Contact Us ..." />
                                        <a href="#" className="btn btn-main btn-small">Connect</a>
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-3 ml-auto col-sm-6">
                                <div className="widget">
                                    <div className="logo mb-4">
                                        <h3>Theone Crawling Solution </h3>
                                    </div>
                                    <h6><a href="tel:+91 9664508201" >theonecrawlingsolutions@gmail.com</a></h6>
                                    <a href="theonecrawlingsolutions@gmail.com"><span className="text-color h4">+91 9664508201</span></a>
                                </div>
                            </div>
                        </div>

                        <div className="footer-btm pt-4">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="copyright">
                                        &copy; Copyright Reserved to <span className="text-color">theonecrawlingsolutions.com</span> by <a href="https://themefisher.com/" target="_blank">theonecrawlingsolutions</a>
                                    </div>
                                </div>


                                <div className="col-lg-4 col-md-12 col-sm-12 text-left text-lg-left">
                                    <ul className="list-inline footer-socials">
                                        <li className="list-inline-item"><a href="https://www.facebook.com/themefisher"><i className="ti-facebook mr-2"></i>Facebook</a></li>
                                        <li className="list-inline-item"><a href="https://twitter.com/themefisher"><i className="ti-twitter mr-2"></i>Twitter</a></li>
                                        <li className="list-inline-item"><a href="https://www.pinterest.com/themefisher/"><i className="ti-linkedin mr-2 "></i>Linkedin</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
    </>
  )
}
export default Footer;