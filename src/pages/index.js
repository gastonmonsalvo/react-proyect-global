import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeSwitch from "../components/ThemeSwitch";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="prueba">
        <h1>
          Hola me estan probando 
        </h1>
        <ThemeSwitch/>
       </div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
         a/>
      </footer>
    </div>
  );
}
