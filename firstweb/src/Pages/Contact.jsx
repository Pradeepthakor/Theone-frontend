import React,{ useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        alert('Your message was sent successfully.');
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <section className="contact-form-wrap section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
             <form id="contact-form" className="contact__form" method="post" action="mail.php"> 
              {/* form message */}
              <div className="row">
                <div className="col-12">
                  <div className="alert alert-success contact__msg" style={{ display: 'none' }} role="alert">
                    Your message was sent successfully.
                  </div>
                </div>
              </div>
              {/* end message */}
              <span className="text-color">Send a message</span>
              <h3 className="text-md mb-4">Contact Form</h3>
              <div className="form-group"> 
                <input name="name" type="text" className="form-control" placeholder="Your Name" />
               </div> 
              <div className="form-group">
                <input name="email" type="email" className="form-control" placeholder="Email Address" />
               </div> 
               <div className="form-group-2 mb-4">
                <textarea name="message" className="form-control" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button className="btn btn-main" name="submit" type="submit">Send Message</button> 
             </form>         
          </div>
          <div className="col-lg-5 col-sm-12">
            <div className="contact-content pl-lg-5 mt-5 mt-lg-0">
              <h5 className="mb-5 mt-2">Want to get all the data available out there? Get on a call with our experts or mail us now!</h5>
            </div>
            {/* <--****--> */}
            <ul>
                <li> Any data request, we code & deliver</li>
                <li> Global support, 24/7/365</li>
                <li> Real-time performance dashboard</li>
                <li> Complete data transparency</li>
                <li> Dedicated account manager for scraping goals</li>
                <li> Customized solutions for any scraping need</li>
              </ul>
          </div>
          <div className="col-lg-5 col-sm-12">
              <div className="contact-content pl-lg-5 mt-5 mt-lg-0">
                <p>We help you get all the data you need, using all the tools we have for you to hit all the targets you want. Our goal is to help you reach yours.</p>
              </div>
            </div>
          <div className="col-lg-5 col-sm-12">
            <div className="contact-content pl-lg-5 mt-5 mt-lg-0">
              <span className="text-muted">We are Professionals</span>
              <h2 className="mb-5 mt-2">Don’t Hesitate to contact with us for any kind of information</h2>

              <ul className="address-block list-unstyled">
                <li>
                  <i className="ti-direction mr-3"></i> ##
                </li>
                <li>
                  <i className="ti-email mr-3"></i>Email: theonecrawlingsolutions.com
                </li>
                <li>
                  <i className="ti-mobile mr-3"></i>Phone:+91 96645 08201
                </li>
              </ul>
              <ul className="social-icons list-inline mt-5">
                <li className="list-inline-item">
                  <a href="http://www.themefisher.com"><i className="fab fa-facebook-f"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href="http://www.themefisher.com"><i className="fab fa-twitter"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href="http://www.themefisher.com"><i className="fab fa-linkedin-in"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
