import { useContext, useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { ThemeContext } from "../contexts/ThemeContext"; // importo para ajustar cambios en hovers, transitions,etc
import { useCarrito } from "@/contexts/CarritoContext";
import CardsCarrito from "@/components/CardsCarrito";
const Navbar = () => {
  /*carrito*/ 
  const { mostrarCarrito, setMostrarCarrito, contracts} = useCarrito();

  const toggleCarrito = () => {
  if (menuOpen) setMenuOpen(false);
  if (searchOpen) setSearchOpen(false);
  if (userOpen) setUserOpen(false);
  setMostrarCarrito((prev) => !prev);
  };
  
  /*  DETECCION SCROLL - NAVBAR  */
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        setScrolled(window.scrollY > 50);
      }, 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  /* Variables aux-Theme */
  const [isSmallScreen, setisSmallScreen] = useState(window.innerWidth < 1400);
  const { darkMode } = useContext(ThemeContext);
  const darkModeItemsList = darkMode
    ? "text-[rgb(203,101,224)"
    : "text-[rgb(175,252,65)]";
  const darkModeText = darkMode ? "text-zinc-700" : "text-white";
  const darkModeBg = darkMode ? "bg-purple-100" : "bg-zinc-900";
  const darkModeSep = darkMode ? "border-violet-200" : "border-zinc-700";
  const darkModeHoverItems = darkMode
    ? "text-[rgb(203,101,224)] hover:text-[rgb(175,252,65)]"
    : "text-[rgb(175,252,65)] hover:text-[rgb(203,101,224)]";
  const hoverBgColor = darkMode
    ? "hover:bg-violet-300"
    : "hover:bg-[rgb(40,40,40)]";
  const darkModeScroll = !darkMode
    ? scrolled
      ? "bg-zinc-800"
      : "bg-black"
    : scrolled
    ? "bg-zinc-200"
    : "bg-stone-50";
  /* CARRITO */
  
  /*  MENU HAMBURGUESA   */
  const [menuOpen, setMenuOpen] = useState(false);
  const HandleMenuOpen = () => {
    //Si estoy en mobile y el buscador esta abierto,
    //lo cierro primero, y luego alterno (abro o cierro) el menú hamburguesa.
    // Siempre cerrar los otros dos
    if (searchOpen) setSearchOpen(false);
    if (userOpen) setUserOpen(false);
    if (mostrarCarrito) setMostrarCarrito(false);
    // SWITCHEAR EL MENU
    setMenuOpen(!menuOpen);
  };
  /*  BUSQUEDA  */
  const [searchOpen, setSearchOpen] = useState(false);
  const handleSearchClick = () => {
    {
      //misma filosofia
      if (menuOpen) setMenuOpen(false);
      if (userOpen) setUserOpen(false);
      if (mostrarCarrito) setMostrarCarrito(false);
      setSearchOpen(!searchOpen);
    }
  };
  /*  MENU DE USUARIO  */
  const [userOpen, setUserOpen] = useState(false);
  const handleUserClick = () => {
    if (menuOpen || searchOpen || mostrarCarrito) {
      setMenuOpen(false);
      setSearchOpen(false);
      setMostrarCarrito(false);
      setTimeout(() => setUserOpen(true), 200);
    } else {
      setUserOpen(!userOpen);
    }
  };

  /*MEDIA QUERY < 1400 BREAKPOINT */
  useEffect(() => {
    const handleResize = () => {
      setisSmallScreen(window.innerWidth < 1400);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div
        className={`
                relative w-full h-[120px] sticky top-0 z-50 flex items-center 
                justify-between px-5 transition-all 
                duration-400 
                ${darkModeScroll}`}
      >
        {/*LOGO*/}
        {!isSmallScreen ? (
          <div className="flex flex-col items-center justify-center gap-1 shrink-0 pr-4">
            <img src="/img/logo_proyect.png" alt="Logo" className="w-15" />
            <span className="text-[rgbrgb(203,101,224)] font-semibold whitespace-nowrap text-xl">
              OriginDev
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-1 shrink-0 pr-4">
            <img src="/img/logo_proyect.png" alt="Logo" className="w-10" />
            <span className="text-[rgb(203,101,224)] font-semibold whitespace-nowrap text-lg">
              OriginDev
            </span>
          </div>
        )}

        {/* NAV-ITEMS */}
        {!isSmallScreen && (
          <nav>
            {
              <ul className="flex flex-wrap justify-center items-center gap-6 whitespace-nowrap text-2xl">
                {[
                  { label: "Home", id: "home" },
                  { label: "Developer Full Stack", id: "fullstack" },
                  { label: "Frontend", id: "frontend" },
                  { label: "Backend", id: "backend" },
                  { label: "All Categories", id: "categories" },
                  { label: "About", id: "about" },
                ].map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`${darkModeHoverItems}`}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            }
          </nav>
        )}
        {/* ICONOS Y MENU */}
        <div className="flex items-center justify-center gap-6 shrink-0 space-y-[-1]">
          {/*LUPA*/}
          <button
            onClick={handleSearchClick}
            className="hover:scale-110 transition-transform"
          >
            <img
              src="/img/lens_logo.png"
              alt="Buscar"
              className="w-7 cursor-pointer"
            />
          </button>
          {/*CARRITO*/}
          <div className="relative">
            <button
              onClick={toggleCarrito}
              className="hover:scale-110 transition-transform relative"
            >
              <img
                src="/img/carrito_logo.png"
                alt="Carrito"
                className="w-8 pt-1.5 cursor-pointer"
              />
            </button>
            {contracts.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-400 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {contracts.length}
              </span>
            )}
          </div>
          {/*USUARIO*/}
          <div className="relative">
            <button
              onClick={handleUserClick}
              className="hover:scale-110 transition-transform"
            >
              <a href="#">
                <img
                  src="/img/user_logo.png"
                  alt="User"
                  className="w-7 mt-1 cursor-pointer"
                />
              </a>
            </button>
            {userOpen && (
              <div
                className={`${darkModeBg} absolute top-[50px] right-[-10] right-[-10] w-50 rounded-lg py-2 z-50 text-sm`}
              >
                {/* TRIANGULO */}
                <div className="absolute -top-3 right-5 w-4 h-5 z-[-1]">
                  <div
                    className={`w-4 h-4 ${darkModeBg} rotate-45 transform origin-bottom-left`}
                  ></div>
                </div>
                <div
                  className={`flex justify-center gap-10 ${darkModeBg} border-b ${darkModeSep} pt-1 pb-2 space-y-[-1]`}
                >
                  {/* TEMA ICON */}
                  <button
                    className={`${darkModeText} flex justify-end hover:scale-110 transition-transform`}
                  >
                    <ThemeSwitch />
                  </button>
                  {/* MENSAJES */}
                  <button className="hover:scale-110 transition-transform">
                    <img
                      src="/img/logo_message.png"
                      alt="tema oscuro"
                      className="w-8"
                    />
                  </button>
                </div>
                {/*TEXTO*/}
                <ul className="flex flex-col text-center">
                  <li
                    className={`px-4 py-2 font-semibold cursor-pointer transition-colors ${darkModeItemsList} ${hoverBgColor} ${darkModeHoverItems} active:bg-zinc-700`}
                  >
                    Mi cuenta
                  </li>
                  <li className="px-4 py-2 text-red-600 font-semibold cursor-pointer hover:bg-red-200 active:bg-zinc-700 transition-colors">
                    Salir
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* BOTON HAMBURGUESA */}
          {isSmallScreen && (
            <button
              onClick={HandleMenuOpen}
              className={`${darkModeItemsList} text-3xl  pl-1}`}
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          )}
        </div>
        {/* MENU HAMBURGUESA - SOLO CELULAR */}
        {isSmallScreen && menuOpen && (
          <div
            className={`${darkModeBg} absolute top-[120px] text-xl left-0 w-full flex flex-col items-center py-4`}
          >
            {/* LISTA */}
            <ul className="w-full">
              {[
                { label: "Home", id: "home" },
                { label: "Developer Full Stack", id: "fullstack" },
                { label: "Frontend", id: "frontend" },
                { label: "Backend", id: "backend" },
                { label: "All Categories", id: "categories" },
                { label: "About", id: "about" },
              ].map((section) => (
                <a href={`#${section.id}`} className={`${darkModeHoverItems}`}>
                  <li
                    key={section.id}
                    className={`flex items-center justify-center p-6 w-full h-10 text-center ${hoverBgColor} transition-colors ${darkModeHoverItems}`}
                  >
                    {section.label}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        )}
        {/* BUSCADOR - LUPA  */}
        {searchOpen && (
          <div
            className={`${darkModeBg} absolute top-[120px] left-0 w-full p-4 flex items-center gap-2`}
          >
            <input
              type="text"
              placeholder="Qué estas buscando?"
              className={`${darkModeItemsList} font-bold flex-grow px-6 py-2 rounded-full  outline-none`}
            />
            <button
              onClick={handleSearchClick}
              className={`${darkModeItemsList} text-xl`}
            >
              ✖
            </button>
          </div>
        )}
        {/* CARRITO */}
        {mostrarCarrito && (
       <div className="fixed top-[122px] inset-x-3 flex justify-center">
          <div className={`${darkModeBg} w-[80%] max-w-5xl max-h-[80vh] overflow-y-auto rounded-xl bg-zinc-900}`}>
              <CardsCarrito />
            </div>
        </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
