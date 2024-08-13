import React from 'react'
import { Link } from 'react-router-dom';
import HealthImage from '../images/about/healthcare2.jpg';
import HealthImage1 from '../images/about/healthcare1.jpg';
import HealthImage2 from '../images/about/healthcare.jpg';


const Healthcare = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="hero-heading">Healthcare Scraping</h1>
            <h3>Data-Driven Diagnosis: Conquer Healthcare Insights with Scraping</h3>
            <br></br>
            <h3>Unmask trends, optimize operations and thrive in the evolving healthcare landscape.</h3>
            <p className="hero-subheading">Lost in the complexities of medical labor and endless patient records? Looking at competitor websites and regulatory updates?  </p>
            <p className="hero-subheading">You're not alone. Navigating the complex world of healthcare data can feel overwhelming, leaving you unsure of where to focus your efforts and how to optimize your practice.</p>
            <p className="hero-subheading">But fear not, healthcare heroes! The One Crawling Solution brings you the ultimate weapon – unparalleled healthcare website scraping. </p>
            <p className="hero-subheading">We unlock the hidden secrets buried within online data, offering a powerful lens to diagnose your success and optimize your practice.</p>
          </div>
          <div className="col-lg-6 text-right">
            <img src={HealthImage} alt="Healthcare Scraping" className="healthcare-image" style={{width: '100%',height:'50%', marginTop: '10px',marginLeft: '-50px' }} />
          </div>
        </div>

        <div className="content">
          <div className="row">
            <div className="col-lg-6">
                        <img src={HealthImage1} alt="Healthcare Scraping" className="healthcare-image1" style={{ width: '100%',height:'50%', marginTop: '10px',marginLeft: '-50px' }} />
              </div>
            <div className="col-lg-6">
              <h3 className="title">What are you waiting for?</h3>
              <ul>
              <li>
                <strong> Patient demographics: </strong> Understand age, location, and illness trends to target your services effectively.
              </li>
              <li>
                <strong> Treatment protocols: </strong> Analyze competitor procedures, medication trends, and emerging therapies to stay ahead of the curve
              </li>
              <li>
                <strong>	Market potential:</strong> : Identify underserved areas, predict treatment surges, and pinpoint profitable niches for expansion.
              </li>
              <li>
                <strong> Industry regulations: </strong> Track evolving healthcare policies, compliance protocols, and reimbursement structures to stay informed.
              </li>
            </ul> 
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
            <strong>Leverage Data for Your Decisions:</strong>
            {/* <p>We deliver clean, structured data, your ready-made compass to:</p> */}
            <ul>
              <li>
                <strong> Optimize your practice: </strong> : Make data-driven decisions on staffing, equipment, and treatment offerings. Watch your efficiency and patient satisfaction soar.
              </li>
              <li>
                <strong> Refine your research:  </strong> Identify promising clinical trials, analyze drug efficacy, and collaborate with fellow researchers. Innovation is your cure, data your microscope.
              </li>
              <li>
                <strong> Engage your patients like never before:  </strong> Understand their needs, personalize treatment plans, and improve communication for better outcomes. Every click becomes a loyal patient.
              </li>
            </ul>
            </div>
            <div className="col-lg-6">
              <img src={HealthImage2} alt="Healthcare Scraping" className="Healthcare-image2" style={{ width: '100%', marginTop: '20px' }} />
            </div>
          </div>  
          <br></br>
          <strong>Clean, Structured Data - Your Ready-Made Solution:</strong>
          <p>We deliver clean, structured data, your ready-made stethoscope to diagnose your practice's health, and chart a course for success. Say goodbye to endless paperwork and guesswork – we make the complex clear, giving you actionable insights to fuel your growth.</p>
          <br></br>
        
          <strong>Ready to Diagnose Your Success?</strong>
          <p>Contact The One Crawling Solution today and unlock the power of healthcare data scraping. </p>
          <br></br>
          
          
        </div>
      </div>
      <br></br>
      <h3 className="title"> Let us turn insights into your arsenal. </h3>
    </div>
  )
}
export default Healthcare


// <------------------------******************************************************************************--------------->

// import React from 'react';
// import { Link } from 'react-router-dom';
// import HealthImage from '../images/about/healthcare2.jpg';
// import HealthImage1 from '../images/about/healthcare1.jpg';
// import HealthImage2 from '../images/about/healthcare.jpg';
// import styled from 'styled-components';

// const HeroSection = styled.div`
//   padding: 50px 0;
//   background-color: #f8f9fa;
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 15px;
// `;

// const Row = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
// `;

// const Column = styled.div`
//   flex: 0 0 50%;
//   max-width: 50%;
//   padding: 15px;

