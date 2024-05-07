import React from "react";
// import { Spin } from 'antd';
import { Skeleton } from 'antd';

import { Image } from "antd";
import box from '../assets/box.json'



function Speakers(){


return (
    <>
        <article>
      

        
        <div className="heads">
        <h1>OUR SPEAKERS</h1>
        <h3>Stay tuned for more Speakers to come</h3>
        </div>
       
          <div className="delay">
          <div className="articles">

{box ? (box.map((blogx) => (
  <div className="container" key={box._id}>
  <div className="image" data-aos="zoom-in">
  <Image width = {'100%'} height={'100%'} src= {blogx.newsImage}/>
 
  <div className="name">
        <h3>{blogx.name}</h3>
    </div>
  </div>

  <div className="text">
  <p className='short'>{blogx.title}</p>
  <p className='short'>{blogx.description}</p>
  </div>
        <div className="decription">

        </div>
        </div>
    
))): (
<Skeleton active/>
)}

    
    </div>

          </div>   
        </article>
    </>
)
}

export default Speakers