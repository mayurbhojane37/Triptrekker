import React,{useEffect}from 'react';
import './main.css';
import img1 from '../Assets/img1.jpg';
import img2 from '../Assets/img2.jpg';
import img3 from '../Assets/img3.jpg';
import img4 from '../Assets/img4.jpg';
import img5 from '../Assets/img4.jpg';
import img6 from '../Assets/img6.jpg';
import img7 from '../Assets/img7.jpg';
import img8 from '../Assets/img8.jpg';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboard2Check } from "react-icons/bs";
import Aos from 'aos';
import 'aos/dist/aos.css';


const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Lonavala',
    location: 'Lonavala',
    grade: 'CULTURE RELAX',
    fees: '₹1,000 - ₹2,000',
    description: "Nestled in the Sahyadri range, these twin hill stations offer lush landscapes, waterfalls, and historic caves. Khandala features vantage points like Tiger Point and Duke's Nose."
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Mahabaleshwar',
    location: 'Mahabaleshwar',
    grade: 'CULTURE RELAX',
    fees: '₹5,000 - ₹7,000',
    description: "Positioned in the Western Ghats, Mahabaleshwar is a charming hill station known for its pleasant climate, strawberry farms, and viewpoints like Arthur's Seat."
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Panchgani ',
    location: 'Panchgani ',
    grade: 'CULTURE RELAX',
    fees: '₹5,000 - ₹7,000',
    description: 'Atop the Sahyadri Plateau, Panchgani boasts a captivating tableland and viewpoints like Sydney Point and Parsi Point.'
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Lavasa',
    location: 'Lavasa',
    grade: 'CULTURE RELAX',
    fees: '₹2,000 - ₹3,000',
    description: 'A modern city with planned infrastructure, Lavasa offers lakeside charm and water sports activities amidst the Western Ghats.'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Rajmachi Fort',
    location: 'Rajmachi Fort',
    grade: 'CULTURE RELAX',
    fees: '₹1,500 - ₹3,000',
    description: 'This historic fort provides trekking trails and panoramic views of the Sahyadri mountains, attracting adventure enthusiasts.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Bhor',
    location: 'Bhor',
    grade: 'CULTURE RELAX',
    fees: '₹1,000 - ₹2,000',
    description: ' Bhor is known for its historical significance and is home to the Bhatghar Dam, providing a peaceful retreat with scenic surroundings.'
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Sinhgad Fort',
    location: 'Sinhgad Fort',
    grade: 'CULTURE RELAX',
    fees: '₹500 - ₹1,000',
    description: 'Steeped in history, Sinhgad offers trekking opportunities and panoramic views of the surrounding landscapes.'
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Mulshi Dam',
    location: 'Mulshi',
    grade: 'CULTURE RELAX',
    fees: '₹1,000 - ₹2,000',
    description: ' Surrounded by hills and forests, Mulshi Dam is a serene spot for picnics, boat rides, and nature appreciation.'
  },
]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className='main container section'>
      <div className="secTitle" >
        <h3 className="title" data-aos="fade-up">
          Most Visited Destination
        </h3>
      </div>
      <div className="secContent grid">
        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (

              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">
                    {destTitle}
                  </h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>

                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    Details
                    <BsClipboard2Check className='icon'/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main;