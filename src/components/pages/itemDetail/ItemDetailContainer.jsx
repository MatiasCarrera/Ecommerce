import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});


  let { id } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);

  let cantidadPrevia = getQuantityById(id)

  useEffect(() => {
    let promesa = new Promise((resolve) => {
      let productSelected = products.find((product) => product.id === +id);
      resolve(productSelected);
    });

    promesa.then((res) => setProduct(res)).catch((err) => console.log(err));
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    addToCart(data)
  toast.success('🦄 Producto agregado!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});
  };
  return (
    <>
      <ItemDetail
        product={product}
        agregarAlCarrito={agregarAlCarrito}
        cantidadPrevia={cantidadPrevia}
      />
      <ToastContainer/>
    </>
  );
};

export default ItemDetailContainer;
