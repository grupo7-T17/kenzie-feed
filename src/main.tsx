import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './providers/UserContext.tsx';
import { NoticesProvider } from './providers/NoticesContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NoticesProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </NoticesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
