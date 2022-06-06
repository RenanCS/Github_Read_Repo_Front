import { createContext } from 'react';

export type FormState = Record<string, any>;

interface ContextData {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<any>>;
}

export default createContext<ContextData>({} as ContextData);
