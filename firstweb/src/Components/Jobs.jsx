import React from 'react'
import { Link } from 'react-router-dom';
import JobImage1 from '../images/about/job1.jpg';
import JobImage2 from '../images/about/job2.jpg';
import JobImage3 from '../images/about/job3.jpg';


const Jobs = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="hero-heading">Job Site Scraping</h1>
            <h3>The Hidden Candidates are In Data: Job Site Scraping </h3>
            <br></br>
            <h3>Sharpen your recruitment strategy, discover hidden gems, and build a team of all-stars.</h3>
            <p className="hero-subheading">Struggling to find the perfect fit? Feeling like a needle in a haystack searching for the ideal candidate? We get it. </p>
            <p className="hero-subheading">Sifting through endless resumes and navigating the vast landscape of online job boards can leave you feeling lost. But what if there was a way to tap into a hidden reservoir of qualified talent, all perfectly suited to your needs?</p>
            <p className="hero-subheading">Introducing your secret to success: job site scraping. We act as your digital talent scout, traversing the depths of online job boards. </p>
            <p className="hero-subheading">Forget passive candidates – we unearth a world of qualified individuals with the skills and experience you crave, even if they haven't hit "apply" yet.</p>
          </div>
          <div className="col-lg-6 text-right">
            <img src={JobImage1} alt="job Scraping" className="JobImage1-image" style={{ width: '100%', marginTop: '20px' }} />
          </div>
        </div>
        <br></br>
        <div className="content">
          <div className="row">
            <div className="col-lg-6">
              <img src={JobImage2} alt="job Scraping" className="JobImage2-image" style={{ width: '100%', marginTop: '20px' }} />
            </div>
            <div className="col-lg-6">
              <h3 className="title">Here's how job site scraping empowers you to build a dream team:</h3>
              <ul>
              <li>
                <strong> Candidate Compass:</strong> : Identify the top talent based on skills, experience, and location, regardless of their active job search status. This intel allows you to proactively reach out to ideal candidates, significantly increasing your chances of landing the perfect hire.
              </li>
              <li>
                <strong> Competitive Edge:</strong> Analyze competitor job postings, salary ranges, and recruitment strategies. Gain valuable insights into the current job market trends and refine your recruitment offer to attract the best talent available. Stay ahead of the curve and become the employer of choice.
              </li>
              <li>
                <strong>	Market Pulse:</strong> Identify emerging skills and in-demand job titles before the competition does. Tailor your recruitment efforts to the ever-evolving needs of the workforce, ensuring you attract top talent with the most sought-after skillsets.
              </li>
              <li>
                <strong>	Market Pulse:  </strong> Track evolving labor laws and recruitment regulations. Stay informed and ensure your recruitment practices adhere to the latest standards, avoiding unnecessary legal roadblocks.
              </li>
            </ul> 
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col-lg-6">
            <strong>Fuel Your Recruitment Engine with Data-Driven Insights:</strong>
            {/* <p>We deliver clean, structured data, your ready-made compass to:</p> */}
            <ul>
              <li>
                <strong> Craft Compelling Job Postings: </strong> Make data-driven decisions about job descriptions, benefits packages, and target keywords. Witness a surge in qualified applicants as your job postings resonate deeply with the ideal talent pool.
              </li>
              <li>
                <strong> Refine Your Targeting: </strong> Identify the most effective job boards and online communities to reach your ideal candidates. No more wasted resources – your recruitment efforts land directly in front of the most relevant talent.
              </li>
              <li>
                <strong>	Build a Talent Pipeline: </strong> Proactively identify and nurture relationships with potential candidates. Data becomes your guide, allowing you to build a robust talent pipeline for future hiring needs.
              </li>
            </ul>
            </div>
            <div className="col-lg-6">
              <img src={JobImage3} alt="job Scraping" className="JobImage3-image" style={{ width: '100%', marginTop: '20px' }} />
            </div>
          </div>  
          <br></br>
          <strong>Clean, Structured Data: Your Recruitment Roadmap</strong>
          <p>We deliver clean, structured data for your definitive roadmap to navigate the ever-expanding job market and discover a world of hidden talent. </p>
          <br></br>
          <p>Say goodbye to endless scrolling and generic resumes. We transform complex job posting data into actionable insights, empowering you to make data-driven decisions that fuel your recruitment success.</p>
          <br></br>
        
          <strong>Ready to Build Your Dream Team?</strong>
          <p>Contact The One Crawling Solution today and unlock the transformative power of job site scraping. </p>
          <br></br>
          <p>Let’s bolster your company to the forefront of recruitment.</p>
          <br></br>
          
          
        </div>
      </div>
      <br></br>
      <h3 className="title"> Stop searching blindly – start finding top talent with data-driven insights. </h3>
    </div>
  )
}
export default Jobs