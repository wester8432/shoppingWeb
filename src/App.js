import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import DashBoard from "./pages/admin/DashBoard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminCoupons from "./pages/admin/AdminCoupons";
import AdminOrders from "./pages/admin/AdminOrder";
import Home from "./pages/front/Home";
import Products from "./pages/front/Products";
import FrontLayout from "./pages/front/FrontLayout";
import ProductDetail from "./pages/front/ProductDetail";
import Cart from "./pages/front/Cart";
import Checkout from "./pages/front/Checkout";
import Success from "./pages/front/Success";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FrontLayout />}>
          <Route path="" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="success/:orderId" element={<Success />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<DashBoard />}>
          <Route path="" element={<AdminProducts />} />
          <Route path="Coupons" element={<AdminCoupons />} />
          <Route path="Orders" element={<AdminOrders />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
