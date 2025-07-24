import { useState, useEffect } from "react";
import { useCarrito } from "@/contexts/CarritoContext";
import { Button } from "@/utils/Button";

export default function CardsCarrito() {
  const { carrito, contracts, setContracts, limpiar, setCarrito } = useCarrito();

  // Filtrar solo los devs que no fueron contratados
  const devsSinContratar = carrito.filter(
    (dev) => !contracts.some((contract) => contract.dev === dev.name)
  );

  // Estado local para controlar las cards visibles
  const [cards, setCards] = useState(devsSinContratar);

  // Mantener sincronizadas las cards si cambia el carrito o los contratos
  useEffect(() => {
    setCards(devsSinContratar);
  }, [carrito, contracts]);

  const [selectedDev, setSelectedDev] = useState(null);
  const [form, setForm] = useState({ salario: "", lenguaje: "", horas: "" });

  const handleReject = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((dev) => dev.id !== id)); // eliminar del contexto
    setCards((prev) => {
      const isLastCard = prev.length === 1 && prev[0].id === id;
      const hasContracts = contracts.length > 0;

      if (isLastCard && !hasContracts) {
        limpiar(); // borrar todo
        return [];
      }

      return prev.filter((card) => card.id !== id); // eliminar localmente
    });
  };

  const handleAccept = (dev) => {
    setSelectedDev(dev);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newContract = {
      dev: selectedDev.name,
      ...form,
    };
    setContracts([...contracts, newContract]);
    setCards((prev) => prev.filter((card) => card.id !== selectedDev.id));
    setSelectedDev(null);
    setForm({ salario: "", lenguaje: "", horas: "" });
  };

  return (
    <div className="p-4 bg-zinc-900 min-h-screen font-sans text-white">
      {/* Grid de cards en el carrito (sin contratar) */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cards.map(({ id, name, img }) => (
          <div
            key={id}
            className="bg-zinc-800 rounded-2xl shadow-xl p-6 flex flex-col items-center"
          >
            <img
              src={img}
              alt={name}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold text-center text-white mb-6">
              {name}
            </h2>
            <div className="flex justify-around w-full">
              <button onClick={() => handleReject(id)}>
                <Button label={`Rechazar`} className="bg-[rgb(175,252,65)] text-black" />
              </button>
              <button onClick={() => handleAccept({ id, name, img })}>
                <Button label={`Contratar`} className="bg-[rgb(199,125,255)] text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de contrato */}
      {selectedDev && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-zinc-800 p-6 rounded-2xl w-80 shadow-xl">
            <h2 className="text-xl font-bold text-[rgb(175,252,65)] mb-4">
              Contrato laboral
            </h2>
            <p className="mb-2">
              Para: <span className="font-semibold">{selectedDev.name}</span>
            </p>
            <input
              name="salario"
              placeholder="Salario ofrecido"
              value={form.salario}
              onChange={handleChange}
              className="w-full p-2 mb-2 rounded bg-zinc-700 text-white"
            />
            <input
              name="lenguaje"
              placeholder="Lenguaje requerido"
              value={form.lenguaje}
              onChange={handleChange}
              className="w-full p-2 mb-2 rounded bg-zinc-700 text-white"
            />
            <input
              name="horas"
              placeholder="Horas de trabajo"
              value={form.horas}
              onChange={handleChange}
              className="w-full p-2 mb-4 rounded bg-zinc-700 text-white"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setSelectedDev(null)}
                className="text-sm text-gray-300 hover:underline"
              >
                Cancelar
              </button>
              <button
                onClick={handleSubmit}
              >
                <Button label={"Enviar Contrato"} className={`bg-[rgb(176,87,245)] hover:bg-[rgb(199,125,255)] text-black ml-6 mr-1`}/>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lista de contratos enviados */}
      {contracts.length > 0 && (
        <div className="mt-10 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold mb-3 text-[rgb(175,252,65)]">
            Contratos enviados
          </h3>
          <ul className="space-y-2">
            {contracts.map((c, i) => (
              <li
                key={i}
                className="bg-zinc-800 p-4 rounded-xl text-sm text-white shadow"
              >
                <strong>{c.dev}</strong> — 💵 {c.salario} | 💻 {c.lenguaje} | ⏰{" "}
                {c.horas}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
