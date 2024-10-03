import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
export default function App() {
  return (
    <div className="App col-12">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<h1>Home Page</h1>} />
            <Route path="about" element={<AboutPage />} />
            <Route path="shop">
              <Route index element={<ShopPage />} />
              <Route path=":id" element={<ProductPage />} />
              <Route path="men" element={<h1>Men Page</h1>} />
              <Route path="women" element={<h1>Women Page</h1>} />
              <Route path="pc" element={<h1>Pc Page</h1>} />
              <Route path="phones" element={<h1>Phones Page</h1>} />
            </Route>
            <Route path="*" element={<h1>Pahe 404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
