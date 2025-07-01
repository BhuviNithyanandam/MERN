import React from 'react'
import ModalLauncher from '../TwoStepModal/ModalLauncher';
import ModalLauncherReducer from '../TwoStepModalReducer/ModalLauncherReducer';
import './StateManagement.css';

const StateManagement = () => {
  return (
    <div className='state-managment'>
        <h2>State Management</h2>
        <ModalLauncher />
        <ModalLauncherReducer />
    </div>
  )
}

export default StateManagement