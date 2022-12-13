import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";
import Four from "./pages/Four";
import Five from "./pages/Five";
import Faq from "./pages/Faq";
function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/One"
              element={user ? <One /> : <Navigate to="/One" />}
            />

            <Route
              path="/One"
              element={!user ? <One /> : <Navigate to="/" />}
            />

            <Route
              path="/Two"
              element={user ? <Two /> : <Navigate to="/Two" />}
            />

            <Route
              path="/Two"
              element={!user ? <Two /> : <Navigate to="/login" />}
            />
            <Route
              path="/Three"
              element={user ? <Three /> : <Navigate to="/Three" />}
            />
            <Route
              path="/Four"
              element={user ? <Four /> : <Navigate to="/Four" />}
            />

            <Route
              path="/Five"
              element={user ? <Five /> : <Navigate to="/Five" />}
            />

            <Route
              path="/Faq"
              element={user ? <Faq /> : <Navigate to="/Faq" />}
            />

            {/* If the user is not logged in */}
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
