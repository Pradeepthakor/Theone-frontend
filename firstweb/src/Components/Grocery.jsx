// import React from 'react'
// import { Link } from 'react-router-dom';


// const Grocery = () => {
//   return (
//     <div className="hero-section">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <h1 className="hero-heading">Grocery Delivery Scraping</h1>
//             <h3>Get Grocery Insights with One Click With Our Solutions</h3>
//             <br></br>
//             <p className="hero-subheading">Struggling to navigate the cutthroat world of grocery delivery? Ditch the coupons and scan flyers – it's time to grab a data cart and shop for insights the smart way. </p>
//             <p className="hero-subheading">The One Crawling Solution unlocks the pantry of possibilities hidden within those delivery apps, serving up fresh, juicy intel so you can dominate the aisles.</p>
//           </div>
//         </div>
//         <div className="content">
//           <h3 className="title">What If You Knew?</h3>
//           <div className="value">
//             <ul>
//               <li>
//                 <strong>What your rivals stock:</strong> Prices, brands, trending items – laid bare like a weekly ad. Outsmart their specials and stay one step ahead.
//               </li>
//               <li>
//                 <strong>Hidden grocery goldmines: </strong> Discover niche markets and local gems before the competition. Become the Robin Hood of delivery, delivering forgotten favorites faster than a shopper on a sugar rush.
//               </li>
//               <li>
//                 <strong>Delivery decoded:</strong>Track peak hours, map high-demand zones, and predict shopping sprees like a seasoned cashier. Know when those carts overflow and tills ring.
//               </li>
//               <li>
//                 <strong>Customer cravings cracked: </strong>Peek at their grocery lists, loyalty programs, and buying habits. Learn what they yearn for and keep them coming back for seconds (or thirds).
//               </li>
//             </ul>
//             <div className="content">
//               <h3 className="title">We Don't Just Deliver Data</h3>
//               <div className="value">
//                 <p>We scrub, polish, and organize, plating up insights ready to energize your success:</p>
//                 <ul>
//                   <li>
//                     <strong>Target the right shoppers:</strong>Craft personalized deals and promotions that hit bullseyes, not bargain bins. Watch those orders roll in like a conveyor belt of profit.
//                   </li>
//                   <li>
//                     <strong>Cook up irresistible campaigns:</strong> Know what they crave, where they buy, and when they stock up. Your marketing will be as tempting as a freshly baked croissant.
//                   </li>
//                   <li>
//                     <strong>Optimize your app:</strong> Streamline the checkout, fix those buggy aisles, and watch user satisfaction soar like a soufflé. Make your app the smoothest, tastiest grocery experience in town.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="content">
//               <h3 className="title">How Will You Benefit From This?</h3>
//               <div className="value">
//                 <p>We serve up a clean, structured feast of information, ready to empower your:</p>
//                 <ul>
//                   <li>
//                     <strong>Grocery growth engine:</strong>Fuel your expansion with data-driven decisions and targeted strategies. Become the one-stop shop for every household need.
//                   </li>
//                   <li>
//                     <strong>Delivery dominance:</strong> Reign supreme in your local market, conquer new neighborhoods, and build a loyal army of shoppers. Own the grocery kingdom!
//                   </li>
//                   <li>
//                     <strong>Tech triumph:</strong> Refine your app, personalize the experience, and become the platform for every culinary dream. Be the Willy Wonka of the delivery world, where the golden ticket is a perfectly packed fridge.
//                   </li> 
//                 </ul>
//               </div>
//             </div>

//             <strong>Stop rummaging in the bargain bin of insights.</strong>
//             <p>Grab your data cart and let The One Crawling Solution take your grocery delivery app to the top shelf.</p>


//           </div>
//         </div>
//       </div>
//       <br></br>
//       <h3 className="title">Ready to stock up on success? Contact us today!</h3>
//     </div>
//   )
// }
// export default Grocery

// <---------------***************************************--------------------->
import React from 'react'
import { Link } from 'react-router-dom';
import GroceryImage from '../images/about/grocery.jpg';
import GroceryImage1 from '../images/about/grocery1.jpg';
import GroceryImage2 from '../images/about/grocery2.jpg';

