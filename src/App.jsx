import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "./components/pages/cart/cartContainer";
import Navbar from "./components/layout/navbar/Navbar";

import { createTheme, colors, ThemeProvider } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: colors.grey[50],
    },
    secondary: {
      main: colors.blue["A700"],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryName" element={<ItemListContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
          </Route>
          <Route path="*" element={<h1>404- Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
