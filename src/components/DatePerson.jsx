import FoldeButton from "@/utils/FoldeButton";

function DatePerson({ userId }) {
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
      location: "Buenos Aires(GBA-CABA)"
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
      location: "Buenos Aires(GBA)"
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
      location: "Buenos Aires(GBA-CABA)"
    },
    {
      id: 4,
      name: "Gaston", 
      lastname: "Monsalvo", 
      miniBio:"Soy un estudiante de la Academia Global Academy ejerciendo la carrera de Full Stack Developer",
      mainStack: "MERN Stack",
      framework: "Next.js && Node.js",
      experiencieLevel: "Senior",
      timeAvailability: "Full Time",
      modeTheWork: "Hibrido",
      location: "Buenos Aires(GBA-CABA)"
    },
    {
      id: 5,
      name: "Nathalie", 
      lastname: "Flores", 
      miniBio: "Soy una estudiante de la Academia Global Academy ejerciendo la carrera de Full Stack Developer",
      mainStack: "MERN Stack",
      framework: "Next.js && Node.js",
      experiencieLevel: "Junior",
      timeAvailability: "Full Time",
      modeTheWork: "Hibrido",
      location: "Buenos Aires(GBA-CABA)"
    },
    {
      id: 6,
      name: "Brenda", 
      lastname: "Romero", 
      miniBio: "Soy una estudiante de la Academia Global Academy ejerciendo la carrera de Full Stack Developer",
      mainStack: "MERN Stack",
      framework: "Next.js && Node.js",
      experiencieLevel: "Junior",
      timeAvailability: "Full Time",
      modeTheWork: "Hibrido",
      location: "Buenos Aires(GBA-CABA)"
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
      location: "Buenos Aires(GBA-CABA)"
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
      location: "Buenos Aires(GBA-CABA)"
    },
    {
      id: 9,
      name: "Braian", 
      lastname: "Martinez", 
      miniBio: "Soy un estudiante de la Academia Global Academy y por mi ausencia uno de los sospechosos por la desaparición de Maldonado, cuac",
      mainStack: "MERN Stack",
      framework: "Next.js && Node.js",
      experiencieLevel: "Junior",
      timeAvailability: "Full Time",
      modeTheWork: "Hibrido",
      location: "Buenos Aires(GBA-CABA)"
    }
  ];

  const user = Usuarios.find((u) => u.id === userId);

  if (!user) return null; // Por si no encuentra el usuario

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <FoldeButton label={`Ver Perfil`}>
          <div className="flex bg-violet-900 p-4 rounded text-green-500 flex-col gap-2 border-">
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
