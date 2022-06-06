import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { BasicTheme } from './shared/themes';
import { ThemeProvider } from '@mui/system';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={BasicTheme}>
    <CssBaseline />
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

