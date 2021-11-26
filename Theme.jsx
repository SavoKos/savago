import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    gray: '#5d7793',
    darkBlue: '#00264c',
    lightBlue: '#0080ff',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
