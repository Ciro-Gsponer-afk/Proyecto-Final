import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Data = () => {
  const { Place_id } = useParams();
  const [datos, Setdatos] = useState(null);

  useEffect(() => {
    fetch(`https://www.meteosource.com/api/v1/free/point?place_id=${Place_id}&sections=current%2Chourly&language=en&units=ca&key=m4jjqsoiezco6c7lecmmhg8qus818j18w77qmkve`)
      .then((response) => response.json())
      .then((data) => Setdatos(data))
      .catch((error) => console.error("Error al cargar los Datos:", error));
  }, [Place_id]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Datos del clima</h2>
      {datos ? (
        <div>
          <p><strong>Ciudad:</strong> {datos.name}</p>
          <p><strong>Temperatura actual:</strong> {datos.current.temperature} °C</p>
          <p><strong>Condición:</strong> {datos.current.summary}</p>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default Data;