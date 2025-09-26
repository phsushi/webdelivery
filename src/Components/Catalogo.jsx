import React from "react";
import ItemCompra from "./ItemCompra";


const pratosPrincipais = [
  {
    id: 1,
    titulo: "Bowl de Quinoa com Frango Grelhado",
    preco: 29.9,
    restaurante: "Leve & Sabor",
    distancia: "2.4 km",
    categoria: "Prato Principal",
    rev: 4.8,
  },
  {
    id: 2,
    titulo: "Salada Mediterrânea com Atum",
    preco: 32.5,
    restaurante: "Vida Verde",
    distancia: "1.8 km",
    categoria: "Prato Principal",
    rev: 4.6,
  },
  {
    id: 3,
    titulo: "Estrogonofe Vegano de Cogumelos",
    preco: 27.0,
    restaurante: "Veg & Fit",
    distancia: "3.2 km",
    categoria: "Prato Principal - Vegano",
    rev: 4.7,
  },
  {
    id: 4,
    titulo: "Bowl de Grãos e Legumes Assados",
    preco: 26.0,
    restaurante: "Sabor Vegano",
    distancia: "2.0 km",
    categoria: "Prato Principal - Vegano",
    rev: 4.5,
  },
];


const bebidasSaudaveis = [
  {
    id: 5,
    titulo: "Suco Detox de Couve, Maçã e Gengibre",
    preco: 12.0,
    restaurante: "Green Power",
    distancia: "2.0 km",
    categoria: "Bebida",
    rev: 4.5,
  },
  {
    id: 6,
    titulo: "Kombucha de Hibisco",
    preco: 14.9,
    restaurante: "BioBebidas",
    distancia: "3.5 km",
    categoria: "Bebida",
    rev: 4.4,
  },
  {
    id: 7,
    titulo: "Smoothie de Frutas Vermelhas com Proteína",
    preco: 16.5,
    restaurante: "FitBar",
    distancia: "1.2 km",
    categoria: "Bebida",
    rev: 4.9,
  },
  {
    id: 8,
    titulo: "Suco de Laranja e Cenoura com Gengibre (Vegano)",
    preco: 13.0,
    restaurante: "Naturale",
    distancia: "2.1 km",
    categoria: "Bebida - Vegano",
    rev: 4.6,
  },
];


const snacksESobremesas = [
  {
    id: 9,
    titulo: "Cookies de Aveia com Banana",
    preco: 9.9,
    restaurante: "Snack Natural",
    distancia: "2.8 km",
    categoria: "Sobremesa",
    rev: 4.3,
  },
  {
    id: 10,
    titulo: "Brownie Vegano de Batata Doce",
    preco: 11.5,
    restaurante: "Doces do Bem",
    distancia: "1.5 km",
    categoria: "Sobremesa - Vegano",
    rev: 4.7,
  },
  {
    id: 11,
    titulo: "Mix de Castanhas com Frutas Secas",
    preco: 13.0,
    restaurante: "NatureBites",
    distancia: "2.0 km",
    categoria: "Snack",
    rev: 4.6,
  },
  {
    id: 12,
    titulo: "Pudim Vegano de Chia com Cacau",
    preco: 10.0,
    restaurante: "Delícias Veganas",
    distancia: "1.2 km",
    categoria: "Sobremesa - Vegano",
    rev: 4.8,
  },
];

function Catalogo({ filterType }) {
  
  const todosProdutos = [...pratosPrincipais, ...bebidasSaudaveis, ...snacksESobremesas];

  
  const filtrarProdutos = (produtos, filtro) => {
    let produtosFiltrados = [...produtos];

    switch (filtro) {
      case 'vegano':
        produtosFiltrados = produtos.filter(produto => 
          produto.categoria.toLowerCase().includes('vegano')
        );
        break;
      case 'preco-crescente':
        produtosFiltrados = produtos.sort((a, b) => a.preco - b.preco);
        break;
      case 'preco-decrescente':
        produtosFiltrados = produtos.sort((a, b) => b.preco - a.preco);
        break;
      case 'alfabetica':
        produtosFiltrados = produtos.sort((a, b) => 
          a.titulo.localeCompare(b.titulo)
        );
        break;
      case 'todos':
      default:
        produtosFiltrados = produtos;
        break;
    }

    return produtosFiltrados;
  };

  const produtosFiltrados = filtrarProdutos(todosProdutos, filterType);

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
      <div className="w-full flex flex-col min-h-[110vh] max-w-[2500px] justify-items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8
                     py-2 sm:py-4 md:py-6">
        {produtosFiltrados.map((produto) => (
          <div key={produto.id} className="flex flex-col w-full min-w-[250px]  h-auto">
            <ItemCompra {...produto} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
