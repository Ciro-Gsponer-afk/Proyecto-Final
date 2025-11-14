import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [Nombre, SetNombre] = useState("")
  const [Lugar, SetLugar] = useState("")
  const [Opciones, SetOpciones] = useState([])


  useEffect(() => {
    fetch(`https://www.meteosource.com/api/v1/free/find_places?text=${Lugar}&language=en&key=m4jjqsoiezco6c7lecmmhg8qus818j18w77qmkve`)
      .then((response) => response.json())
      .then((data) => SetOpciones(data))
      .catch((error) => console.error("Error al cargar la localidad:", error));
  }, [Lugar]);
  console.log(Opciones);

  return (
    <>
      <div className="Bienvenida">
        <h1>Bienvenidos</h1></div>

      <div className="Cuestionario">
        <input onChange={(e) => { SetNombre(e.target.value) }} />
        <button onClick={ () =>{SetLugar(Nombre)  } } > Investigar </button>
      </div>

      <div className="lugares">
        {Opciones.map((Lugar) =>
          <div className="Opcion">
            <p> Pais : {Lugar.country}  </p>
            <p> Localidad : {Lugar.adm_area1} </p>
      </div>
        )}
      </div>
    </>
  );
}

export default App;
