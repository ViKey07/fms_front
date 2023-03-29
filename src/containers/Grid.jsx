import React, { useState } from 'react';
import image1 from '../assets/img/jacket.png';
import image2 from '../assets/img/3.png';
import image3 from '../assets/img/5.png';
import image4 from '../assets/img/mug_bg.png';

const ImageGrid = () => {
    
  
    return (
        <section className='categories-whole'>
            <div className="categories">
                <div className="one">
                    <img className="one-img" src={image1} alt=""/>
                </div>
                <div className="two">
                    <img className="cat-2" src={image2} alt=""/>
                    <img className="cat-3" src={image3} alt=""/>
                </div>
                <div className="one">
                    <img className="one-img" src={image4} alt=""/>
                </div>
            </div>
      </section>
    );
  };
  
  export default ImageGrid;
