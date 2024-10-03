import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ContextPage from "./pages/ContextPage";
import { CounterProvider } from "./CounterContext";

export default function App() {
  return (
    <div className="col-12 App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="login" element={<CounterProvider><LoginPage /></CounterProvider>} />
            <Route path="context" element={<CounterProvider><ContextPage /></CounterProvider>} />
            <Route path="*" element={<h1>404 Page Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
