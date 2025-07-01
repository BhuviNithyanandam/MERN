import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FoodDetail = () => {
  const { id } = useParams();
  const [foodItem, setFoodItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFoodItem = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/food/${id}`);
        setFoodItem(res.data);
      } catch (err) {
        setError('Food item not found!');
      } finally {
        setLoading(false);
      }
    };

    fetchFoodItem();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="food-detail">
      <h2>{foodItem.name}</h2>
      <p><strong>Type:</strong> {foodItem.type}</p>
      <p><strong>Description:</strong> {foodItem.description || 'No description available.'}</p>
    </div>
  );
};

export default FoodDetail;
