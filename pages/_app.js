import Header from "@/components/Header/Header";
import RootLayOut from "@/components/RootLayOut";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <RootLayOut>
      <Header />
      <Component {...pageProps} />
    </RootLayOut>
  );
}
