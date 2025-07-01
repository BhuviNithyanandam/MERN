import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home';
import EventHandling from './pages/EventHandling';
import StateEffects from './pages/StateEffects';
import StateManagementPage from './pages/StateManagementPage';
import FoodDetail from './pages/FoodDetail';
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
