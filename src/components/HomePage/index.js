import React from 'react';
import Navbar from '../Navbar';
import './index.css'
import  DashBoard from '../DashboardContainer'
const HomePage = () => {
  return (
    <div>
      <Navbar/>
       <div className='Dash-board-pie-charts-container'>
       <div className="dashboard-container">
            <h1 className='details-heading'> Pie chart Details</h1>
            <DashBoard/>
        </div>

             <div className="page-details">
                  <h1>Welcome to Home page, </h1>
                  <p> In this you can see the gender and Employment type pie charts</p>
             </div>

       </div>
    </div>
  );
};

export default HomePage;