//   @media (max-width: 768px) {
//     flex: 0 0 100%;
//     max-width: 100%;
//   }
// `;

// const HeroHeading = styled.h1`
//   font-size: 36px;
//   font-weight: bold;
//   margin-bottom: 20px;
// `;

// const HeroSubheading = styled.p`
//   font-size: 18px;
//   margin-bottom: 15px;
// `;

// const HealthcareImage = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const Content = styled.div`
//   margin-top: 30px;
// `;

// const Title = styled.h3`
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 20px;
// `;

// const UnorderedList = styled.ul`
//   padding-left: 20px;
// `;

// const ListItem = styled.li`
//   margin-bottom: 10px;
// `;

// const TextCenter = styled.div`
//   text-align: center;
// `;

// const Healthcare = () => {
//   return (
//     <HeroSection>
//       <Container>
//         <Row>
//           <Column>
//             <HeroHeading>Healthcare Scraping</HeroHeading>
//             <h3>Data-Driven Diagnosis: Conquer Healthcare Insights with Scraping</h3>
//             <br />
//             <h3>Unmask trends, optimize operations and thrive in the evolving healthcare landscape.</h3>
//             <HeroSubheading>Lost in the complexities of medical labor and endless patient records? Looking at competitor websites and regulatory updates?</HeroSubheading>
//             <HeroSubheading>You're not alone. Navigating the complex world of healthcare data can feel overwhelming, leaving you unsure of where to focus your efforts and how to optimize your practice.</HeroSubheading>
//             <HeroSubheading>But fear not, healthcare heroes! The One Crawling Solution brings you the ultimate weapon – unparalleled healthcare website scraping.</HeroSubheading>
//             <HeroSubheading>We unlock the hidden secrets buried within online data, offering a powerful lens to diagnose your success and optimize your practice.</HeroSubheading>
//           </Column>
//           <Column>
//             <TextCenter>
//               <HealthcareImage src={HealthImage} alt="Healthcare Scraping" />
//             </TextCenter>
//           </Column>
//         </Row>

//         <Content>
//           <Row>
//             <Column>
//               <HealthcareImage src={HealthImage1} alt="Healthcare Scraping" />
//             </Column>
//             <Column>
//               <Title>What are you waiting for?</Title>
//               <UnorderedList>
//                 <ListItem><strong>Patient demographics:</strong> Understand age, location, and illness trends to target your services effectively.</ListItem>
//                 <ListItem><strong>Treatment protocols:</strong> Analyze competitor procedures, medication trends, and emerging therapies to stay ahead of the curve</ListItem>
//                 <ListItem><strong>Market potential:</strong> Identify underserved areas, predict treatment surges, and pinpoint profitable niches for expansion.</ListItem>
//                 <ListItem><strong>Industry regulations:</strong> Track evolving healthcare policies, compliance protocols, and reimbursement structures to stay informed.</ListItem>
//               </UnorderedList>
//             </Column>
//           </Row>
//           <Row>
//             <Column>
//               <strong>Leverage Data for Your Decisions:</strong>
//               <UnorderedList>
//                 <ListItem><strong>Optimize your practice:</strong> Make data-driven decisions on staffing, equipment, and treatment offerings. Watch your efficiency and patient satisfaction soar.</ListItem>
//                 <ListItem><strong>Refine your research:</strong> Identify promising clinical trials, analyze drug efficacy, and collaborate with fellow researchers. Innovation is your cure, data your microscope.</ListItem>
//                 <ListItem><strong>Engage your patients like never before:</strong> Understand their needs, personalize treatment plans, and improve communication for better outcomes. Every click becomes a loyal patient.</ListItem>
//               </UnorderedList>
//             </Column>
//             <Column>
//               <TextCenter>
//                 <HealthcareImage src={HealthImage2} alt="Healthcare Scraping" />
//               </TextCenter>
//             </Column>
//           </Row>
//           <br />
//           <strong>Clean, Structured Data - Your Ready-Made Solution:</strong>
//           <p>We deliver clean, structured data, your ready-made stethoscope to diagnose your practice's health, and chart a course for success. Say goodbye to endless paperwork and guesswork – we make the complex clear, giving you actionable insights to fuel your growth.</p>
//           <br />
//           <strong>Ready to Diagnose Your Success?</strong>
//           <p>Contact The One Crawling Solution today and unlock the power of healthcare data scraping.</p>
//           <br />
//         </Content>
//       </Container>
//       <br />
//       <TextCenter>
//         <Title>Let us turn insights into your arsenal.</Title>
//       </TextCenter>
//     </HeroSection>
//   );
// }

// export default Healthcare;
