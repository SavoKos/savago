import NProgress from 'nprogress';
import { useEffect } from 'react';
import Router from 'next/router';
import '../styles/globals.css';
import Theme from 'Theme';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });
  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleStop);
    Router.events.on('routeChangeError', handleStop);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleStop);
      Router.events.off('routeChangeError', handleStop);
    };
  }, []);

  return (
    <Theme>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Theme>
  );
}

export default MyApp;
