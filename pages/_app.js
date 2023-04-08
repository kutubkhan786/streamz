import Navbar from '../components/Navbar';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import '../styles/styles.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider
      session={session}
    >
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
