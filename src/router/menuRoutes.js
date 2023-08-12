import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import CartContaner from '../components/pages/cart/CartContaner'

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "detail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContaner,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
]



