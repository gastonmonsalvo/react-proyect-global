import React, { useState } from "react";

const cardsData = [ // Objetos con información de tarjetas (nombre e imagen) que usaré para mostrar en interfaz.
  { name: "Carlos", img: "/img/man_programmer.png" },
  { name: "Luis", img: "/img/man_programmer2.0.jpg" },
  { name: "Ana", img: "/img/woman_programmer.jpg" },
  { name: "Desarrolladores agotados por el momento", img: "/img/devAgotado.avif"}
];

const SwipeCards = () => {
  const [dragging, setDragging] = useState(false); // Controla si el usuario está arrastrando una tarjeta.
  const [startX, setStartX] = useState(0); // Guarda la posición inicial del arrastre en el eje X.
  const [currentIndex, setCurrentIndex] = useState(0); //Indica qué tarjeta se está mostrando actualmente.

  const handleDragStart = (e) => {
    setDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
  };

  const handleDragEnd = (e) => {
    if (!dragging) return;
    setDragging(false);
    const endX = e.clientX || e.changedTouches[0].clientX;
    const diffX = endX - startX;

    if (Math.abs(diffX) < 50) return; 
      
    if (diffX < 0){
       setCurrentIndex((prev) => (prev + 1 < cardsData.length ? prev + 1 : prev));
    } 

    if (diffX > 0) {
      setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
    }
    
  };

  return (
    <>
    <div className="swipe-container">
      {cardsData.length > 0 && (
        <div
          className="card"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          <img src={cardsData[currentIndex].img} alt={cardsData[currentIndex].name} />
          <h3>{cardsData[currentIndex].name}</h3>
        </div>
      )};
    </div>
    <style jsx>{`
            .swipe-container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 500px;
            }

            .card {
                width: 300px;
                height: 400px;
                background: white;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                cursor: grab;
            }

            .card img {
                width: 100%;
                height: 80%;
                object-fit: cover;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }
    `}</style>
    </>
  );
};

export default SwipeCards;
