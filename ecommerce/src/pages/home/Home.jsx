import React from "react";
import Anouncements from "../../components/Anouncements";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import Categorie from "../../components/Categorie";
import Products from "../../components/Products";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Anouncements />
      <Navbar />
      <Slider />
      <Categorie />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
