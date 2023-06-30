import { BsFillCartCheckFill } from "react-icons/bs";
import './CartWidget.css'

const CartWidget = ({ contador }) => {
  return (
    <div className="cartContainer">
      <BsFillCartCheckFill color="black" size="2rem" />
      <p>{contador} </p>
    </div>
  );
};

export default CartWidget;
