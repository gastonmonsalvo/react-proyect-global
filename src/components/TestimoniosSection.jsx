export default function TestimoniosSection() {

  const testimonios = [
    { id: 1, nombre: "Juan (Frontend Dev)", texto: "Gracias a esta plataforma conseguí trabajo en menos de una semana. ¡Increíble!" },
    { id: 2, nombre: "María (Fullstack Dev)", texto: "Preferí crear mi perfil acá en vez de LinkedIn. Me contactaron rápido y fue más simple." },
    { id: 3, nombre: "Luis (Backend Dev)", texto: "Un amigo me recomendó esta app. Encontré un equipo genial en pocos días." },
    { id: 4, nombre: "Ana (Recruiter)", texto: "Me encanta la app, los perfiles son de alta calidad y fáciles de encontrar." },
    { id: 5, nombre: "Carlos (Tech Lead Recruiter)", texto: "Los perfiles son excelentes, ¡ahorro mucho tiempo en la búsqueda!" },
    { id: 6, nombre: "Sofía (HR Recruiter)", texto: "La aplicación es muy práctica y los candidatos están muy bien calificados." },
  ];

  return (
    <section className="p-4 bg-black">
      <h2
        className="text-2xl font-bold mb-4 text-center"
        style={{ color: "rgb(199, 125,255)" }}
      >
        TESTIMONIOS
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {testimonios.map((t) => (
          <div
            key={t.id}
            className="rounded p-4 shadow-md bg-black border border-gray-700"
          >
            <p className="italic text-white">
              &quot;{t.texto}&quot;
            </p>
            <p
              className="mt-2 text-sm font-semibold"
              style={{ color: "rgb(175, 252, 65)" }}
            >
              - {t.nombre}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
