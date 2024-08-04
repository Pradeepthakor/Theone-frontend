import React from "react";

// import "../css/style.css"; // Import your CSS file
// import "../styles/_style.scss";
// import "C:/firstweb/src/scss/style.scss";


// import { Link } from "react-router-dom";
// import Header from "../Components/Header";
import Aboutcomponent from "../Components/Aboutcomponent";
import Services from "./Services";


const Home = () => {
    return (
        <>

            <div className="main-wrapper ">
                {/* Link to a CSS file in public folder */}
                <link rel="stylesheet" type="text/css" to="/assets/css/style.css" />

                {/* Import Bootstrap CSS from public folder */}
                <link rel="stylesheet" to="/assets/bootstrap/css/bootstrap.min.css" />

                {/* Import external JavaScript file */}
                <script src="/path/to/your/external.js"></script>

                
                {/* <!-- Slider Start --> */}
                <section className="slider">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-10">
                                <div className="block">
                                    <span className="d-block mb-3 text-white text-capitalize">Prepare for new future</span>
                                    <h1 className="animated fadeInUp mb-5" >Our work is <br />presentation of our <br />capabilities.</h1>
                                    <a href="#" target="_blank" className="btn btn-main animated fadeInUp btn-round-full" >Get started<i className="btn-icon fa fa-angle-right ml-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br></br>
                {/* <!-- Section Intro Start --> */}

                <section className="section intro">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-8">
                                <div className="section-title">
                                    <span className="h6 text-color ">We are creative & expert people</span>
                                    <h2 className="mt-3 content-title">We work with business & provide solution to client with their business problem </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="intro-item mb-5 mb-lg-0">
                                    <i className="ti-desktop color-one"></i>
                                    <h4 className="mt-4 mb-3">Increased efficiency and cost savings</h4>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="intro-item mb-5 mb-lg-0">
                                    <i className="ti-medall color-one"></i>
                                    <h4 className="mt-4 mb-3">Market research and competitive intelligence</h4>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="intro-item">
                                    <i className="ti-layers-alt color-one"></i>
                                    <h4 className="mt-4 mb-3">Data-Driven decision-making,Unignorable Data Opportunities</h4>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <Aboutcomponent />

                <Services />


                {/* <section className="section testimonial"> */}
                    {/* <div className="container">
                        <div className="row">
                            <div className="col-lg-7 ">
                                <div className="section-title">
                                    <span className="h6 text-color">Clients testimonial</span>
                                    <h2 className="mt-3 content-title">Check what's our clients say about us</h2>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="container">
                        <div className="row testimonial-wrap">
                            <div className="testimonial-item position-relative">
                                <i className="ti-quote-left text-color"></i>

                                <div className="testimonial-item-content">
                                    <p className="testimonial-text">Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur natus iusto recusandae numquam corrupti facilis blanditiis.</p>

                                    <div className="testimonial-author">
                                        <h5 className="mb-0 text-capitalize">Thomas Johnson</h5>
                                        <p>Excutive Director,themefisher</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item position-relative">
                                <i className="ti-quote-left text-color"></i>

                                <div className="testimonial-item-content">
                                    <p className="testimonial-text">Consectetur adipisicing elit. Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur natus iusto recusandae .</p>

                                    <div className="testimonial-author">
                                        <h5 className="mb-0 text-capitalize">Mickel hussy</h5>
                                        <p>Excutive Director,themefisher</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item position-relative">
                                <i className="ti-quote-left text-color"></i>

                                <div className="testimonial-item-content">
                                    <p className="testimonial-text">Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur natus iusto recusandae numquam corrupti.</p>

                                    <div className="testimonial-author">
                                        <h5 className="mb-0 text-capitalize">James Watson</h5>
                                        <p>Excutive Director,themefisher</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item position-relative">
                                <i className="ti-quote-left text-color"></i>

                                <div className="testimonial-item-content">
                                    <p className="testimonial-text">Consectetur adipisicing elit. Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur natus iusto recusandae .</p>

                                    <div className="testimonial-author">
                                        <h5 className="mb-0 text-capitalize">Mickel hussy</h5>
                                        <p>Excutive Director,themefisher</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                {/* </section> */}
                {/* <!-- Section Testimonial End --> */}
                <section className="section latest-blog bg-2">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 text-center">
                                <div className="section-title">
                                    <span className="h6 text-color">Latest News</span>
                                    <h2 className="mt-3 content-title text-white">Latest articles to enrich knowledge</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 mb-5">
                                <div className="card bg-transparent border-0">
                                    <img src="assets/images/blog/1.jpg" alt="" className="img-fluid rounded" />

                                    <div className="card-body mt-2">
                                        <div className="blog-item-meta">
                                            <a href="#" className="text-white-50">Development<span className="ml-2 mr-2">/</span></a>
                                            <a href="#" className="text-white-50">Programing<span className="ml-2">/</span></a>
                                            <a href="#" className="text-white-50 ml-2"><i className="fa fa-user mr-2"></i>admin</a>
                                        </div>

                                        <h3 className="mt-3 mb-5 lh-36"><a href="#" className="text-white ">How to improve design with typography?</a></h3>

                                        <a href="blog-single.html" className="btn btn-small btn-solid-border btn-round-full text-white">Learn More</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-5">
                                <div className="card border-0 bg-transparent">
                                    <img src="assets/images/blog/2.jpg" alt="" className="img-fluid rounded" />

                                    <div className="card-body mt-2">
                                        <div className="blog-item-meta">
                                            <a href="#" className="text-white-50">Development<span className="ml-2 mr-2">/</span></a>
                                            <a href="#" className="text-white-50">Programing<span className="ml-2">/</span></a>
                                            <a href="#" className="text-white-50 ml-2"><i className="fa fa-user mr-2"></i>admin</a>
                                        </div>

                                        <h3 className="mt-3 mb-5 lh-36"><a href="#" className="text-white">Interactivity Logic may connect consumer</a></h3>

                                        <a href="blog-single.html" className="btn btn-small btn-solid-border btn-round-full text-white">Learn More</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-5">
                                <div className="card border-0 bg-transparent">
                                    <img src="assets/images/blog/3.jpg" alt="" className="img-fluid rounded" />

                                    <div className="card-body mt-2">
                                        <div className="blog-item-meta">
                                            <a href="#" className="text-white-50">Development<span className="ml-2 mr-2">/</span></a>
                                            <a href="#" className="text-white-50">Progming<span className="ml-2">/</span></a>
                                            <a href="#" className="text-white-50 ml-2"><i className="fa fa-user mr-2"></i>admin</a>
                                        </div>

                                        <h3 className="mt-3 mb-5 lh-36"><a href="#" className="text-white">Marketing Strategy to bring more affect</a></h3>

                                        <a href="blog-single.html" className="btn btn-small btn-solid-border btn-round-full text-white">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-70 position-relative">
                    <div className="container">
                        <div className="cta-block-2 bg-gray p-5 rounded border-1">
                            <div className="row justify-content-center align-items-center ">
                                <div className="col-lg-7">
                                    {/* <span className="text-color">For Every type business</span> */}
                                    <h2 className="mt-2 mb-4 mb-lg-0">Entrust Your Project to Our Best Team of Professionals</h2>
                                </div>
                                <div className="col-lg-4">
                                    <a href="contact.html" className="btn btn-main btn-round-full float-lg-right ">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                {/* <!-- footer Start --> */}


            </div>



            {/* <!-- Google Map --> */}
            <script src="plugins/google-map/map.js"></script>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkeLMlsiwzp6b3Gnaxd86lvakimwGA6UA&callback=initMap"></script>

            <script src="js/script.js"></script>


        </>
    )
}

export default Home;