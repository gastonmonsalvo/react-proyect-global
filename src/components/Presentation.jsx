import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";


const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // 2 segundos

    return () => clearTimeout(timer);
  }, [onFinish]);

  const { darkMode } = useContext(ThemeContext);
  const darkModeBg = darkMode ? "bg-white" : "bg-black";

  return (
    <>
    <div className={`flex justify-center items-center h-[100vh] ${darkModeBg} text-purple-600 font-bold text-4xl flex-col`}>
        <img src="img/logo_proyect.png" alt="Logo" style={{width: "100px"}}/>
        OD
    </div>
    </>
  );
};


const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? <SplashScreen onFinish={() => setShowSplash(false)} /> : <MainApp />;
};

const MainApp = () => {
  return (
    <>
  
    </>
  );
};

export default App;
