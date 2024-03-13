import Footer from "@/components/modules/Footer";
import Navbar from "@/components/modules/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps, router }: AppProps) {
  const isHomePage = router.pathname === '/';
  return (
    <>
    <Head>
    <link rel="icon" type="image/png" href="icon.png"/>
    <meta name="theme-color" content="#26397F"/>
    </Head>
    {!isHomePage && <Navbar />}   
    <Component {...pageProps} />
    <Footer />
    </>
  )
}
