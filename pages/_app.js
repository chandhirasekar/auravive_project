import Header from "@/components/Header/Header";
import RootLayOut from "@/components/RootLayOut";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Auravive ...Nourish Naturally. 🌱</title>
        <meta
          name="description"
          content="Introducing Auravive Organic Curry Leaves Mix! 🌿✨ Elevate your
              dishes with the pure, organic goodness of nature. Discover the
              authentic flavors and health benefits of this culinary gem."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/auravive_icon.jpg" />

        <meta property="og:title" content="Auravive ...Nourish Naturally. 🌱" />
        <meta
          property="og:description"
          content="Introducing Auravive Organic Curry Leaves Mix! 🌿✨ Elevate your
              dishes with the pure, organic goodness of nature. Discover the
              authentic flavors and health benefits of this culinary gem"
        />
        <meta property="og:image" content="/auravive_icon.jpg" />
        <meta property="og:url" content="https://auravive-project.vercel.app" />
        <meta property="og:type" content="website" />
      </Head>

      <RootLayOut>
        <Header />
        <Component {...pageProps} />
      </RootLayOut>
    </>
  );
}
