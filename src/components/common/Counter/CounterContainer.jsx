import { useState } from "react"
import Counter from './Counter'

const CounterContainer = ({ agregarAlCarrito, stock, cantidadPrevia }) => {
  const [counter, setCounter] = useState(cantidadPrevia);
  return (
    <Counter
      counter={counter}
      setCounter={setCounter}
      agregarAlCarrito={agregarAlCarrito}
      stock={stock}
    />
  );
};

export default CounterContainer