// @packages
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';

// @scripts
import PopupAtm from './index';
import store from '../../../redux/store';

// @styles
import { lightTheme } from '../../../styles/theme';

describe('test in confirm', () => {
  it('should render the component', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <PopupAtm
            dataTestId="confirm-popup-atm"
            onCancel={() => {}}
            onConfirm={() => {}}
            open
            text="this is a popup"
          />
        </ThemeProvider>
      </Provider>,
    );

    expect(screen.getByTestId('confirm-popup-atm')).toBeInTheDocument();
  });
});
