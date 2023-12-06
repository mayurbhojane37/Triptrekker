import React, {useEffect} from 'react';
import './home.css';
import video1 from '../Assets/video1.mp4';
import { GrLocation } from "react-icons/gr";
import { FaFilter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaTripadvisor } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video1} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">

          
          <h1 data-aos="fade-up" className="homeTitle">
            Search your Holidays
          </h1>
          <h2 data-aos="fade-up" className="smallText">
            Discover Joy
          </h2>
          <br />
          <br />
          <br />
          <h2 data-aos="fade-up" className="smallText">
          Journey beyond. Seek adventure. Find solace in every destination's story
          </h2>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search Your Destination :</label>
            <div className="input flex">
              <input type="text" placeholder='Enter Name Here...' />
              <GrLocation className='icon' />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="city">Select your date :</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="priceInput">
            <div className="lable_total flex">
              <label htmlFor="price">
                Max Price :
              </label>
              <h3 className="total">₹5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max={"5000"} min={"1000"} />
            </div>
          </div>

          <div className="searchOption flex">
            <FaFilter className='icon' />
            <span>More Filters</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
          <FiFacebook className='icon' />
          <FaInstagram  className='icon' />
          <FaTripadvisor className='icon' />
          </div>
          <div className="lefticons">
          <BsListTask className='icon'/>
          <TbApps className='icon'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;