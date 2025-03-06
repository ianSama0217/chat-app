import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./containers/login";
import Signup from "./containers/signup";

function App() {
  return (
    <div>
      <BrowserRouter basename="/chat/">
        <Routes>
          <Route path="/" element={null}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
