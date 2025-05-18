import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({ Component, pageProps }: AppProps & { Component: NextPageWithLayout }) {
  // const router = useRouter();

  // const onClickButton = () => {
  //   router.push("/test");
  // };

  // useEffect(() => {
  //   router.prefetch("/test");  // 명시적으로 프리페칭
  // }, []);

  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page);
  
  return (
    <GlobalLayout>
      {getLayout(<Component {...pageProps} />)}
    </GlobalLayout>
  );
}
