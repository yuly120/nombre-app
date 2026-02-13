import { useState } from "react";
import "./App.css";
import Encabezado from "./encabezado";
import ContenedorCards from "./contenedor";
import ContHorizo from "./conthorizo";

function App() {
  const [vista, setVista] = useState("inicio");

  return (
    <div>
      <Encabezado cambiarVista={setVista} />
      <ContenedorCards vista={vista} />
      <ContHorizo />
    </div>
  );
}

export default App;

