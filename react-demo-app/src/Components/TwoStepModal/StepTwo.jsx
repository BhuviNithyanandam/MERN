import { useForm } from '../../Context/FormContext';

const StepTwo = ({ close }) => {
  const { formData, updateField } = useForm();

  const handleSubmit = () => {
    alert(`Name: ${formData.name}\nEmail: ${formData.email}`);
    close();
  };
  console.log('formData email',formData, formData.email);

  return (
    <div>
      <h2>Step 2: Enter Your Email</h2>
      <input
        type="email"
        value={formData.email}
        placeholder="Your email"
        onChange={(e) => updateField('email', e.target.value)}
      />
      <br />
      <button onClick={handleSubmit} disabled={!formData.email}>Submit</button>
    </div>
  );
};

export default StepTwo;
