// src/app/_app.tsx
import { Provider } from 'react-redux';
import { store } from '../store/store';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
