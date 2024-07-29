import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; // Changed to default import
import Shop from "./pages/shop/shop"; // Changed to default import
import Contact from "./pages/contact"; // Changed to default import
import Cart from "./pages/cart/cart"; // Changed to default import
import { ShopContextProvider } from "./context/shop-context";
import Checkout from "./checkout/Checkout.jsx";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
