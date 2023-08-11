import { BrowserRouter } from "react-router-dom";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import AppRouter from "./router/AppRouter";
import CartContextComponent from "./context/CartContext";
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
        <CartContextComponent>
          <AppRouter />
        </CartContextComponent>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
