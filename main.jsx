import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ContextProvider from './src/contexts/ItemsContext';

import App from './src/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
