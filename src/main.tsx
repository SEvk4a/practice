import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Test } from './components/test';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Test />
  </StrictMode>,
);
