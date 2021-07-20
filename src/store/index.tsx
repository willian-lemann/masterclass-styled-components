import { ReactNode } from 'react';

import { UIProvider } from './userInterface';

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => <UIProvider>{children}</UIProvider>;

export default Provider;
