import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home';
import EventHandling from './pages/EventHandling';
import StateEffects from './pages/StateEffects';
import StateManagementPage from './pages/StateManagementPage';
import FoodDetail from './pages/FoodDetail';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventHandling />} />
          <Route path="/state-effects" element={<StateEffects />} />
          <Route path="/state-management" element={<StateManagementPage />} />
          <Route path="/food/:id" element={<FoodDetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
