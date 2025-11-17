import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [Nombre, SetNombre] = useState("");
  const [Lugar, SetLugar] = useState("");
  const [Opciones, SetOpciones] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (Lugar.trim() === "") return;
    fetch(`https://www.meteosource.com/api/v1/free/find_places?text=${Lugar}&language=en&key=m4jjqsoiezco6c7lecmmhg8qus818j18w77qmkve`)
      .then((response) => response.json())
      .then((data) => SetOpciones(data))
      .catch((error) => console.error("Error al cargar las localidades:", error));
  }, [Lugar]);

  const CambiarURL = (Id) => {
    navigate(`/${Id}`);
  };

  return (
    <>
      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>

      <div className="Bienvenida">
        <h1>Bienvenidos</h1>
      </div>

      <div className="Cuestionario">
        <input
          placeholder="Escribí una ciudad..."
          onChange={(e) => SetNombre(e.target.value)}
        />
        <button onClick={() => SetLugar(Nombre)}>Investigar</button>
      </div>

      <div className="lugares">
        {Opciones.map((Lugar) => (
          <div
            key={Lugar.place_id}
            className="Opcion animate__animated animate__fadeInUp"
            onClick={() => CambiarURL(Lugar.place_id)}
          >
            <i className="wi wi-day-cloudy weather-icon"></i>
            <p>País: {Lugar.country}</p>
            <p>Localidad: {Lugar.adm_area1}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;