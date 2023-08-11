import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = () => {

  const navigate = useNavigate()


  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();

    console.log(userData);

    navigate('/')
  };

  const funcionInput = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={funcionDelFormulario}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="nombre"
          onChange={funcionInput}
        />
        <input
          type="text"
          placeholder="Ingrese su apellido"
          name="apellido"
          onChange={funcionInput}
        />
        <button type="submit">Enviar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default CheckoutContainer;
