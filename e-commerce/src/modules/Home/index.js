import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/index";
import Products from "../../components/Products/index";
import FeatureCard from "../../components/Feature/FeatureCard";
import StateCard from "../../components/StateCard/State";
import { TailSpin } from "react-loader-spinner";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        if (!response.ok) {
          throw new Error(response.statusTextI || "Something went wrong");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="loading"
            radius="1"
          />
        </div>
      )}

      {!isLoading && error && (
        <p style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
          {error}
        </p>
      )}

      {!isLoading && !error && (
        <div>
          <Hero />
          <h2 className="text-5xl font-bold text-center mt-20 underline">
            Products
          </h2>
          <Products products={products} />
        </div>
      )}
      <FeatureCard />
      <StateCard />
    </>
  );
};

export default Home;
