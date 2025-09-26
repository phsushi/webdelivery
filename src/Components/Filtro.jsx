import React from "react";

function Filtro({ onFilterChange, activeFilter }) {
  const [open, setOpen] = React.useState(false);

  const handleFilterClick = (filterType) => {
    onFilterChange(filterType);
    setOpen(false);
  };

  return (
    <>
      <p
        onClick={() => setOpen(true)}
        className="cursor-pointer hover:scale-115 transition-transform bg-green-300 rounded-2xl p-2 text-center w-20 h-10 text-black/70 shadow-2xs"
      >
        Filtrar
      </p>

      {open && (
        <div className="fixed inset-0 w-screen h-screen top-0 left-0 flex justify-center items-center z-50 bg-black/50">
          <div className="w-[90%] sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 max-w-md 
                         flex flex-col justify-between gap-3 sm:gap-4 
                         p-4 sm:p-6 bg-white rounded-2xl items-center 
                         max-h-[80vh] overflow-y-auto shadow-2xl">
            <h3 className="text-center font-medium text-green-900/90 text-base sm:text-lg md:text-xl mb-2">
              Filtros
            </h3>

            <p 
              onClick={() => handleFilterClick('vegano')}
              className={`text-xs sm:text-sm md:text-base border shadow p-2 sm:p-3 rounded-3xl text-center cursor-pointer 
                         w-full sm:w-3/4 md:w-2/3 transition-all duration-200 ${
                activeFilter === 'vegano' ? 'bg-green-300 border-green-500 font-semibold' : 'border-gray-400/80 hover:bg-gray-100 hover:border-gray-500'
              }`}
            >
              🌱 Vegano
            </p>
            <p 
              onClick={() => handleFilterClick('preco-crescente')}
              className={`text-xs sm:text-sm md:text-base border shadow p-2 sm:p-3 rounded-3xl text-center cursor-pointer 
                         w-full sm:w-3/4 md:w-2/3 transition-all duration-200 ${
                activeFilter === 'preco-crescente' ? 'bg-green-300 border-green-500 font-semibold' : 'border-gray-400/80 hover:bg-gray-100 hover:border-gray-500'
              }`}
            >
              💰 Preço Crescente
            </p>
            <p 
              onClick={() => handleFilterClick('preco-decrescente')}
              className={`text-xs sm:text-sm md:text-base border shadow p-2 sm:p-3 rounded-3xl text-center cursor-pointer 
                         w-full sm:w-3/4 md:w-2/3 transition-all duration-200 ${
                activeFilter === 'preco-decrescente' ? 'bg-green-300 border-green-500 font-semibold' : 'border-gray-400/80 hover:bg-gray-100 hover:border-gray-500'
              }`}
            >
              💸 Preço Decrescente
            </p>
            <p 
              onClick={() => handleFilterClick('alfabetica')}
              className={`text-xs sm:text-sm md:text-base border shadow p-2 sm:p-3 rounded-3xl text-center cursor-pointer 
                         w-full sm:w-3/4 md:w-2/3 transition-all duration-200 ${
                activeFilter === 'alfabetica' ? 'bg-green-300 border-green-500 font-semibold' : 'border-gray-400/80 hover:bg-gray-100 hover:border-gray-500'
              }`}
            >
              🔤 Ordem Alfabética
            </p>
            <p 
              onClick={() => handleFilterClick('todos')}
              className={`text-xs sm:text-sm md:text-base border shadow p-2 sm:p-3 rounded-3xl text-center cursor-pointer 
                         w-full sm:w-3/4 md:w-2/3 transition-all duration-200 ${
                activeFilter === 'todos' ? 'bg-blue-300 border-blue-500 font-semibold' : 'border-gray-400/80 hover:bg-gray-100 hover:border-gray-500'
              }`}
            >
              📋 Mostrar Todos
            </p>

            <button
              className="cursor-pointer font-medium text-red-600 hover:text-red-800 
                        mt-4 py-2 px-4 hover:bg-red-50 rounded-lg transition-all duration-200
                        text-sm sm:text-base"
              onClick={() => setOpen(false)}
            >
              ❌ Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Filtro;