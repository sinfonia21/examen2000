import React, {useState} from 'react';

const EjemploDeEstado = () => {

const [numero, setNumero] = useState(0);

const aumentar = () => {
    setNumero(numero +1);
}

    return ( 
        <div style={{backgroundColor: 'yellowgreen'}}>
            <h4> Componente numero 4 ejemplo </h4>
            <h3> muestra incremento {numero}</h3>

            <button onClick={aumentar}> Aumentar en 1</button>
        
        </div>
     );
}
 
export default EjemploDeEstado;
