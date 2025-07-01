import { useState } from 'react';
import ModalTwoStepReducer from './ModalTwoStepReducer';

const ModalLauncherReducer = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>Open useReducer Modal</button>
      {show && <ModalTwoStepReducer onClose={() => setShow(false)} />}
    </>
  );
};

export default ModalLauncherReducer;
