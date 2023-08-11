import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartWidget.css";
import { Link } from "react-router-dom";



const CartWidget = ({total}) => {
  return (
    <Link to="/cart" style={{ color: "black" }}>
      <Badge badgeContent={total} color="primary" showZero>
        <ShoppingCartIcon fontSize="large" color="action" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
