import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Data.css';

const Data = () => {
<<<<<<< HEAD
    const { Place_id } = useParams();
    const [datos, Setdatos] = useState();

    useEffect(() => {
        fetch(`https://www.meteosource.com/api/v1/free/point?place_id=${Place_id}&sections=current%2Chourly&language=en&units=ca&key=m4jjqsoiezco6c7lecmmhg8qus818j18w77qmkve`)
            .then((response) => response.json())
            .then((data) => Setdatos(data))
            .catch(error => console.error("Error al cargar los Datos:", error));
    }, [Place_id]);
    console.log(datos);
=======
  const { Place_id } = useParams();
  const [datos, Setdatos] = useState(null);

  useEffect(() => {
    fetch(`https://www.meteosource.com/api/v1/free/point?place_id=${Place_id}&sections=current%2Chourly&language=en&units=ca&key=m4jjqsoiezco6c7lecmmhg8qus818j18w77qmkve`)
      .then((response) => response.json())
      .then((data) => Setdatos(data))
      .catch((error) => console.error("Error al cargar los Datos:", error));
  }, [Place_id]);
>>>>>>> d404659ff57ca81342cf1f3234c33f9dd9be7fc1

  return (
    <div className="DataContainer">
      <h2>Datos del clima</h2>
      {datos ? (
        <>
          <div className="DataItem"><i className="wi wi-strong-wind"></i>Velocidad del viento: {datos.current.wind.speed} Km/h</div>
          <div className="DataItem"><i className="wi wi-direction-up"></i>Ángulo del viento: {datos.current.wind.angle}°</div>
          <div className="DataItem"><i className="wi wi-wind"></i>Dirección del viento: {datos.current.wind.dir}</div>
          <div className="DataItem"><i className="wi wi-time-3"></i>Uso horario: {datos.timezone}</div>
          <div className="DataItem"><i className="wi wi-barometer"></i>Latitud: {datos.lat}</div>
          <div className="DataItem"><i className="wi wi-barometer"></i>Longitud: {datos.lon}</div>
          <div className="DataItem"><i className="wi wi-cloudy"></i>Índice de nubosidad: {datos.current.cloud_cover}%</div>
          <div className="temperature">{datos.current.temperature} °C</div>
          <div className="condition">{datos.current.summary}</div>
        </>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default Data;