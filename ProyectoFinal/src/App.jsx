import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [Nombre, SetNombre] = useState("")
  const [Lugar, SetLugar] = useState("")
  const [Opciones, SetOpciones] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`X`)
      .then((response) => response.json())
      .then((data) => SetOpciones(data))
      .catch((error) => console.error("Error al cargar las localidades:", error));
  }, [Lugar]);
  console.log(Opciones);

  const CambiarURL = (Id) => {
    navigate(`/${Id}`)
  }


  return (
    <>
      <div className="Bienvenida">
        <h1>Bienvenidos</h1></div>

      <div className="Cuestionario" >
        <input onChange={(e) => { SetNombre(e.target.value) }} />
        <button onClick={() => { SetLugar(Nombre) }} > Investigar </button>
      </div>

      <div className="lugares">
        {Opciones.map((Lugar) =>
          <div className="Opcion" onClick={() => CambiarURL(Lugar.place_id)} >
            <p> Pais : {Lugar.country}  </p>
            <p> Localidad : {Lugar.adm_area1} </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;