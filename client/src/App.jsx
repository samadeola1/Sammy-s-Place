import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { Home } from "./routes/route";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import LoadingRing from "./utils/Loader";
import { Toaster } from "sonner";
import Cart from "./pages/Cart";
import Description from "./pages/Description";
import Order from "./pages/Order";

// const cartItemsFromLocalStorage =
//   JSON.parse(localStorage.getItem("cart")) || [];

function App() {
  // const [cart, setCart] = useState(cartItemsFromLocalStorage);
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);
  // console.log(cart);

  // let handleAddToCart = (product) => {
  //   const productSelected = cart.find(
  //     (singleCart) => singleCart._id === product._id
  //   );
  //   if (productSelected) {
  //     setCart(
  //       cart.map((oneItem) =>
  //         oneItem._id === product._id
  //           ? {
  //               ...productSelected,
  //               quantity: productSelected.quantity + 1,
  //             }
  //           : oneItem
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }
  // };
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              {" "}
              <LoadingRing />{" "}
            </div>
          }
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />}></Route>
            <Route path="/product/:id" element={<Description />}></Route>
            <Route path="order" element={<Order/>}></Route>
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
