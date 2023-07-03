import "./stylesheets/text-elements.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/custom-components.css";
import "./stylesheets/alignments.css";
import "./stylesheets/theme.css";
import "./stylesheets/layout.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
          
                <Login />
     
            }
          />
          <Route
            path="/register"
            element={
    
                <Register />
   
            }
          />
           <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
   
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;