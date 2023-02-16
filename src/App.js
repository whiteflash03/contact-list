import UsersList from "./components/UsersList";
import NavBar from "./components/AppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import PrivateRoute from "./privateRoute/PrivateRoute";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <UsersList />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
