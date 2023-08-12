import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, serverTimestamp, updateDoc, doc} from "firebase/firestore";
import { Button } from "@mui/material";

const CheckoutContainer = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  let total = getTotalPrice();

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    let ordersCollections = collection(db, "orders");
    addDoc(ordersCollections, order).then((res) => setOrderId(res.id));

    cart.forEach((elemento)=>{
      updateDoc(doc(db,'products', elemento.id) , { stock: elemento.stock - elemento.quantity });
    })
  };

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <div>
      

      {orderId ? (
        <h3>Su numero de compra es {orderId}</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingrese su celular"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingrese su Email"
            name="email"
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Comprar
          </Button>
        </form>
      )}
    </div>
  );
};

export default CheckoutContainer;
