import Head from "next/head";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>Lay free</title>
        <meta name="description" content="Coolest Ecommerce in the world!" />
      </Head>

      <main className="main-contain">{children}</main>
    </div>
  );
}
