import { object, func } from 'prop-types';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: func.isRequired,
  pageProps: object
};

MyApp.defaultProps = {
  pageProps: {}
};

export default MyApp;
