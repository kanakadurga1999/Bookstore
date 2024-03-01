import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";

const App = () => {
  return (
    // <main className='relative'>
    //   <Nav />
    //   <section className='xl:padding-l wide:padding-r padding-b'>
    //     <Hero />
    //   </section>
    //   <section className='padding'>
    //     <PopularProducts />
    //   </section>
    //   <section className='padding'>
    //     <SuperQuality />
    //   </section>
    //   <section className='padding-x py-10'>
    //     <Services />
    //   </section>
    //   <section className='padding'>
    //     <SpecialOffer />
    //   </section>
    //   <section className='bg-pale-blue padding'>
    //     <CustomerReviews />
    //   </section>
    //   <section className='padding-x sm:py-32 py-16 w-full'>
    //     <Subscribe />
    //   </section>
    //   <section className=' bg-black padding-x padding-t pb-8'>
    //     <Footer />
    //   </section>
    // </main>

    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/books" element={<Books/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/signin" element={<SignUp/>} />
    
    </Routes>
    </BrowserRouter>
  );
};

export default App;