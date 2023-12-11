import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Dashboard from '../DashboardContainer';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const Gender = () => {
  const [userGenderData, setUserGenderData] = useState([]);

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=300');
      const data = await response.json();

      const users = data.results;
      let maleCount = 0;
      let femaleCount = 0;

      users.forEach((user) => {
        if (user.gender && user.gender === 'male') {
          maleCount++;
        } else if (user.gender && user.gender === 'female') {
          femaleCount++;
        }
      });

      setUserGenderData([
        { name: 'Male', value: maleCount },
        { name: 'Female', value: femaleCount },
      ]);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div className="dashboard-container">
          <h1 className="details-heading">Pie chart Details</h1>
          <Dashboard />
        </div>
        <div className="gender-page-details">
          <h1>Employment</h1>
          <PieChart width={400} height={400}>
            <Pie
              data={userGenderData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {userGenderData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#3498db' : '#e74c3c'} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>
      </div>
    </>
  );
};

export default Gender;
