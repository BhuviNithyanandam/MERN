import { Link } from 'react-router-dom';
import './Navbar.css'; // optional if you want to separate navbar styles
import { removeToken } from '../../utils/auth';

const handleLogout = () => {
  removeToken();
  window.location.href = "/login";
}
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="app-title">React Demo Showcase</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Event Handling</Link></li>
        <li><Link to="/state-effects">State & Effects(Hooks)</Link></li>
        <li><Link to="/state-management">State Management</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
