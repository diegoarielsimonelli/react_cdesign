import React from 'react';
import './Carrito.css';

const Carrito = () => {
    const [number,setNumber] = React.useState(0);
    const[stock,setStock]= React.useState(5)
    const handleCounterUp = () => {
        setStock(stock- 1)
        setNumber(number + 1)
        
	};

	const handleCounterDown = () => {
		setStock(stock+ 1)
      setNumber(number - 1)
        
	};
    const comprar  = () => {
        alert('Gracias por su compra')
   };
   
                                    

    return (
        <div className="productos">
            <h1>Producto 1</h1>
            <h2 > Cantidad: {number}</h2>  
            <h2 > Stock: {stock}</h2>
            <button onClick={handleCounterUp}>+</button>
            <button onClick={handleCounterDown}>-</button>
            <button onClick={comprar}>Comprar</button>
        
            
      </div>
  )
    
}

export default Carrito
