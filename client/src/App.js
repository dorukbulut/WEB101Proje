import Index from "./pages/index.js";
import React from "react";
import SignInPage from "./pages/SignInPage"
import RegisterPage from "./pages/RegisterPage.js";
import MenteePage  from "./pages/MenteePage.js";
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/signin" element={<SignInPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/mentee" element={<MenteePage />}/>
      </Routes>
    </Router>
  );
}

export default App;
