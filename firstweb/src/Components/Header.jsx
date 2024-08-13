import React from 'react';
import { Link,useNavigate } from "react-router-dom";
import mylogo from '../images/about/mylogo.jpeg';

const Header = () => {
  const navigate = useNavigate();

  const handleServicesClick = () => {
    // Navigate to the /realestate route
    navigate('/Realestate');
    navigate('/Ecommerce');
    navigate('/Healthcare');
    navigate('/Food');
    navigate('/Entertainment');
    navigate('/Education');
    navigate('/Travel');
    navigate('/Sport');
    navigate('/Socialmedia');
    navigate('/Grocery');
    navigate('/Jobs');
    navigate('/Engineering');
    navigate('/Taxibook');
  };
  return (
    <>
      <header className="navigation">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-2 col-md-4">
              
                <div className="header-top-socials text-center text-lg-left text-md-left">
                  
                  <a href="https://www.facebook.com/themefisher" target="_blank"><i className="ti-facebook"></i></a>
                  <a href="https://twitter.com/themefisher" target="_blank"><i className="ti-twitter"></i></a>
                  <a href="https://github.com/themefisher/" target="_blank"><i className="ti-github"></i></a>
                </div>
              </div>
              <div className="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
                <div className="header-top-info">
                  <a href="tel:+919664508201">Call Us: <span>+91 9664508201</span></a>
                  <a href="mailto:info@theonecrawlingsolutions.com"><i className="fa fa-envelope mr-2"></i><span>theonecrawlingsolutions@gmail.com</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg py-4" id="navbar">
          <div className="container">
          <img src={mylogo} alt="" style={{ width: '100px', height: '70px', marginTop: '-px', marginLeft: '-50px' }} />

            <Link className="navbar-brand" to="/">Theone Crawling Solution</Link>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarsExample09">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</Link>
                  <div className="dropdown-menu" aria-labelledby="dropdown03">
                    <Link className="dropdown-item" to="/About">About</Link>
                    <Link className="dropdown-item" to="/Blog">Blog</Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</Link>
                  <div className="dropdown-menu" aria-labelledby="dropdown05">
                    <Link className="dropdown-item" to="/Realestate">Real Estate Data Scraping</Link>
                    <Link className="dropdown-item" to="/Ecommerce">E-Commerce and Retail Scraping</Link>
                    <Link className="dropdown-item" to="/Healthcare">Healthcare Scraping</Link>
                    <Link className="dropdown-item" to="/Food">Food Scraping</Link>
                    <Link className="dropdown-item" to="/Entertainment">Entertainment Scraping</Link>
                    <Link className="dropdown-item" to="/Education">Education Scraping</Link>
                    <Link className="dropdown-item" to="/Travel">Travels Scraping</Link>
                    <Link className="dropdown-item" to="/Sport">Sports Scraping</Link>
                    <Link className="dropdown-item" to="/Grocery">Grocery Site Scraping</Link>
                    <Link className="dropdown-item" to="/Socialmedia">Social media Scraping</Link>
                    <Link className="dropdown-item" to="/Jobs">jobs site Scraping</Link>
                    <Link className="dropdown-item" to="/Engineering">Engineering Scraping</Link>
                    <Link className="dropdown-item" to="/Taxibook">Taxibook Scraping</Link>
                  </div>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/Portfolio">Portfolio</Link></li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="dropdown06" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</Link>
                  <div className="dropdown-menu" aria-labelledby="dropdown06">
                    <Link className="dropdown-item" to="/blog-grid.html">Blog Grid</Link>
                    <Link className="dropdown-item" to="/blog-sidebar.html">Blog with Sidebar</Link>
                    <Link className="dropdown-item" to="/blog-single.html">Blog Single</Link>
                  </div>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;
