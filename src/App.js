import UsersList from "./components/UsersList";
import NavBar from "./components/AppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import PrivateRoute from "./utils/PrivateRoute";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <NavBar />
                <UsersList />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
