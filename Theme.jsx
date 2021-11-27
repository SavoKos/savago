import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    gray: '#698096',
    darkBlue: '#00264D',
    lightBlue: '#0080ff',
    white: '#f1f5f9',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
