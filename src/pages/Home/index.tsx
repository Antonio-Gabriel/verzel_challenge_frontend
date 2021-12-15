import { Categories } from "../../components/Categories";
import { Hero } from "../../components/Hero";
import { Footer } from "../../layout/Footer";
import { Header } from "../../layout/Header";

export function Home(){
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Footer />
    </>
  );
}