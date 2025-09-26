import React from "react";
import imagem from "../assets/vegano.png";

function ItemCompra({ titulo, preco, restaurante, distancia, categoria, rev }) {
  return (
    <div className="flex hover:scale-105 transition-transform w-full flex-row min-h-40 max-h-60 rounded-2xl border-1 border-gray-400 bg-white items-center">
      <img
        src={imagem}
        alt="Product displayed for purchase"
        className="w-20 ml-5 rounded-sm"
      />
      <div className="flex flex-col p-2 w-full text-left">
        <h1 className="font-medium text-[2.5vmin] p-2 text-gray-950">
          {titulo}
        </h1>
        <div className="flex justify-between ml-3">
          <p className="text-[1.2vmax]">⭐{rev}</p>
        </div>
        <div className="flex gap-2 justify-between px-4">
          <p className="">{restaurante}</p>
          <p className="font-light">{distancia}</p>
        </div>
        <div className="flex gap-2 justify-between px-4">
          <p className="font-thin  text-[2.5vmin]">{categoria}</p>
          <p className="font-light text-[2.5vmin]">{preco}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemCompra;
