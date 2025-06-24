import './FoodGallery.css';
import foodItems from '../../data/foodData';

const FoodGallery = () => {
  return (
    <div className="gallery-wrapper">
      <h2 className="gallery-title">🍱 Food Gallery</h2>
      <div className="gallery-grid">
        {foodItems.map((item) => (
          <div className="food-card" key={item.id}>
            <h3>{item.name}</h3>
            <p>Type: {item.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;
