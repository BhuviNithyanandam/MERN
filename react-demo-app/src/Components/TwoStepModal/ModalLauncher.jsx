import { useState } from 'react';
import TwoStepModal from './TwoStepModal';

const ModalLauncher = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} style={{"margin-top": "20px"}}>Open Modal</button>
      {showModal && <TwoStepModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default ModalLauncher;
