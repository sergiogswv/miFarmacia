import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import DatosGenerales from "./pages/clientes/DatosGenerales";
import Adicionales from "./pages/clientes/Adicionales";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Registrar />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="clientes" element={<Layout />}>
          {/* <Route index element={<DatosGenerales />} /> */}
          <Route path="datos-generales" element={<DatosGenerales />} />
          <Route path="adicionales" element={<Adicionales />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
