import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CartWidgetContainer from "../../common/cartWidget/CartWidgetContainer";
import "./Navbar.css"
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navContainer">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <h4 className="navBarTitle">TODOSAMSUNG</h4>
        </Link>
        <ButtonGroup
          variant="text"
          aria-label="text button group"
          sx={{ colour: "secondary" }}
        >
          <Link to="/">
            <Button>Todo</Button>
          </Link>
          <Link to="/category/celular">
            <Button>Celulares</Button>
          </Link>
          <Link to="/category/tablet">
            <Button>Tablets</Button>
          </Link>
          <Link to="/category/tv">
            <Button>TV</Button>
          </Link>
        </ButtonGroup>

        <CartWidgetContainer />
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
