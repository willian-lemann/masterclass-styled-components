import { useContext } from 'react';
import { UIContext } from '../store/userInterface';

export const useAlert = () => {
  const context = useContext(UIContext);
  return context;
};
