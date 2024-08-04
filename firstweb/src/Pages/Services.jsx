import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <section className="section service border-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <span className="h6 text-color">Our Services</span>
                <h2 className="mt-3 content-title ">We provide a wide range of creative services</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="fas fa-home"></i>
                <h4 className="mb-3"><Link to="/realestate">Real Estate Data Scraping</Link></h4>
                <p>Your real estate intel just got a quantum leap. Introducing The One Crawling Solution’s Real Estate Data Scraping – your laser-guided roadmap to market domination.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="fas fa-shopping-cart"></i>
                <h4 className="mb-3"><Link to="/ecommerce">E-Commerce and Retail Scraping</Link></h4>
                <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="fas fa-stethoscope"></i>
                <h4 className="mb-3"><Link to="/Healthcare">Healthcare Scraping</Link></h4>
                <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="fas fa-utensils"></i>
                <h4 className="mb-3"><Link to="/Food">Food Scraping</Link></h4>
                <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="fas fa-film"></i>
                <h4 className="mb-3"><Link to="/Entertainment">Entertainment Scraping</Link></h4>
                <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="fas fa-film"></i>
                <h4 className="mb-3"><Link to="/Education">Education Scraping</Link></h4>
                <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="fas fa-film"></i>
                <h4 className="mb-3"><Link to="/Travel">Travels Scraping</Link></h4>
                <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="fas fa-film"></i>
                <h4 className="mb-3"><Link to="/Sport">Sports Scraping</Link></h4>
                <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="fas fa-film"></i>
                <h4 className="mb-3"><Link to="/Grocery">Grocery Site Scraping</Link></h4>
                <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="fas fa-film"></i>
                <h4 className="mb-3"><Link to="/Socialmedia">Social media Scraping</Link></h4>
                <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="fas fa-film"></i>
                <h4 className="mb-3"><Link to="/Jobs">jobs site Scraping</Link></h4>
                <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="fas fa-cogs"></i>
                <h4 className="mb-3"><Link to="/Engineering">Engineering Scraping</Link></h4>
                <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="fas fa-taxi"></i>
                <h4 className="mb-3"><Link to="/Taxibook">Taxibook Scraping</Link></h4>
                <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="cta-item bg-white p-5 rounded">
                <span className="h6 text-color">We create for you</span>
                <h2 className="mt-2 mb-4">Entrust Your Project to Our Best Team of Professionals</h2>
                <p className="lead mb-4">Have any project on mind? For immediate support:</p>
                <h3><i className="ti-mobile mr-3 text-color"></i>+91 966508201</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;