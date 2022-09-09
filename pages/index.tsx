import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Cart } from "../components/Cart";
import { NavBar } from "../components/NavBar";
import { Product } from "../components/Product";

import { BoxProducts, Container, SectionProducts } from "../styles/home";

const Home: NextPage = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Head>
        <title>MKS | Front Challenge</title>
      </Head>

      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />

      <Container>
        <NavBar
          handleCart={() => {
            setCartOpen(true);
          }}
        />

        <SectionProducts>
          <BoxProducts>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </BoxProducts>
        </SectionProducts>
      </Container>
    </>
  );
};

export default Home;
