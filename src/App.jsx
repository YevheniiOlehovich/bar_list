import { useRef } from "react";

import Hero from "./components/Hero";
import Header from "./components/Header";
import DrinksList from "./components/DrinksList";
import Infoblock from "./components/Infoblock";
import Map from "./components/Map";

function App() {
  const menuRef = useRef(null);

  const handleMenuClick = () => {
    menuRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Hero onMenuClick={handleMenuClick} />

      <div ref={menuRef}>
        <Header />
        <DrinksList />
      </div>

      <Infoblock />

      <Map />
    </>
  );
}

export default App;