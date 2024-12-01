import React from "react";

const Products = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products ? (
              products.map((product) => {
                return (
                  <div
                    className="lg:w-1/4 md:w-1/2 p-4 w-full"
                    key={product.id}
                  >
                    <div className="border border-gray-300 rounded-lg p-3">
                      <a className="block relative h-48 rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="object-contain object-center w-full h-full block"
                          src={product.image}
                        />
                      </a>
                      <div className="mt-4 text-center sm:text-left">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          CATEGORY
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {product.title}
                        </h2>
                        <p className="mt-1">${product.price}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-6xl font-sans font-bold text-center">
                <h3>No Product Found</h3>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
