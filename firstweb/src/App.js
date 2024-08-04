
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Webscraping from './Components/Webscraping';
import Appscraping from './Components/Appscraping';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RealEstate from './Components/Realestate';
import Ecommerce from './Components/Ecommerce';
import Healthcare from './Components/Healthcare';
import Food from './Components/Food';
import Entertainment from './Components/Entertainment';
import Education from './Components/Education';
import Travel from './Components/Travel';
import Sport from './Components/Sport';
import Grocery from './Components/Grocery';
import Socialmedia from './Components/Socialmedia';
import Jobs from './Components/Jobs';
import Engineering from './Components/Engineering';
import Taxibook from './Components/Taxibook';
import Faqs from './Pages/Faqs'
import PortfolioDownload from './Components/Portfoliodownload';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/PortfolioDownload' element={<PortfolioDownload />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Webscraping' element={<Webscraping />} />
        <Route path='/Appscraping' element={<Appscraping />} />
        <Route path='/Realestate' element={<RealEstate />} />
        <Route path='/Faqs' element={<Faqs />} />
        {/* <--**--> */}
        <Route path='/Ecommerce' element={<Ecommerce />} />
        <Route path='/Healthcare' element={<Healthcare />} />
        <Route path='/Food' element={<Food />} />
        <Route path='/Entertainment' element={<Entertainment />} />
        <Route path='/Education' element={<Education />} />
        <Route path='/Travel' element={<Travel />} />
        <Route path='/Sport' element={<Sport />} />
        <Route path='/Grocery' element={<Grocery />} />
        <Route path='/Socialmedia' element={<Socialmedia />} />
        <Route path='/Jobs' element={<Jobs />} />
        <Route path='/Engineering' element={<Engineering />} />
        <Route path='/Taxibook' element={<Taxibook />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


