import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ItemListContainer, ItemDetailContainer } from "./components";
import CartContextProvider from "./context/CartContext";
import CartContainer from "./components/CartContainer/CartContainer";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ItemListContainer greeting="Bienvenido a Glizzy World" />,
  },
  {
    path: "/category/:id",
    element: <ItemListContainer greeting="Categoria de Productos" />,
  },
  {
    path: "/item/:id",
    element: <ItemDetailContainer />,
  },
  {
    path: "/cart",
    element: <CartContainer />,
  },
]);

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={routes} />
    </CartContextProvider>
  );
}

export default App;
