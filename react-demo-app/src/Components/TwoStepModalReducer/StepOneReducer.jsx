import { useFormReducer } from '../../Context/FormReducerContext';

const StepOneReducer = () => {
  const { state, dispatch } = useFormReducer();

  return (
    <div>
      <h2>Step 1: Enter Your Name</h2>
      <input
        type="text"
        value={state.name}
        placeholder="Your name"
        onChange={(e) =>
          dispatch({ type: 'UPDATE_FIELD', field: 'name', value: e.target.value })
        }
      />
      <br />
      <button onClick={() => dispatch({ type: 'NEXT_STEP' })} disabled={!state.name}>
        Next
      </button>
    </div>
  );
};

export default StepOneReducer;
