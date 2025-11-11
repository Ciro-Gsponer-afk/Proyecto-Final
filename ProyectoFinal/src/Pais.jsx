import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

function Pais() {
  const { NamePais } = useParams();
  const [Pais, SetPais] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${NamePais}`)
      .then((response) => response.json())
      .then((data) => SetPais(data[0]))
      .catch((error) => console.error("Error al cargar el país:", error));
  }, [NamePais]);

  if (!Pais) {
    return <p>Cargando país...</p>;
  }

  return (
    <div>
      <h1>{Pais.name.common}</h1>
      <p><strong>Nombre oficial:</strong> {Pais.name.official}</p>
      <img
        src={Pais.flags.png}
        alt={Pais.name.common}
        width="200"
      />
      <p><strong>Capital:</strong> {Pais.capital?.[0]}</p>
      <p><strong>Región:</strong> {Pais.region}</p>
      <p><strong>Población:</strong> {Pais.population.toLocaleString()}</p>
      <p><strong>Área:</strong> {Pais.area.toLocaleString()} km²</p>
      <p><strong>Moneda:</strong> {Object.values(Pais.currencies)[0].name}</p>
      <p><strong>Idioma principal:</strong> {Object.values(Pais.languages)[0]}</p>
      <button onClick={() => navigate(`/`) } > Volver al INICIO </button>
    </div>
  );
}

export default Pais;