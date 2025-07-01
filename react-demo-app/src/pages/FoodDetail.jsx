import { useParams } from 'react-router-dom';
import foodItems from '../data/foodData';

const FoodDetail = () => {
  const { id } = useParams();
  const item = foodItems.find((food) => food.id.toString() === id);

  if (!item) {
    return <p>Food item not found!</p>;
  }

  return (
    <div className="food-detail">
      <h2>{item.name}</h2>
      <p><strong>Type:</strong> {item.type}</p>
      <p><strong>Description:</strong> {item.description || 'No description available.'}</p>
    </div>
  );
};

export default FoodDetail;
