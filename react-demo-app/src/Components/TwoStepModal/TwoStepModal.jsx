import { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import { FormProvider } from '../../Context/FormContext.jsx'
import './TwoStepModal.css';

const TwoStepModal = ({ onClose }) => {
  const [step, setStep] = useState(1);

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <FormProvider>
          {step === 1 && <StepOne next={() => setStep(2)} />}
          {step === 2 && <StepTwo close={onClose} />}
        </FormProvider>
      </div>
    </div>
  );
};

export default TwoStepModal;
