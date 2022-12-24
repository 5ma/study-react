import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    console.log('マウント時');
    document.body.style.backgroundColor = "lightBlue";
    // アンマウント時の処理
    return () => {
      console.log('アンマウント時');
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {/* <a href="/about" onClick={handleClick}>ボタン</a> */}
      <Main page="index" />
      <Footer />
    </div>
  );
}
