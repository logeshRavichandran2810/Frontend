import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Masterpiece from '../assets/images/Masterpiece.webp'
import NavComp from '../Layout/NavComp';
import FooterComp from '../Layout/FooterComp';
const MainDashBoardComp = () => {
  return (
    <div>
      <header className="bg-light py-3">
      <div className="container1 d-flex align-items-center justify-content-center">
        
        <img src={Masterpiece} alt="Jewelshop" className="me-2" style={{ width: '50px', height: '50px',borderRadius: '50%', marginRight: '10px' }} />
  
        <h1 className="text-warning"><strong>Welcome to Materpiece Collections</strong></h1>
      </div>
    </header>
      <NavComp >
        
      </NavComp>
      <main className="card card-body card-primary container border mt-3 p-4">
        <Outlet />
      </main>
      <div>
        <FooterComp />
      </div>
    </div>
  );
};

export default MainDashBoardComp;
