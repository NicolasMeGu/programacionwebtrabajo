import React from "react";
import Header from "./Header";
import WebAppi from "./WebAppi";
import Layout from "./Layout";
import Footer from "./Footer";

function Home() {
  return (
    <Layout>
      <Header />
      <WebAppi />
      <Footer />
    </Layout>
  );
}

export default Home;
