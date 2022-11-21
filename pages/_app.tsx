import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../src/components/Layout";
import "@fontsource/akshar";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/akshar/index.css";
import "@fontsource/akshar/400.css";
import "@fontsource/akshar/500.css";
import "@fontsource/akshar/600.css";
import "@fontsource/akshar/700.css";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";

import theme from "../src/definitions/chakra/theme";
import { TransitionProvider } from "../src/context/Transition";
import TransitionLayout from "../src/components/Layout/TransitionLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CustomCursor
        targets={[".link", ".your-css-selector"]}
        customClass="custom-cursor"
        dimensions={30}
        fill="#FFF"
        smoothness={{
          movement: 0.2,
          scale: 0.1,
          opacity: 0.2,
        }}
        targetOpacity={0.5}
      />
      <TransitionProvider>
        <TransitionLayout>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TransitionLayout>
      </TransitionProvider>
    </ChakraProvider>
  );
}
