
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  const saludo = "Hola como estas Agustin? Espero que muy bien!";

  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App;


