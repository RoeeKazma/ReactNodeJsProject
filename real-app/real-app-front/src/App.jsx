import EditCard from "./components/editCard";
import Footer from "./components/footer";

import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/signup";
import SignIn from "./components/signin";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SignOut from "./components/signout";
import SignUpBiz from "./components/signupBiz";
import MyCards from "./components/myCards";
import CreateCard from "./components/createCard";
import ProtectedRoute from "./components/common/protectedRoute";
import DeleteCard from "./components/deleteCard";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <ToastContainer />
      <header>
        <Navbar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="my-cards/delete/:id"
            element={
              <ProtectedRoute bizOnly>
                <DeleteCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="my-cards/edit/:id"
            element={
              <ProtectedRoute bizOnly>
                <EditCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="my-cards/create-card"
            element={
              <ProtectedRoute bizOnly>
                <CreateCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="my-cards"
            element={
              <ProtectedRoute bizOnly>
                <MyCards />
              </ProtectedRoute>
            }
          />
          <Route
            path="signubiz"
            element={<SignUpBiz redirect="/my-cards/create-card" />}
          />
          <Route path="signup" element={<SignUp redirect="/signin" />} />
          <Route path="signin" element={<SignIn redirect="/" />} />
          <Route path="signout" element={<SignOut redirect="/" />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
