import { useEffect, useRef, useState } from "react";

import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import Infoblock from "./components/Infoblock";
import Map from "./components/Map";
import Oops from "./components/Oops";

const PERMANENT_TOKEN = import.meta.env.VITE_PERMANENT_TOKEN;
const SCHEDULE_TOKEN = import.meta.env.VITE_SCHEDULE_TOKEN;

function App() {
  const menuRef = useRef(null);

  const [showMenu, setShowMenu] = useState(false);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    // Якщо токен є в URL
    if (token) {
      const now = new Date();

      // 6 = субота
      const isSaturday = now.getDay() === 6;

      // Поточний час у хвилинах від початку доби
      const currentMinutes =
        now.getHours() * 60 + now.getMinutes();

      // 18:00 = 1080 хвилин
      // 24:00 = 1440 хвилин
      const isScheduleTime =
        isSaturday &&
        currentMinutes >= 1080 &&
        currentMinutes < 1440;

      // Постійний токен
      const isPermanentToken =
        token === PERMANENT_TOKEN;

      // Токен тільки для суботи 18:00–24:00
      const isScheduleToken =
        token === SCHEDULE_TOKEN &&
        isScheduleTime;

      // Якщо токен правильний
      if (isPermanentToken || isScheduleToken) {
        sessionStorage.setItem(
          "bar_authorized",
          "true"
        );

        setAuthorized(true);

        // Прибираємо токен з URL
        window.history.replaceState(
          {},
          "",
          window.location.pathname
        );

        return;
      }

      // Якщо токен неправильний
      sessionStorage.removeItem("bar_authorized");
      setAuthorized(false);

      return;
    }

    // Якщо токена в URL немає,
    // перевіряємо попередню авторизацію
    const savedAuthorization =
      sessionStorage.getItem("bar_authorized");

    if (savedAuthorization === "true") {
      setAuthorized(true);
    }
  }, []);

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
          {authorized ? (
            <MenuSection />
          ) : (
            <Oops />
          )}
        </div>
      )}

      <Infoblock />

      <Map />
    </>
  );
}

export default App;