import React from "react";
import Filtro from "../Components/Filtro";
import Container from "@mui/material/Container";
import Catalogo from "../Components/Catalogo";

const ComboRoute = () => {
  const [filtroAtivo, setFiltroAtivo] = React.useState('todos');

  const handleFilterChange = (novoFiltro) => {
    setFiltroAtivo(novoFiltro);
  };

  return (
    <Container disableGutters className="w-auto flex flex-col justify-left p-2 sm:p-4">
      <div className="mb-4 sm:mb-6">
        <Filtro onFilterChange={handleFilterChange} activeFilter={filtroAtivo} />
      </div>
      <Catalogo filterType={filtroAtivo} />
    </Container>
  );
};

export default ComboRoute;