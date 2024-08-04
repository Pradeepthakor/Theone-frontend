// import React from 'react'
// import { Link } from 'react-router-dom';


// const Realestate = () => {
//   return (
//     <div className="hero-section">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <h1 className="hero-heading">Real Estate Data Scraping</h1>
//             <h3>Unleash your wrath on the industry and take over.</h3>
//             <br></br>
//             <p className="hero-subheading">Your real estate intel just got a quantum leap. Introducing The One Crawling Solution’s Real Estate Data Scraping – your laser-guided roadmap to market domination.</p>
//             <p className="hero-subheading">Forget crumbs, we're talking about exhuming the treasure trove of property data. Imagine granular details at your fingertips: specs so precise you can visualize every floorboard, listings so hidden they shimmer like buried gold, market trends sharper than a shark's fin, and the whispered secrets of your competitors laid bare. </p>
//             <p className="hero-subheading">We meticulously scrape, scrub, and polish this raw intel, delivering it ready to fuel your success</p>
//           </div>
//         </div>
//         <div className="content">
//           <h3 className="title">You are Not Wrong. You are Just Late to the Trend.</h3>
//           <p className="hero-subheading">Tired of chasing shadows in the murky real estate market? Drowning in a sea of listings? We get it. Finding the right intel is brutal. </p>
//           <p className="hero-subheading">That's where we come in, with laser-focused real estate data scraping. We'll mine the web and unearth hidden gems:</p>
//           <div className="value">
//             <ul>
//               <li>
//                 <strong>Property details:</strong> Specs, prices, locations, you name it.
//               </li>
//               <li>
//                 <strong>Market trends:</strong> Unmask hot pockets, and identify undervalued gems.
//               </li>
//               <li>
//                 <strong>Competitor intel:</strong> Spy on their listings, pricing strategies, and more.
//               </li>
//               <li>
//                 <strong>Lead generation:</strong> Target the right buyers and sellers, effortlessly.
//               </li>
//             </ul>
//             <p className="hero-subheading">No more manual scouring. No more guesswork. We deliver clean, structured data, ready to fuel your:</p>
//             <ul>
//               <li>
//                 <strong>Investment strategies:</strong> Make smarter decisions, and maximize returns.
//               </li>
//               <li>
//                 <strong>Market research:</strong> Gain unparalleled insights, and stay ahead of the curve.
//               </li>
//               <li>
//                 <strong>Lead generation:</strong> Reach the right people, and close more deals.
//               </li>
//             </ul>
//             <p className="hero-subheading">Stop sifting through the sand. Let us turn data into your real estate compass.</p>
//           </div>
//           <h3 className="title">Ready to Find Magic Crystals? Contact us today.</h3>
//         </div>
//       </div>
//     </div>

//   )
// }
// export default Realestate

// <-----******************************************************--------->

import React from 'react'
import { Link } from 'react-router-dom';
import RealImage from '../images/about/realestate.jpg';
import RealImage1 from '../images/about/realestate1.jpg';
import RealImage2 from '../images/about/realestate2.jpg';

const Realestate = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="hero-heading">Real Estate Data Scraping</h1>
            <h3>Unleash your wrath on the industry and take over.</h3>
            <br></br>
            <p className="hero-subheading">Your real estate intel just got a quantum leap. Introducing The One Crawling Solution’s Real Estate Data Scraping – your laser-guided roadmap to market domination.</p>
            <p className="hero-subheading">Forget crumbs, we're talking about exhuming the treasure trove of property data. Imagine granular details at your fingertips: specs so precise you can visualize every floorboard, listings so hidden they shimmer like buried gold, market trends sharper than a shark's fin, and the whispered secrets of your competitors laid bare. </p>
            <p className="hero-subheading">We meticulously scrape, scrub, and polish this raw intel, delivering it ready to fuel your success</p>
          </div>
          <div className="col-lg-6 text-right">
            <img src={RealImage} alt="Real-Estate Scraping" className="Real-image" style={{ width: '100%', marginTop: '60px' }} />
          </div>
        </div>
        <br></br>
        <div className="content">
          <div className="row">
            <div className="col-lg-6">
              <img src={RealImage1} alt="Real-Estate Scraping" className="Real-image1" style={{ width: '100%', marginTop: '20px' }} />
            </div>
            <div className="col-lg-6">
              <h3 className="title">You are Not Wrong. You are Just Late to the Trend.</h3>
              <br></br>
              <p className="hero-subheading">Tired of chasing shadows in the murky real estate market? Drowning in a sea of listings? We get it. Finding the right intel is brutal.</p>
              <p className="hero-subheading">That's where we come in, with laser-focused real estate data scraping. We'll mine the web and unearth hidden gems</p>
              <ul>
              <li>
                <strong>Property details:</strong> Specs, prices, locations, you name it.
              </li>
              <li>
                <strong>Market trends:</strong> Unmask hot pockets, and identify undervalued gems.
              </li>
              <li>
                <strong>Competitor intel:</strong> Spy on their listings, pricing strategies, and more.
              </li>
              <li>
                <strong>Lead generation:</strong> Target the right buyers and sellers, effortlessly.
              </li>
            </ul>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col-lg-6">
              <strong>No more manual scouring. No more guesswork. We deliver clean, structured data, ready to fuel your:</strong>
              <br></br>
              <br></br>
              <ul>
              <li>
                <strong>Investment strategies:</strong> Make smarter decisions, and maximize returns.
              </li>
              <li>
                <strong>Market research:</strong> Gain unparalleled insights, and stay ahead of the curve.
              </li>
              <li>
                <strong>Lead generation:</strong> Reach the right people, and close more deals.
              </li>
            </ul>
            </div>
            <div className="col-lg-6">
              <img src={RealImage2} alt="Real-Estate Scraping" className="Real-image2" style={{ width: '100%', marginTop: '20px' }} />
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="col-lg-12">
          <strong>Stop sifting through leftovers. Let The One Crawling Solution turn data into your secret ingredient for food delivery dominance.</strong>
          </div>
        </div>
        <br></br>
        <br></br>
        <h3 className="title">Ready to Find Magic Crystals? Contact us today.</h3>
      </div>
      <br></br>
            {/* <h3 className="title">Ready to Find Magic Crystals? Contact us today.</h3> */}
    </div>
  )
}

export default Realestate
