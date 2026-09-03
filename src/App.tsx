import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Menu from "./components/Menu/Menu";
import Login from "./pages/Login/Login";
import Mesas from "./pages/Mesas/Mesas";
import PedidosItems from "./pages/PedidosItems/PedidosItems";
import Pedidos from "./pages/Pedidos/Pedidos";
import Chefs from "./pages/Chefs/Chefs";
import CadastroMesa from "./pages/CadastroMesa/CadastroMesa";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Menu />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mesas" element={<Mesas />} />
        <Route path="/mesas/nova" element={<CadastroMesa />} />
        <Route path="/pedido-items/:id" element={<PedidosItems />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/chefes" element={<Chefs />} />
      </Routes>
    </>
  );
}

export default App;
