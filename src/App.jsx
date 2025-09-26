import Header from "./Components/Header.jsx";
import Section4 from "./Components/Section2.jsx";
import Pratos from "./Components/Pratos.jsx";
import Footer from "./Components/Footer.jsx";
import Section1 from "./Components/Section1.jsx";
import Formulario from "./Components/Formulario.jsx";
import ComboRoute from "./combos/ComboRoute.jsx";
import { Routes, Route } from "react-router-dom";
import Filtro from "./Components/Filtro.jsx";
import Curiosidades from "./Components/Curiosidades.jsx";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Section1 />
              <Section4 />
              <Pratos />
              <Curiosidades/>
              <Formulario />
            </>
          }
        />

        <Route path="/combos" element={<ComboRoute />} />
      </Routes>
    </>
  );
}

export default App;
