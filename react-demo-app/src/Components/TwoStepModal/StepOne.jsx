import { useForm } from '../../Context/FormContext';

const StepOne = ({ next }) => {
  const { formData, updateField } = useForm();

  return (
    <div>
      <h2>Step 1: Enter Your Name</h2>
      <input
        type="text"
        value={formData.name}
        placeholder="Your name"
        onChange={(e) => updateField('name', e.target.value)}
      />
      <br />
      <button onClick={next} disabled={!formData.name}>Next</button>
    </div>
  );
};

export default StepOne;
