import React from 'react'
import { Link } from 'react-router-dom';
import foodImage from '../images/about/food.jpg';
import foodImage1 from '../images/about/food1.jpg';
import foodImage2 from '../images/about/pexels-ella-olsson-1640777.jpg';

const Food = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="hero-heading">Food Delivery Scraping</h1>
            <h3>Starving for insights into the food delivery war zone?</h3>
            <br></br>
            <p className="hero-subheading">Forget stale scraps; get ready to devour a five-course data buffet with The One Crawling Solution. We're the secret spice in your app, unearthing hidden gems and trends hotter than a habanero. </p>
          </div>
          <div className="col-lg-6 text-right">
            <img src={foodImage} alt="Food Delivery Scraping" className="food-image" style={{ width: '100%', marginTop: '20px' }} />
          </div>
        </div>
        <br></br>
        <div className="content">
          <div className="row">
            <div className="col-lg-6">
              <img src={foodImage1} alt="Food Delivery Scraping" className="food-image1" style={{ width: '100%', marginTop: '20px' }} />
            </div>
            <div className="col-lg-6">
              <h3 className="title">What Can You Do With the Data?</h3>
              <ul>
                <li>
                  <strong>Every menu is a map:</strong> Prices, dishes, deals – exposed like a chef's secret recipe. Know what rivals are cooking, and what customers crave.
                </li>
                <li>
                  <strong>Ghost kitchens galore:</strong> Discover hidden jewels before the masses, and become the delivery Robin Hood of off-the-beaten-path bites.
                </li>
                <li>
                  <strong>Delivery decoded:</strong> Track trends, map hot zones, and predict peak times like a seasoned waiter. Know when the hunger pangs hit hardest.
                </li>
                <li>
                  <strong>Competitor cravings:</strong> Peek at their secret menu, pricing tricks, and marketing moves. Learn their tricks, and outsmart their hacks.
                </li>
              </ul>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col-lg-6">
              <strong>We meticulously scrub and polish this raw data, serving it up on a silver platter of success:</strong>
              <ul>
                <li>
                  <strong>Target the right foodies:</strong> Deliver personalized offers, and hit bullseyes with every marketing campaign. Watch those orders roll in like a sushi train.
                </li>
                <li>
                  <strong>Craft drool-worthy campaigns:</strong> Know what people crave, where they crave it, when they crave it. Your marketing will be irresistible, like a perfectly salted french fry.
                </li>
                <li>
                  <strong>Optimize your app:</strong> Identify pain points, streamline the experience, and watch ratings soar like a soufflé. Make your app the smoothest ride in town.
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <img src={foodImage2} alt="Food Delivery Scraping" className="food-image2" style={{ width: '100%', marginTop: '20px' }} />
            </div>
          </div>
          <br></br>
          <strong>Ditch the manual menu browsing, stop guessing what's hot, and leave the data drudgery to us. We deliver a clean, structured feast, ready to empower your:</strong>
          <br></br>
          <div className="col-lg-12">
            <ul>
              <li>
                <strong>Restaurant rocket ship:</strong> Blast past the competition with data-driven decisions and targeted strategies. Become the go-to spot for every craving.
              </li>
              <li>
                <strong>Delivery dynasty:</strong> Reign over your local market, expand into new territories, and build a loyal customer base. Rule the food kingdom!
              </li>
              <li>
                <strong>Tech triumph:</strong> Finesse your app, personalize the experience, and become the platform for every food fantasy. Be the Willy Wonka of the delivery world.
              </li>
            </ul>
            <strong>Stop sifting through leftovers. Let The One Crawling Solution turn data into your secret ingredient for food delivery dominance.</strong>
          </div>
        </div>
      </div>
      <br></br>
      <h3 className="title">Ready to cook up some profits? Contact us today!</h3>
    </div>
  )
}

export default Food
