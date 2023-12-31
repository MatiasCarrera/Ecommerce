import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../../context/CartContext";

const CartContaner = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let limpiar = () => {
    Swal.fire({
      title: "Estas seguro de vaciar tu carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, vaciar",
      denyButtonText: `No, no vaciar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No vaciaste el carrito", "", "info");
      }
    });
  };

  let precioTotal = getTotalPrice();

  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{
              width: "400px",
              border: "2px solid steelblue",
              marginBlock: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>{elemento.title}</h3>
            <h3>{elemento.price}</h3>
            <h4>cantidad: {elemento.quantity}</h4>
            <button onClick={() => deleteById(elemento.id)}>Eliminar</button>
          </div>
        );
      })}

      {cart.length > 0 ? (
        <>
          <Button variant="contained" color="secondary" onClick={limpiar}>
            Vaciar Carrito
          </Button>
          <h2>El total es:{precioTotal}</h2>

          <Link to="/checkout">
            <button>Terminar compra</button>
          </Link>
        </>
      ) : (
        <h1>El carrito esta vacio</h1>
      )}
    </div>
  );
};

export default CartContaner;
