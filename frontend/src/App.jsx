import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayouts from "./layout/AuthLayouts";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayouts />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
