import App from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import resetCss from 'ress';
import { Provider } from 'react-redux';

import store from '../stores';

const GlobalStyle = createGlobalStyle`
  ${resetCss}
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
`;

const theme = {
  colors: {
    border: '#DADADA',
    main: '#FF5470',
    black: '#00214D',
    gray: '#888888',
    lime: '#00EBC7',
    paper: '#FFFFFF',
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}
