import "../styles/globals.scss";
import { wrapper } from '../app/store';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default wrapper.withRedux(MyApp)
