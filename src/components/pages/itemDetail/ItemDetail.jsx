import CounterContainer from "../../common/Counter/CounterContainer";

const ItemDetail = ({ product, agregarAlCarrito, cantidadPrevia=1 }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <h2>{product.price}</h2>
      <CounterContainer
        cantidadPrevia={cantidadPrevia}
        stock={product.stock}
        agregarAlCarrito={agregarAlCarrito}
      />
    </div>
  );
};

export default ItemDetail;
