import React from "react";
import { useCartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clear, totalItems } = useCartContext();

  return (
    <>
      <div className="cart-section-container">
        <section className="main-cart-section">
          <h1>Mi carrito de compras</h1>
          <p>Tienes {totalItems} productos en el carrito</p>
          {totalItems > 0 ? (
            <>
              <button onClick={clear} className="btn btn-info button-clear">
                Vaciar Carrito
              </button>
              <div className="cart-items">
                <div className="table-responsive container-cart-item pt-3">
                  <table className="table ">
                    <thead>
                      <tr>
                        <th className="col-3">Imagen</th>
                        <th className="col-2">Articulo</th>
                        <th className="col-1 text-center">Precio</th>
                        <th className="col-2 text-center">Cantidad</th>
                        <th className="col-1 text-center">Precio Total</th>
                        <th className="col-1 text-center">Borrar Todo</th>
                      </tr>
                    </thead>
                    {cart.map((e) => {
                      return <CartItem Item={e} key={e.id} />;
                    })}
                  </table>
                </div>
              </div>
            </>
          ) : (
            <>
              <p
                className="mt-5"
                style={{ fontWeight: "800", fontSize: "x-large" }}
              >
                ¡Tu carrito está vacío! Agregá nuestros
                <Link to="/" className="productos">
                  PRODUCTOS
                </Link>
              </p>
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default Cart;

// import React, { useContext } from "react";
// import "./Cart.css";

// //import components
// import CartItem from "./CartItem/CartItem";
// import { CartContext } from "./CartContext/CartContext";

// const Cart = () => {
//   const { cart, clear } = useContext(CartContext);

//   return (
//     <div className="cart-section-container">
//       <header>{/* Botón continuar comprando que lleve al home  */}</header>
//       <section className="main-cart-section">
//         <h1>Shopping Cart</h1>
//         <p>Tu tienes X items en el Cart</p>
//         <button onClick={clear} className="btn btn-info button-clear">
//           Limpiar
//         </button>
//         <div className="cart-items">
//           <div className="table-responsive container-cart-item pt-3">
//             <table className="table ">
//               <thead>
//                 <tr>
//                   <th className="col-3">Imagen</th>
//                   <th className="col-2">Articulo</th>
//                   <th className="col-1 text-center">Precio</th>
//                   <th className="col-2 text-center">Cantidad</th>
//                   <th className="col-1 text-center">Total</th>
//                   <th className="col-1 text-center">Borrar</th>
//                 </tr>
//               </thead>

//               {cart.map((item) => {
//                 return <CartItem dataItem={item} key={item.id}  />;
//               })}
//             </table>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Cart;
