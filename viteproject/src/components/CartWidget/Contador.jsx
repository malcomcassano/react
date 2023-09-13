import { useState } from 'react';

const Contador = () => {
    const [numero, setNumero] = useState(1);
    const handCount = () => setNumero (numero +1)

    return (
        <div>
            {numero}
        </div>
    )
     
} 

export default Contador