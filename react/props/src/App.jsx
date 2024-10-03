// useState , useEffect , useRef , useParams , useNavigate
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import ModePage from "./ModePage";
export default function App() {
  return (
    <div className="col-12">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="modes" element={<ModePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
