import Navbar from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main1";
import Footer from "../components/Footer";
import { useState } from "react";
export default function Home() {

  const [inputValue, setInputValue] = useState("");
  const [setIsListVisible] = useState(false);


  return (
    <>
      <Navbar />

      <Hero
        inputValue={inputValue}
        setInputValue={setInputValue}
        setIsListVisible={setIsListVisible}
      />


      <Footer />

    </>
  );
}





