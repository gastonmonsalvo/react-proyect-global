import Image from "next/image";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Presentation from "@/components/Presentation";
const SwipeCards = dynamic(() => import("@/components/Cards"), { ssr: false });
import Footer from "@/components/Footer";
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const TestimoniosSection = dynamic(
  () => import("@/components/TestimoniosSection"),
  { ssr: false }
);
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CarritoProvider } from "@/contexts/CarritoContext";
import CardsCarrito from "@/components/CardsCarrito";

export default function Home() {
  const [showCards, setShowCards] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCards(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  const [showTestimonios, setShowTestimonios] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setShowTestimonios(true), 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Head>
        <title>OriginDev</title>
        <link rel="icon" href="/img/logo_proyect.png" />
        <meta
          name="description"
          content="Portfolio de desarrolladores full stack. Conocé nuestros proyectos, habilidades y contacto."
        />
        <meta name="copyright" content="OriginDev" />
        <meta name="robots" content="index, follow" />
      </Head>
      <ThemeProvider>
        <Presentation />
        <CarritoProvider>
          <header className="w-full h-[120px] sticky top-0 z-50">
            <Navbar />
          </header>
          <main>
            <div className="h-[200px] "></div>

            <section id="devs" className="scroll-mt-96">
              <h2 className="sr-only">Desarrolladores</h2>
              {showCards && <SwipeCards />}
            </section>

            <div className="h-[200px]"></div>
            <section id="testimonios" className="scroll-mt-60">
              <h2 className="sr-only">Testimonios</h2>
              {showTestimonios && <TestimoniosSection />}
            </section>

            <div className="h-[250px]"></div>

            <footer id="contacto" className="scroll-mt-60">
              <h2 className="sr-only">Contacto</h2>
              <Footer />
            </footer>
          </main>
        </CarritoProvider>
      </ThemeProvider>
    </>
  );
}
