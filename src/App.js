import data from "./data"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
import  {Home}  from "./pages/Home";
import { Cart } from "./pages/Cart";

const App = () => {
  console.log(data);
  return (
  <div className="flex flex-col">
    <div>
      <Navbar/>
    </div>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="cart" element={<Cart/>} />
    </Routes>


  </div>)
};

export default App;
