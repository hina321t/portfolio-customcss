import Image from "next/image";
import styles from "./page.module.css";
import About from "@/components/About"
// import Cards from "@/components/Cards"
import Contect from "@/components/Contect";
// import Heading from "@/components/Heading";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";

export default function Home() {
  return (
<div>
  <About/>
  {/* <Cards/> */}
  <Contect/>
  {/* <Heading/> */}
  <Hero/>
  <Navbar/>
  <Project/>
  <Footer/>
  <Skills/>

</div>
  )
}
