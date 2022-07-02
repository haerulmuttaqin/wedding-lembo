import '../styles/globals.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            delay: 50,
        });
    });
    return (<ChakraProvider><Component {...pageProps} /></ChakraProvider>)
}
export default MyApp
