import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Data = () => {
    const { Place_id } = useParams();
    const [datos, Setdatos] = useState();

    useEffect(() => {
        fetch(`https://www.meteosource.com/api/v1/free/point?place_id=${Place_id}&sections=current%2Chourly&language=en&units=ca&key=m4jjqsoiezco6c7lecmmhg8qus818j18w77qmkve`)
            .then((response) => response.json())
            .then((data) => Setdatos(data))
            .catch(error => console.error("Error al cargar los Datos:", error));
    }, [Place_id]);
    console.log(datos);

    return (
        <div>



        </div>
    );
};

export default Data;