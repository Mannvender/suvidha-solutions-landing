import App from "next/app";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Head from "next/head";
import { ToastContainer as ToastContainerBase } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import theme from "../styles/theme";

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
          colors: theme.colors[0 && getRandomInt(0, theme.colors.length - 1)],
        }}
      >
        <Component {...pageProps} />
        <ToastContainer position="top-center" />
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
