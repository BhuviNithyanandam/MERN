import { Link } from 'react-router-dom';
import './Navbar.css'; // optional if you want to separate navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="app-title">React Demo Showcase</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Event Handling</Link></li>
        <li><Link to="/state-effects">State & Effects(Hooks)</Link></li>
        <li><Link to="/state-management">State Management</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
