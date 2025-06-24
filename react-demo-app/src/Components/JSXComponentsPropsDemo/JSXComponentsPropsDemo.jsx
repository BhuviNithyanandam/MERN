import './JSXComponentsPropsDemo.css';
import Welcome from './Welcome';
import UserCard from './UserCard'; // ⬅️ new import

const JSXComponentsDemo = () => {
  return (
    <div className="jsx-wrapper">
      <h2 className="jsx-heading">JSX + Components + Props</h2>
      <Welcome name="Jai" />
      <Welcome name="React Students" />
      
      <UserCard name="Alice" age={21} role="Student" />
      <UserCard name="Prof. John" age={45} role="Instructor" />
    </div>
  );
};

export default JSXComponentsDemo;
