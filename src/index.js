import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import EmpresaScreen from "./pages/EmpresaScreen";
import Menu from "./components/Menu";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresas" element={<EmpresaScreen />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
