import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";

import { Cart } from "../components/Cart";
import { NavBar } from "../components/NavBar";
import { Product } from "../components/Product";

import { IProduct } from "../types/IProduct";

import { BoxProducts, Container, SectionProducts } from "../styles/home";
import { api } from "../services/api";

const Home: NextPage = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  async function getProducts() {
    const { data } = await api.get<IProduct[]>("products", {
      params: {
        offset: 0,
        limit: 8,
      },
    });

    const products = data.map((product) => ({
      ...product,
      image: "apple-watch.png",
      priceOriginal: product.price,
    }));

    setProducts(products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Slim | Shop</title>
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
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </BoxProducts>
        </SectionProducts>
      </Container>
    </>
  );
};

export default Home;
