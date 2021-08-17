import React from 'react';
import './Carrito.css';

const Carrito = () => {
    const [number,setNumber] = React.useState(0);
let  stock= 5
    const handleCounterUp = () => {
        
        number < stock ? setNumber(number + 1) : alert('No hay más stock.')
	};

	const handleCounterDown = () => {
		
      
      number > 0 ? setNumber(number - 1) : alert('Agrega al menos un producto...')
	};
    const comprar  = () => {
        alert('Gracias por su compra')
   };
   

   
                 

    return (
        <div className="productos">
            <h1>Producto 1</h1>
            <h2 > Cantidad: {number}</h2>  
            <button onClick={handleCounterUp}>+</button>
            <button onClick={handleCounterDown}>-</button>
            <button onClick={comprar}>Comprar</button>
            
        

            
        
            
        </div>
  )
    
}

export default Carrito
