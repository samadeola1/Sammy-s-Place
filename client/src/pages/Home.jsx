import React from "react";
import Hero from "../Hero";
import Category from "../Category";

const Home = ({ handleAddToCart }) => {
  return (
    <>
      <main>
        <section>
          <Hero />
          <Category handleAddToCart={handleAddToCart} />
        </section>
      </main>
    </>
  );
};

export default Home;
