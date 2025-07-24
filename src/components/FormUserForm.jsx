import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

const FormUserForm = () => {
  const { darkMode } = useContext(ThemeContext);
  const darkModeCopy = darkMode
    ? "from-green-600 to-green-900"
    : "from-green-300 to-green-700";
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Fondo con opacidad */}
        <div className="absolute inset-0 bg-[url('/img/bg-matrix.jpg')] bg-cover bg-center opacity-40 z-0"></div>

        {/* Contenido principal encima */}
        <div className="relative z-10">
          <header className="w-full flex flex-col justify-center items-center bg-black/20">
            <img
              src="/img/logo_proyect.png"
              alt="Logo"
              className="size-22 my-1.5 pt-1"
            />
            <h1 className="flex justify-center py-2 text-transparent bg-clip-text bg-gradient-to-l from-violet-500 to-violet-700 font-bold text-2xl">
              Formulary OriginDev
            </h1>
          </header>
          <main className="w-full text-center flex justify-center items-center">
            <div>
              <form className="text-[1.3rem] text-[rgb(175,252,0)] block p-20">
                <label className="border-2 border-violet-600 p-2 rounded-md">
                  Nombre de Usuario:
                  <input
                    type="text"
                    name="nombre de usuario"
                    placeholder=" Nombre de Usuario"
                  ></input>
                </label>
                <br />
                <br />
                <label className="border-2 border-violet-600 p-2 rounded-md">
                  Nombre(s):
                  <input
                    type="text"
                    name="nombre"
                    placeholder=" Nombres Completos"
                  ></input>
                </label>
                <br />
                <br />
                <label className="border-2 border-violet-600 p-2 rounded-md">
                  Apellido(s):
                  <input
                    type="text"
                    name="apellido"
                    placeholder=" Apellidos"
                  ></input>
                </label>
                <br />
                <br />
                <label className="border-2 border-violet-600 p-2 rounded-md">
                  Contraseña:
                  <input
                    type="password"
                    name="contraseña"
                    placeholder=" Contraseña"
                  ></input>
                </label>
                <br />
                <br />
                <label className="border-2 border-violet-600 p-2 rounded-md">
                  Corre electronico:
                  <input
                    type="email"
                    name="corre electronico"
                    placeholder=" ejemplo@ejemplo.com"
                  ></input>
                </label>
                <br />
                <br />
                <label className="border-2 border-violet-600 p-2 rounded-md hover:bg-violet-600/20">
                  <input
                    type="submit"
                    className="w-26 text-[rgb(175,252,65)] cursor-pointer rounded-md"
                    value="PUSHEAR"
                  />
                </label>
              </form>
            </div>
          </main>
          <footer className="bg-black/10 pb-2.5 flex justify-center items-center flex-col">
            <ul>
              <div className="flex gap-4 my-4 transition-colors duration-600">
                <FaFacebook className="text-3xl transition-transform duration-500 hover:text-blue-500 hover:-translate-y-1 cursor-pointer" />
                <FaInstagram className="text-3xl transition-transform duration-500 hover:text-pink-500 hover:-translate-y-1 cursor-pointer" />
                <FaLinkedin className="text-3xl transition-transform duration-500 hover:text-blue-700 hover:-translate-y-1 cursor-pointer" />
                <FaTwitter className="text-3xl transition-transform duration-500 hover:text-sky-400 hover:-translate-y-1 cursor-pointer" />
              </div>
            </ul>
            <ul>
              <li>
                <Link
                  href="/"
                  className={`text-transparent bg-clip-text bg-gradient-to-l from-violet-500 to-violet-700 text-[22px] font-bold my-2 hover:text-[rgb(175,252,65)]`}
                >
                  return OriginDev
                </Link>
              </li>
            </ul>
            <p
              className={`text-transparent bg-clip-text bg-gradient-to-b ${darkModeCopy} font-semibold text-center md:text-left mt-2`}
            >
              © {new Date().getFullYear()} OriginDev. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default FormUserForm;
