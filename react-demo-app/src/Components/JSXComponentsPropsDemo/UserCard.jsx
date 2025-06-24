import './UserCard.css';

const UserCard = ({ name, age, role }) => {
  return (
    <div className="usercard-wrapper">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default UserCard;
