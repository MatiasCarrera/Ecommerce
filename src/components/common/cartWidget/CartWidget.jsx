import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartWidget.css";
 import { Link } from "react-router-dom";


const CartWidget = () => {
  return (
    <Link to='/cart' style={{color:'black'}}>
      <Badge badgeContent={4} color="primary">
        <ShoppingCartIcon fontSize="large" color="action" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
