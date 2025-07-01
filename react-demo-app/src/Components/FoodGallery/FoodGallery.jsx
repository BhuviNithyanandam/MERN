import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './FoodGallery.css';
import axios from 'axios';
// import foodItems from '../../data/foodData';

const FoodGallery = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    console.log("1");
    axios.get('http://localhost:5000/api/food')
      .then((res) => {
        console.log('2');
        setFoodItems(res.data)
  })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="gallery-wrapper">
      <h2 className="gallery-title">🍱 Food Gallery</h2>
      <div className="gallery-grid">
        {foodItems.map((item) => (
          <Link to={`/food/${item._id}`} className="food-card" key={item.id}>
            <h3>{item.name}</h3>
            <p>Type: {item.type}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;
