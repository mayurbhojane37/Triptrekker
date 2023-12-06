import React,{useEffect} from 'react';
import './footer.css';
import video2 from '../Assets/video2.mp4'
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos';
import 'aos/dist/aos.css';





const Footer =()=> {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text" data-aos="fade-up">
            <small>Keep in Touch</small>
            <h2>Travel with Us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" data-aos="fade-up" placeholder='Enter Email Address' />
            <button className="btn flex" type='submit' data-aos="fade-up">
              Send<FiSend className='icon'/>
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="/" className='logo flex'>
              <MdTravelExplore className='icon'/> Travel.
              </a>
            </div>

            <div className="footerParagraph" data-aos="fade-up">
            Embark on a voyage of discovery with <span><MdTravelExplore/> TripTrekker</span>. Uncover the world's wonders, from hidden gems to iconic landmarks. Let the journey transform you as you explore diverse cultures, savor breathtaking landscapes, and create memories that linger. Your adventure begins here, where every destination is an invitation to wander, wonder, and be inspired.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
            <AiOutlineTwitter className='icon'/>
            <AiOutlineWhatsApp className='icon'/>
            <AiOutlineInstagram className='icon'/>
            <FaTripadvisor className='icon'/>
            </div>
          </div>
          <div className="footerLinks grid">
            {/*Group one*/}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                Our Agencies
              </span>

              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Services
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Insurance
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Agency
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Tourism
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Payment
              </li>
            </div>
            {/*Group Two*/}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                Partners
              </span>

              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Bookings
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Rentcars
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Hostel World
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Trivago
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Trip Advisor
              </li>
            </div>
            {/*Group Three*/}
          </div>

          <div className="footerDiv flex">
            <small>Best Travel Website</small>
            <small>Copyright © - Mayur Bhojane 2023</small>
          </div>

          

        </div>
      </div>
    </section>
  )
}

export default Footer;