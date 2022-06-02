import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import Registrar from "./pages/Registrar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Registrar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
