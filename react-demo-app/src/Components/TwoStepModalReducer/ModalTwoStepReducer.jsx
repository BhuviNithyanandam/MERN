import { FormReducerProvider, useFormReducer } from '../../Context/FormReducerContext';
import StepOneReducer from './StepOneReducer';
import StepTwoReducer from './StepTwoReducer';
import './ModalTwoStepReducer.css';

const ModalContent = ({ close }) => {
  const { state } = useFormReducer();

  return (
    <>
      {state.step === 1 && <StepOneReducer />}
      {state.step === 2 && <StepTwoReducer close={close} />}
    </>
  );
};

const ModalTwoStepReducer = ({ onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <FormReducerProvider>
          <ModalContent close={onClose} />
        </FormReducerProvider>
      </div>
    </div>
  );
};

export default ModalTwoStepReducer;
