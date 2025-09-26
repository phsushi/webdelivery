import { useState } from "react";
//NÃO TIRAR O MOTION, A PORRA DA APLICAÇÃO INTEIRA BUGA SE TIRAR ESSA MERDA
import { motion, AnimatePresence } from "framer-motion";
import left from "../assets/icons/left-arrow.png";
import right from "../assets/icons/right-arrow.png";

function Carrossel({ items, itemsPerPage = 3, renderItem }) {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => {
      const newIndex = prev - itemsPerPage;
      return newIndex < 0
        ? items.length - itemsPerPage // volta pro final
        : newIndex;
    });
  };

  const handleNext = () => {
    setStartIndex((prev) => {
      const newIndex = prev + itemsPerPage;
      return newIndex >= items.length
        ? 0 // volta pro início
        : newIndex;
    });
  };

  // Garante que sempre renderiza o slice correto
  let visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

  // Se o slice "passar do limite", completa com itens do início (loop suave)
  if (visibleItems.length < itemsPerPage) {
    visibleItems = [
      ...visibleItems,
      ...items.slice(0, itemsPerPage - visibleItems.length),
    ];
  }

  return (
    <div className="w-full flex-col sm:flex-row flex gap-4 sm:w-4/5 p-4 rounded-lg sm:h-70 justify-center items-center relative overflow-hidden">
      {/* Botão esquerda */}
      <button
        onClick={handlePrev}
        className="hover:scale-140 transition-transform bg-white w-11 h-11 flex justify-center items-center rounded-4xl px-2 shadow-sm border-b-gray-400 z-1"
      >
        <img
          src={left}
          alt="Seta para esquerda"
          className="w-9 h-9 cursor-pointer object-contain"
        />
      </button>

      {/* Itens */}
      <div className="flex gap-4">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item, i) => (
            <motion.div
              className="hover:scale-105 transition-transform"
              key={item.id ?? i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
            >
              {renderItem(item)}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Botão direita */}
      <button
        onClick={handleNext}
        className="hover:scale-140 transition-transform bg-white w-11 h-11 flex justify-center items-center rounded-4xl px-2 shadow-sm border-b-gray-400 z-1"
      >
        <img
          src={right}
          alt="Seta para direita"
          className="w-9 h-9 cursor-pointer object-contain"
        />
      </button>
    </div>
  );
}

export default Carrossel;
