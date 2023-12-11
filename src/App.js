import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/login';
import HomePage from './components/HomePage';
import Gender from './components/Gender';
import Employment from './components/Employment';
import UserForm from './components/RegisterForm';
import NotFound from './components/Notfound';
import PrivateRoutes from './components/ProtectedRoute';
import Write from './components/redwar'
import { useMediaQuery } from 'react-responsive';

const App = () => {
  // Define media query for larger screens
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <Router>
      <Routes>
        {/* Display entire app on larger screens */}
        {isDesktopOrLaptop && (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<UserForm />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/gender" element={<Gender />} />
              <Route path="/employment-type" element={<Employment />} />
            </Route>
            <Route component={NotFound} />
          </>
        )}

        {/* Always render the entire app on smaller screens */}
        {!isDesktopOrLaptop && (
          <>
             
            <Route  path="/login" element={<Write />}  />
            
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
