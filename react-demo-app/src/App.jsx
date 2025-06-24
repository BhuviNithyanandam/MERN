import './App.css';
import JSXComponentsDemo from './Components/JSXComponentsPropsDemo/JSXComponentsPropsDemo';
import FoodGallery from './Components/FoodGallery';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">React Demo Showcase</h1>
      <JSXComponentsDemo />
      <FoodGallery />
    </div>
  );
};

export default App;
