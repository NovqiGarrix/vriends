import "../styles/globals.css";
import "aos/dist/aos.css";
import "@georgedrpg/pannellum-react-next/es/css/video-js.css";
import "@georgedrpg/pannellum-react-next/es/css/pannellum.css";
import "@georgedrpg/pannellum-react-next/es/css/style-textInfo.css";

import type { AppProps } from "next/app";
import { useEffect } from "react";
import Aos from "aos";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out-sine",
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    return () => {
      Aos.refreshHard();
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
