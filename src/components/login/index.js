import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';
import {Link} from 'react-router-dom'
import Navbar from '../Navbar';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = Cookies.get('jwt_token');
    if (jwtToken) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userDetails = { username, password };
    const url = 'https://signu.onrender.com/login/';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        onSubmitSuccess(data.jwtToken);
      } else {
          console.log(data) // Set error message for an invalid password
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setUsername('');
    setPassword('');
  };

  const onSubmitSuccess = (token) => {
 
    Cookies.set('jwt_token', token, { expires: 30 });
    <Navbar username={username} />
    navigate('/');
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <Link to="/register"><button type="button" className='Register-button'>Register</button> </Link>
      </form>
     
    </div>
  );
};

export default LoginPage;
