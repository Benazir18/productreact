import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services"
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Error from "./components/Error";

function App() {
  let routes = [
    {
      id: 1,
      link: "/",
      element: <Hero />,
    },
    {
      id: 2,
      link: "/about",
      element: <About />,
    },
    {
      id: 3,
      link: "/services",
      element: <Services />,
    },
    {
      id: 4,
      link: "/details",
      element: <Details/>,
    },
    {
      id: 5,
      link: "/*",
      element: <Error/>
    },
  ];

  return (
    <div className="app">
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
