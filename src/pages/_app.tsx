import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {PaperSDKProvider} from "@paperxyz/react-client-sdk";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <PaperSDKProvider appName="Fractal">
        <Component {...pageProps} />
      </PaperSDKProvider>
  );
}
