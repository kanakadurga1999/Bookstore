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
import PostPage from "./pages/PostPage";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./pages/Search";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";

const App = () => {
  return (
    

    <BrowserRouter >
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path='/search' element={<Search />} />
      
      <Route element={<PrivateRoute />}>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/create-listing" element={<CreateListing/>} />
      <Route path="/update-listing/:listingId" element={<UpdateListing />} />
      <Route path="/listing/:listingId" element={<Listing />} />
      </Route>
      <Route element={<OnlyAdminPrivateRoute />}>
      <Route path="/create-post" element={<CreatePost/>} />
      <Route path='/update-post/:postId' element={<UpdatePost />} />
      </Route>
      
      
      
      <Route path='/post/:postSlug' element={<PostPage />} />
      <Route path="/search" element={<Books/>} />
    </Routes>
    
    </BrowserRouter>
  );
};

export default App;