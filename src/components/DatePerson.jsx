import FoldeButton from "@/utils/FoldeButton";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext"; 




function DatePerson({ userId }) {
  const { darkMode } = useContext(ThemeContext);
  const darkModeText = darkMode ? "text-gray-600" : "text-[rgb(175,252,65)]";
  const darkModeBg = darkMode ? "bg-white-300" :"bg-[rgba(255, 255, 255, 0.3)]";
  const darkModeButton = darkMode ? "bg-purple-700" : "bg-purple-700";
  const darkModeButtonHover = darkMode ? "hover:bg-purple-600" : "hover:bg-purple-950"; 
  const Usuarios = [
    {
      id: 1,
      name: "Karen", 
      lastname: "Sandoval", 
      miniBio: "Soy un estudiante de la Academia Global Academy ejerciendo la carrera de Full Stack Developer",
      mainStack: "MERN Stack",
      framework: "Next.js && Node.js",
      experiencieLevel: "Junior",
      timeAvailability: "Full Time",
      modeTheWork: "Hibrido",
      location: "Buenos Aires"
    },
    { 
      id: 2,
      name: "Ibar", 
      lastname: "Caubet", 
      miniBio: "Soy un estudiante de la Academia Global Academy ejerciendo la carrera de Full Stack Developer",
      mainStack: "MERN Stack",
      framework: "Next.js && Node.js",
      experiencieLevel: "Junior",
      timeAvailability: "Full Time",
      modeTheWork: "Hibrido",
      location: "Buenos Aires"
    },
    {
      id: 3,
      name: "Matias", 
      lastname: "Dominguez", 
      miniBio: "Soy Profesor en la Academia Global Academy ejerciendo la carrera de Full Stack Developer",
      mainStack: "MERN Stack",
      framework: "Next.js && Node.js",
      experiencieLevel: "Senior",
      timeAvailability: "Full Time",
      modeTheWork: "Hibrido",
      location: "Buenos Aires"
    },
    {
      id: 4,
      name: "Gaston", 
      lastname: "Monsalvo", 
      miniBio:"Soy un estudiante de la Academia Global Academy ejerciendo la carrera de Full Stack Developer",
      mainStack: "MERN Stack",
      framework: "Next.js && Node.js",
      experiencieLevel: "Junior",
      timeAvailability: "Full Time",
      modeTheWork: "Hibrido",
      location: "Buenos Aires"
    },
    {
      id: 5,
      name: "Nathalie", 
      lastname: "Flores", 
      miniBio: "Soy un estudiante de la Academia Global Academy ejerciendo la carrera de Full Stack Developer",
      mainStack: "MERN Stack",
      framework: "Next.js && Node.js",
      experiencieLevel: "Junior",
      timeAvailability: "Full Time",
      modeTheWork: "Hibrido",
      location: "Buenos Aires"
    },
    {
      id: 6,
      name: "Brenda", 
      lastname: "Romero", 
      miniBio: "Soy un estudiante de la Academia Global Academy ejerciendo la carrera de Full Stack Developer",
      mainStack: "MERN Stack",
      framework: "Next.js && Node.js",
      experiencieLevel: "Junior",
      timeAvailability: "Full Time",
      modeTheWork: "Hibrido",
      location: "Buenos Aires"
    },
    {
      id: 7,
      name: "Pedro", 
      lastname: "Mendive", 
      miniBio: "Soy un estudiante de la Academia Global Academy ejerciendo la carrera de Full Stack Developer",
      mainStack: "MERN Stack",
      framework: "Next.js && Node.js",
      experiencieLevel: "Junior",
      timeAvailability: "Full Time",
      modeTheWork: "Hibrido",
      location: "Buenos Aires"
    },
    {
      id: 8,
      name: "Ianela", 
      lastname: "Tenaglia", 
      miniBio: "Soy un estudiante de la Academia Global Academy ejerciendo la carrera de Full Stack Developer",
      mainStack: "MERN Stack",
      framework: "Next.js && Node.js",
      experiencieLevel: "Junior",
      timeAvailability: "Full Time",
      modeTheWork: "Hibrido",
      location: "Buenos Aires"
    },
    {
      id: 9,
      name: "Braian", 
      lastname: "Martinez", 
      miniBio: "Soy un estudiante de la Academia Global Academy ejerciendo la carrera de Full Stack Developer",
      mainStack: "MERN Stack",
      framework: "Next.js && Node.js",
      experiencieLevel: "Junior",
      timeAvailability: "Full Time",
      modeTheWork: "Hibrido",
      location: "Buenos Aires"
    }
  ];

  const user = Usuarios.find((u) => u.id === userId);

  if (!user) return null; // Por si no encuentra el usuario

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <FoldeButton label={`Ver Perfil`} className={`${darkModeButton} ${darkModeButtonHover} `}>
          <div className={`flex ${darkModeBg} py-6 pl-2 ${darkModeText} flex-col gap-2 rounded-b-2x1 font-semibold`}>
            <h2 className="text-xl font-bold">{user.name} {user.lastname}</h2>
            <p>{user.miniBio}</p>
            <ul className="list-disc pl-5">
              <li>Stack: {user.mainStack}</li>
              <li>Framework: {user.framework}</li>
              <li>Nivel: {user.experiencieLevel}</li>
              <li>Disponibilidad: {user.timeAvailability}</li>
              <li>Modo de trabajo: {user.modeTheWork}</li>
              <li>Ubicación: {user.location}</li>
            </ul>
          </div>
        </FoldeButton>
      </div>
     
    </>
    
  );
}

export default DatePerson;
