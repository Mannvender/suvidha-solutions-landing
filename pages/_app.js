import App from "next/app";
import dynamic from "next/dynamic";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Head from "next/head";
import { ToastContainer as ToastContainerBase } from "react-toastify";
import { configure } from "@happykit/flags/config";
import "react-toastify/dist/ReactToastify.min.css";
const WalletConnectionProvider = dynamic(
  () => import("components/WalletConnectionProvider"),
  {
    ssr: false,
  }
);

import theme from "../styles/theme";
configure({
  envKey: process.env.NEXT_PUBLIC_FLAGS_ENVIRONMENT_KEY,
});

const ToastContainer = styled(ToastContainerBase).attrs({
  // custom props
})`
  .Toastify__toast {
    border-radius: 0;
  }
  .Toastify__toast--error {
    background-color: ${theme.colors.error};
  }
  .Toastify__toast--info {
    background-color: #1bbdd6;
  }
`;
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cheating Cheetahs</title>
      </Head>
      <ThemeProvider
        theme={{
          ...theme,
          colors: theme.colors[getRandomInt(0, theme.colors.length - 1)],
        }}
      >
        <WalletConnectionProvider>
          <Component {...pageProps} />
        </WalletConnectionProvider>
        <ToastContainer position="top-center" hideProgressBar={true} />
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
