import * as React from 'react';
import * as ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import store from './client/redux/store';
// MUI Stuff
import { createTheme, ThemeProvider } from '@mui/material/styles';
import themeFile from './client/utils/styles/themes/themes';
// Components
import App from './client/app';


const theme = createTheme(themeFile);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
  , document.getElementById('root'));

// git add . && git commit -m "[client] - change date" && git push origin update-to-react