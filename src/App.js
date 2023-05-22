// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Science from "./Science";
import Sport from "./Sport";
import Home from "./Home";
import Business from "./Business";
import Tech from "./Tech";
import Nav from "./Nav";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route> */}
          <Route path="/business" element={<Business />} />
          <Route path="/science" element={<Science />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/sport" element={<Sport />} />
          {/* <Route path="/sign-in" element={<SignIn />} /> */}
          {/* <Route path="/sign-up" element={<SignUp />} /> */}
          {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        </Routes>
        <Footer/>
      </Router>
      {/* <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
    </div>
     );
}

export default App;
