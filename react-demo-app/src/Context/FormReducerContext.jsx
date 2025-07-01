import { createContext, useContext, useReducer } from 'react';

const FormContext = createContext();

const initialState = {
  step: 1,
  name: '',
  email: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'NEXT_STEP':
      return { ...state, step: state.step + 1 };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export const useFormReducer = () => useContext(FormContext);

export const FormReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};
