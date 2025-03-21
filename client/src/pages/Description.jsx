import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Burgers, combos, drinks, chickens, chips, salads } from "../product";
import CartContext from "../Context/CartContext";
import { toast } from "sonner";
const Description = () => {
   const{handleAddToCart} = useContext(CartContext)
  const [selectedCategorys, setSelectedCategory] = useState(
    [Burgers, combos, drinks, chickens, chips, salads].flat()
  );
  const { id } = useParams();
  const products = selectedCategorys.find((item) => item._id == id);
  const relatedProducts = selectedCategorys
    .filter((item) => item._id !== id)
    .slice(10,16);

  return (
    <>
      <main className="mx-auto px-4 md:px-16 py-6 bg-[#2F2F2F] text-white">
        {/* section-1  */}
        <section className="wrapper  grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Product Image */}
          <div>
            <img
              src={products.image}
              alt={products.title}
              className="rounded-lg w-full max-w-md mx-auto"
            />
          </div>
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{products.title}</h1>
            <p className="text-gray-300">{products.description}</p>
             <div className="card-actions my-5">
            <button
              className=" bg-[#B67B0F] w-full leading-[100%] cursor-pointer rounded-[31px] lg:whitespace-nowrap py-[15px] px-[56px] md:text-base"
              onClick={() => {
                handleAddToCart(products),
                  toast.success("An item added to Cart");
              }}
            >
              Add to Cart
            </button>
          </div>
          </div>
         
        </section>
        {/* Related Products */}
        <section className="wrapper">
          <h2 className="md:text-2xl text-3xl font-semibold md:mb-6 my-10 lg:mx-15">
            Others You Might Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:px-[60px]">
            {relatedProducts.map((item) => (
              <div
                key={item._id}
                className="bg-[#222] p-4 rounded-lg text-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg mb-4 w-full"
                />
                <h3 className="text-xl font-medium">{item.title}</h3>
                <button
                  className=" bg-[#B67B0F] leading-[100%] w-full cursor-pointer rounded-[31px] lg:whitespace-nowrap py-[15px] px-[56px] md:text-base"
                  onClick={() => {
                    handleAddToCart(products),
                      toast.success("An item added to Cart");
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Description;
