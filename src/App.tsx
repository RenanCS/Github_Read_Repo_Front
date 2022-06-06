
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { I18nProvider } from './shared/i18n';

export const App: React.FC = () => {
  return (
    <I18nProvider>    
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </I18nProvider>

  );
}

