import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./containers/login";

function App() {
  return (
    <div>
      <BrowserRouter basename="/chat/">
        <Routes>
          <Route path="/" element={null}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
