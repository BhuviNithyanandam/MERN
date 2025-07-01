import { useFormReducer } from '../../Context/FormReducerContext';

const StepTwoReducer = ({ close }) => {
  const { state, dispatch } = useFormReducer();

  const handleSubmit = () => {
    alert(`Name: ${state.name}\nEmail: ${state.email}`);
    dispatch({ type: 'RESET' });
    close();
  };

  return (
    <div>
      <h2>Step 2: Enter Your Email</h2>
      <input
        type="email"
        value={state.email}
        placeholder="Your email"
        onChange={(e) =>
          dispatch({ type: 'UPDATE_FIELD', field: 'email', value: e.target.value })
        }
      />
      <br />
      <button onClick={handleSubmit} disabled={!state.email}>
        Submit
      </button>
    </div>
  );
};

export default StepTwoReducer;
