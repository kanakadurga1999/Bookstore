import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Nav from "./components/Nav";

import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";

const App = () => {
  return (
    

    <BrowserRouter >
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/books" element={<Books/>} />
      <Route element={<PrivateRoute />}>
      <Route path="/dashboard" element={<Dashboard/>} />
      </Route>
      <Route element={<OnlyAdminPrivateRoute />}>
      <Route path="/create-post" element={<CreatePost/>} />
      <Route path='/update-post/:postId' element={<UpdatePost />} />
      </Route>
      
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      
    
    </Routes>
    
    </BrowserRouter>
  );
};

export default App;