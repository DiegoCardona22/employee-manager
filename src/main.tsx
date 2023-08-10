// @packages
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

// @scripts
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
