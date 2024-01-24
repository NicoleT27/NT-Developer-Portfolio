import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import alejandra from "../assets/images/alejandra.jpg";
import madeleine from "../assets/images/madeleine.jpg";
import matthieu from "../assets/images/matthieu.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import "./testimonial.css";


 function Testimonial() {
   return (
     <div>
       <Swiper
         spaceBetween={50}
         slidesPerView={3}
         onSlideChange={() => console.log("slide change")}
         onSwiper={(swiper) => console.log(swiper)}
       >
         <SwiperSlide>Slide 1</SwiperSlide>
         <SwiperSlide>Slide 2</SwiperSlide>
         <SwiperSlide>Slide 3</SwiperSlide>
         <SwiperSlide>Slide 4</SwiperSlide>
         ...
       </Swiper>
       {/* <div className="test-title">Testimonials</div>
       <div className="media-scroller">
         <img className="alejandra" src={alejandra}></img>
         <div className="quote">
           Nicole and I have worked on three full-stack applications together.
           Among these were a travel itinerary, a Myspace-based application, and
           a game arcade. Of these three projects, it is the game arcade,
           Playful Pixels, that I believe best represent Nicole's work. Her
           dedication to top-notch presentation are indicative of her knowledge
           of the front-end creation of applications; her advice on my backend
           and her knowledge of NoSQL databases and models were invaluable while
           creating Playful Pixel's JWT user authentication. There is no doubt
           in my mind that Nicole is dedicated, inquisitive, and excited to
           learn. Anywhere she works, she will be an incredible asset with an
           eye for detail and perfectionism that will help her quickly deliver
           incredible full-stack projects.
         </div>
         <div className="quotes">
         <FaQuoteLeft /></div>
         <div className="name">Alejandra Bernabel</div>
         <div className="from">
           Software Engineer/Former UCF Bootcamp Colleague
         </div> */}
       {/*  <img src={madeleine}></img>
         <div className="quote">
       I had the pleasure of working with Nicole in UCF Full Stack Bootcamp, and
       I highly recommend her as a talented coder. Nicole consistently impressed
       me with their ability to handle complex coding challenges. She brings a
       creative approach to problem-solving and consistently delivers
       high-quality work. What sets Nicole apart is not only her technical
       proficiency but also her collaborative spirit. She actively contributes
       ideas, seeks feedback and is willing to help out anytime. Nicole is not
       just a skilled coder but also a joy to work with. Her positive attitude,
       effective communication, and collaborative personality makes her an asset
       to any team. I have full confidence that Nicole will excel in any coding
       opportunities she pursues!
     </div> 

      <div className="name">Madeleine Abraham</div>
       <div className="from">Former UCF Bootcamp Colleague</div>

       <img src={matthieu}></img>
         <div className="quote">
       Nicole did a great job in all 4 SheCodes coding workshops (Basics, Plus,
       React and Responsive). She gained advanced coding knowledge in JavaScript,
       GitHub, Hosting, Bootstrap, API’s, and React, along with some other
       advanced coding technologies as well as responsive web design. She used
       all of her new coding knowledge to develop a landing page and several of
       her own fully-functioning web apps (in Vanilla JS and React) hosted on
       Netlify and stored on GitHub. She also built her own responsive portfolio
       website.</div>
         <div className="name">Matthieu Delac</div>
       <div className="from">SheCodes Founder & CEO</div> */}
     </div>
   );
  }

 export default Testimonial; 

 