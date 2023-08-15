// @packages
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

// @scripts
import initI18n from './lang';
import initializeApp from './core';
import store from './redux/store';
import { AppRouter } from './routes/AppRouter';

// @styles
import './styles/main.scss';
import { lightTheme } from './styles/theme';

initI18n();
initializeApp();

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <AppRouter />
    </ThemeProvider>
  </Provider>
);

export default App;
