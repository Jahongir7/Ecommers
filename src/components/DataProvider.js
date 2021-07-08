import React, { createContext, useState, useEffect } from "react";
import img from "../images/a.jpg";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Wacth Product 01",
      images: ["https://via.placeholder.com/600/771796"],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 101,
      count: 1,
    },
    {
      _id: "2",
      title: "Wacth Product 02",
      images: [{ img }],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 102,
      count: 1,
    },
    {
      _id: "3",
      title: "Wacth Product 03",
      images: [{ img }],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 103,
      count: 1,
    },
    {
      _id: "4",
      title: "Wacth Product 04",
      images: [{ img }],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 104,
      count: 1,
    },
    {
      _id: "5",
      title: "Wacth Product 05",
      images: [{ img }],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 105,
      count: 1,
    },
    {
      _id: "6",
      title: "Wacth Product 06",
      images: [{ img }],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 106,
      count: 1,
    },
  ]);

  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("The product has been added to cart.");
    }
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
