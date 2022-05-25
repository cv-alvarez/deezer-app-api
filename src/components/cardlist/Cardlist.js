import React, { useState,useEffect } from 'react'
import Slider from "react-slick";
import Card from '../card/Card';
import { useFetchdata } from '../hooks/useFecthdata';


import './cardlist.css'


const Cardlist = ({section,url,img}) => {
  const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,  
    responsive: [
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true }
      },
      {
        breakpoint: 1010,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true }
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4, slidesToScroll: 4, infinite: true }
      },
      {
        breakpoint: 1400,
        settings: { slidesToShow: 5, slidesToScroll: 5, infinite: true }
      }
    ]
  
    
  };
  
  const {data} = useFetchdata(url)

 


  return (
    <div className="cardlist py-5">
      <div className='container'>
      <div className="row">
      <p>{section}</p>
      <div className="row">
        <Slider {...settings}>
  
         


         {data.map(d=>(

           <div className="col-auto" key={d.id}>

             
             <Card name={d.title} img={d.picture || d.cover }/>
             
           
           
           </div>
                  

         ))}


     

        </Slider>
        </div>
        
      </div>



      </div>

    </div>
  )
}

export default Cardlist