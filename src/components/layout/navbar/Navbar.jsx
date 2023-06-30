
import CartWidgetContainer from "../../common/cartWidget/CartWidgetContainer";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navContainer">
      <h4>TiendaGamer</h4>

      <ul className="containerCategories">
        <li>
          <button>Todas</button>
        </li>
        <li>
          <button>PlayStation</button>
        </li>
        <li>
          <button>XBox</button>
        </li>
        <li>
          <button>PC</button>
        </li>
      </ul>

    <CartWidgetContainer />
    </div>
  );
};

export default Navbar;
