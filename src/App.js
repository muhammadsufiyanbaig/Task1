import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Nopage from "./pages/Nopage";
import Mens from "./pages/Men";
import Womens from "./pages/Women";
import Electronics from "./pages/Electronics";
import Jewelery from "./pages/Jewelery";
import Details from "./pages/Details";
import Footer from "./pages/Footer";
import All from './pages/All'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="details" element={<Details />} />
          <Route path="/product" element={<Product />}>
            <Route index element={<All />}></Route>
            <Route path="all" element={<All/>}/>
            <Route path=":id" element={<Details />} />
            <Route path="mens" element={<Mens />} />
            <Route path="mens/:id" element={<Details />} />
            <Route path="womens" element={<Womens />} />
            <Route path="womens/:id" element={<Details />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="electronics/:id" element={<Details />} />
            <Route path="jewelery" element={<Jewelery />} />
            <Route path="jewelery/:id" element={<Details />} />
          </Route>
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}
