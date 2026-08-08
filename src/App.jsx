import { useRef, useState } from "react";

import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import Infoblock from "./components/Infoblock";
import Map from "./components/Map";


function App() {
  const menuRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(true);

    setTimeout(() => {
      menuRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  return (
    <>
      <Hero onMenuClick={handleMenuClick} />

      {showMenu && (
        <div ref={menuRef}>
          <MenuSection />
        </div>
      )}

      <Infoblock />
      <Map />
    </>
  );
}

export default App;