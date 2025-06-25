import './BasicEventDemo.css';

const BasicEventDemo = () => {
  const handleClick = () => {
    alert('Button was clicked!');
  };

  const handleMouseOver = () => {
    console.log('You hovered over the text!');
  };

  return (
    <div className="basic-event-wrapper">
      <h2>Basic Event Handling</h2>

      <button onClick={handleClick}>Click Me</button>

      <p onMouseOver={handleMouseOver}>
        Hover over this text to trigger a console log.
      </p>
    </div>
  );
};

export default BasicEventDemo;
