import { useNavigate } from 'react-router-dom';
import './index.css'; // Import your Navbar CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Navbar = ({ username }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie = 'jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    navigate('/login'); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="logo-ul" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHRvtFUvNT9Rrpz2HE4gu05hPPg8m7DweCg&usqp=CAU" alt="Logo" />
        </a>
        <div className="navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="navbar-text mr-lg-3">Welcome, praveen</span>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
