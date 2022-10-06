import '../styles/globals.scss'
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return <>

        <Layout>
            <Component {...pageProps} />
        </Layout>
       
  </>
}

export default MyApp
