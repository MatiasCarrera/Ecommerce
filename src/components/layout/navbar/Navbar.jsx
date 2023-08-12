import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CartWidgetContainer from "../../common/cartWidget/CartWidgetContainer";
import "./Navbar.css"
import { Link,  } from "react-router-dom";

const Navbar = () => {

  let userRol = 'admin'
  return (
    <div>
      <div className="navContainer">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <h4 className="navBarTitle">TODOSAMSUNG</h4>
        </Link>
        <ButtonGroup
          variant="contained"
          aria-label="text button group"
          sx={{ gap: ".2rem" }}
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

        {userRol === "admin" && <Link to="/dashboard">Admin</Link>}

        <CartWidgetContainer />
      </div>
    </div>
  );
};

export default Navbar;