const Grocery = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="hero-heading">Grocery Delivery Scraping</h1>
            <h3>Get Grocery Insights with One Click With Our Solutions</h3>
            <br></br>
            <p className="hero-subheading">Struggling to navigate the cutthroat world of grocery delivery? Ditch the coupons and scan flyers – it's time to grab a data cart and shop for insights the smart way. </p>
            <p className="hero-subheading">The One Crawling Solution unlocks the pantry of possibilities hidden within those delivery apps, serving up fresh, juicy intel so you can dominate the aisles.</p>
          </div>
          <div className="col-lg-6 text-right">
            <img src={GroceryImage} alt="Grocery Delivery Scraping" className="food-image" style={{ width: '100%', marginTop: '20px' }} />
          </div>
        </div>
        <br></br>
        <div className="content">
          <div className="row">
            <div className="col-lg-6">
              <img src={GroceryImage1} alt="Grocery Delivery Scraping" className="food-image1" style={{ width: '100%', marginTop: '20px' }} />
            </div>
            <div className="col-lg-6">
              <h3 className="title">What If You Knew?</h3>
              <ul>
              <li>
                <strong>What your rivals stock:</strong> Prices, brands, trending items – laid bare like a weekly ad. Outsmart their specials and stay one step ahead.
              </li>
              <li>
                <strong>Hidden grocery goldmines: </strong> Discover niche markets and local gems before the competition. Become the Robin Hood of delivery, delivering forgotten favorites faster than a shopper on a sugar rush.
              </li>
              <li>
                <strong>Delivery decoded:</strong>Track peak hours, map high-demand zones, and predict shopping sprees like a seasoned cashier. Know when those carts overflow and tills ring.
              </li>
              <li>
                <strong>Customer cravings cracked: </strong>Peek at their grocery lists, loyalty programs, and buying habits. Learn what they yearn for and keep them coming back for seconds (or thirds).
              </li>
            </ul>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col-lg-6">
            <h3 className="title">We Don't Just Deliver Data</h3>
            <p>We scrub, polish, and organize, plating up insights ready to energize your success:</p>
              <ul>
                  <li>
                    <strong>Target the right shoppers:</strong>Craft personalized deals and promotions that hit bullseyes, not bargain bins. Watch those orders roll in like a conveyor belt of profit.
                  </li>
                  <li>
                    <strong>Cook up irresistible campaigns:</strong> Know what they crave, where they buy, and when they stock up. Your marketing will be as tempting as a freshly baked croissant.
                  </li>
                  <li>
                    <strong>Optimize your app:</strong> Streamline the checkout, fix those buggy aisles, and watch user satisfaction soar like a soufflé. Make your app the smoothest, tastiest grocery experience in town.
                  </li>
               </ul>
            </div>
            <div className="col-lg-6">
              <img src={GroceryImage2} alt="Grocery Delivery Scraping" className="food-image2" style={{ width: '100%', marginTop: '20px' }} />
            </div>
          </div>
          <br></br>
          
          <br></br>
          <div className="col-lg-12">
          <h3 className="title">How Will You Benefit From This?</h3>
          <p>We serve up a clean, structured feast of information, ready to empower your:</p>
                <ul>
                  <li>
                    <strong>Grocery growth engine:</strong>Fuel your expansion with data-driven decisions and targeted strategies. Become the one-stop shop for every household need.
                  </li>
                  <li>
                    <strong>Delivery dominance:</strong> Reign supreme in your local market, conquer new neighborhoods, and build a loyal army of shoppers. Own the grocery kingdom!
                  </li>
                  <li>
                    <strong>Tech triumph:</strong> Refine your app, personalize the experience, and become the platform for every culinary dream. Be the Willy Wonka of the delivery world, where the golden ticket is a perfectly packed fridge.
                  </li> 
                </ul>
                <br></br>
                <strong>Stop rummaging in the bargain bin of insights.</strong>
            <p>Grab your data cart and let The One Crawling Solution take your grocery delivery app to the top shelf.</p>

          </div>
        </div>
      </div>
      <br></br>
      <h3 className="title">Ready to stock up on success? Contact us today!</h3>
    </div>
  )
}

export default Grocery
