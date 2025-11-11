import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [name, Setname] = useState("");
  const [Pais, SetPais] = useState(null); 
  const navigate = useNavigate();

  return (
    <>
      <h1>INFO PAISES</h1>

      <input type="text"onChange={(e) => Setname(e.target.value)} placeholder="Escribe un país..."/>
      <button onClick={() => navigate(`/${name}`)}>Mostrar País</button>
    </>
  );
}

export default App;
