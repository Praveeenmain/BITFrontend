import { Link } from 'react-router-dom';

const DashBoard = () => {
  return (
    <ul>
        <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/gender">Gender</Link>
      </li>
      <li>
        <Link to="/employment-type">EmploymentType</Link>
      </li>
      <li>
      <a className='contact-us' href="https://pracontactform.netlify.app/" target="_blank" rel="noopener noreferrer">
             <button className='contact-us-button'>Contact Me</button> 
            </a>
      </li>
    
    </ul>
  );
};

export default DashBoard;
