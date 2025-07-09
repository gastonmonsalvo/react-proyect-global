import React, { useRef, useState, useEffect } from "react";
import DatePerson from "./DatePerson";

const cardsData = [
{ id:1, name: "Karen Sandoval", role: "Frontend Dev", img: "/img/Karen.png.jpg" },
{ id:2, name: "Ibar Caubet", role: "Frontend & Backend Dev", img: "/img/Ibar.png.jpg" },
{ id:3, name: "Matias Dominguez", role: "Fullstack Dev", img: "/img/matias.png.jpg" },
{ id:4, name: "Gaston Monsalvo", role: "Frontend Dev", img: "/img/gaston.png" },
{ id:5, name: "Nathalie Flores", role: "Frontend Dev", img: "/img/natty.png.jpg" },
{ id:6, name: "Brenda Romero", role: "Frontend Dev", img: "/img/brenda.png.jpg" },
{ id:7, name: "Pedro Mendive", role: "Frontend Dev", img: "/img/pedro.png.jpg" },
{ id:8, name: "Ianela Tenaglia", role: "Frontend & Backend Dev", img: "/img/ianela.png.jpg" },
{ id:9, name: "Braian Martinez", role: "Frontend Dev", img: "/img/braian.png" }

];

const CARDS_VISIBLE = 4;

const Carousel = () => {
const wrapperRef = useRef(null);
const containerRef = useRef(null);
const cardRef = useRef(null);
const [currentIndex, setCurrentIndex] = useState(0);

const getScrollAmount = () => {
    if (!cardRef.current) return 270 + 20;
    const style = window.getComputedStyle(cardRef.current);
    const gap = parseInt(style.marginRight) || 20;
    return cardRef.current.offsetWidth + gap;
};

const scrollToIndex = (idx) => {
    if (!containerRef.current || !cardRef.current) return;
    const scrollAmount = getScrollAmount();
    containerRef.current.scrollTo({
      left: idx * scrollAmount,
    behavior: "smooth",
    });
    setCurrentIndex(idx);
};

const handleLeft = () => {
    const newIndex = Math.max(currentIndex - CARDS_VISIBLE, 0);
    scrollToIndex(newIndex);
};

const handleRight = () => {
    const maxIndex = cardsData.length - CARDS_VISIBLE;
    const newIndex = Math.min(currentIndex + CARDS_VISIBLE, maxIndex);
    scrollToIndex(newIndex);
};

const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
    e.preventDefault();
    handleLeft();
    }
    if (e.key === "ArrowRight") {
    e.preventDefault();
    handleRight();
    }
};

useEffect(() => {
    if (wrapperRef.current) wrapperRef.current.focus();
}, []);

useEffect(() => {
    const onScroll = () => {
    if (!containerRef.current || !cardRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const scrollAmount = getScrollAmount();
    const idx = Math.round(scrollLeft / scrollAmount);
    setCurrentIndex(idx);
    };
    const ref = containerRef.current;
    ref && ref.addEventListener("scroll", onScroll);
    return () => ref && ref.removeEventListener("scroll", onScroll);
}, []);

const maxIndex = cardsData.length - CARDS_VISIBLE;

return (
    <div
    ref={wrapperRef}
    tabIndex={0}
    onKeyDown={handleKeyDown}
    className="flex items-center justify-center w-full outline-none"
    >
    <button
        onClick={handleLeft}
        disabled={currentIndex === 0}
        className={`text-3xl px-2 py-1 rounded transition-colors focus:outline-none bg-transparent border-none
        ${currentIndex === 0 ? "opacity-30 cursor-default" : "hover:text-purple-700 cursor-pointer"}`}
        aria-label="Ir a la diapositiva anterior"
    >&#8592;</button>

    <div
        className="w-[95%] overflow-x-auto scroll-smooth outline-none"
        ref={containerRef}
    >
        <div className="flex gap-5 py-2">
        {cardsData.map((card, idx) => (
            <div
            key={idx}
            ref={idx === 0 ? cardRef : null}
            className="flex-shrink-0 w-[270px] min-h-[380px] bg-white/30 rounded-lg shadow-md flex flex-col items-center pt-5 pb-4 font-sans backdrop-blur-md"
            >
            <img src={card.img} alt={`Foto de ${card.name}`} className="w-[150px] h-[150px] object-cover rounded-full mb-2" />
            <h3 className="text-black text-lg font-bold mt-1">{card.name}</h3>
            <p className="text-black text-sm opacity-80 mb-2">{card.role}</p>
            <DatePerson className="mt-auto px-4 py-2 bg-purple-700 text-white rounded font-bold text-sm shadow hover:bg-purple-900 transition" userId={card.id} />
            </div>
        ))}
        </div>
    </div>

    <button
        onClick={handleRight}
        disabled={currentIndex >= maxIndex}
        className={`text-3xl px-2 py-1 rounded transition-colors focus:outline-none bg-transparent border-none
        ${currentIndex >= maxIndex ? "opacity-30 cursor-default" : "hover:text-purple-700 cursor-pointer"}`}
        aria-label="Ir a la diapositiva siguiente"
    >&#8594;</button>
    </div>
);
};

export default Carousel;