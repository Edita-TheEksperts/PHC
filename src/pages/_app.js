import "../styles/globals.css";
import { FormProvider } from "../context/FormContext";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/Logo Icon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/Logo Icon.svg" type="image/svg+xml" />
        <title>PHC</title>
      </Head>
      <FormProvider>
        <Component {...pageProps} />
      </FormProvider>
    </>
  );
}

export default MyApp;
