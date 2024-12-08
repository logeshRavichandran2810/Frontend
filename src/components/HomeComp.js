// src/components/HomeComp.js

import React from 'react';
import '../App.css'
import { blue, yellow } from '@mui/material/colors';
const HomeComp = () => {
  return (
    
      <div style={{backgroundColor:"greenyellow"}}>
      <h2 className="text-center mb-4">Welcome to Masterpiece Jewelry Shop</h2>
      <p>
      Discover the art of timeless elegance at Masterpiece Jewelry Shop. We craft exceptional jewelry designed to celebrate life’s most precious moments. From dazzling engagement rings to bespoke creations, every piece reflects unparalleled craftsmanship and sophisticated design.
      </p>
      <div style={{textAlign:'left',padding:"5px", backgroundColor:"skyblue"}} className='card card-primary'>
      <h4>Explore Our Collections</h4>
        <ul>
          <li><strong> Engagement & Wedding Rings – </strong>Celebrate your love with rings that symbolize forever.</li>
          <li><strong>Fine Jewelry –</strong> Discover necklaces, bracelets, earrings, and more crafted with the finest materials.</li>
          <li><strong> Custom Creations – </strong> Bring your vision to life with personalized designs made just for you.</li>
          <li><strong> Gifts & Specials – </strong>  Find the perfect gift that speaks from the heart.</li>
        </ul>
        <h4>Why Choose Us?</h4>
        <ul>
          <li><strong>Exceptional Quality: </strong>Handcrafted with the finest gemstones and precious metals.</li>
          <li><strong>Unique Designs:</strong> Exclusive collections that blend modern trends with timeless elegance. </li>
          <li><strong>Personalized Service: </strong>  Enjoy a tailored shopping experience with our expert jewelers.</li>        </ul>
          <h4>Experience the Art of Jewelry</h4>
          <p>Let us be a part of your unforgettable moments. Discover jewelry that’s as unique and extraordinary as you are.</p>
          <h3 style={{color:"red"}}>Shop Now & Shine Forever!</h3>
          </div>
    </div>
    
  );
};

export default HomeComp;


