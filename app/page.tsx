import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Calls from "@/components/Calls";
import CardsBorder from "@/components/CardsBorder";
import CardsGradient from "@/components/CardsGradient";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import HowToDo from "@/components/HowToDo";
import Navbar from "@/components/Navbar";
import StartBlock from "@/components/StartBlock";
import Welcome from "@/components/Welcome";

export default async function Home() {
  return (
    <main className='bg-gray-900'>
      <Navbar />
      <div className='max-w-screen-xl px-4 mx-auto'>
        <StartBlock />
        <CardsGradient />
        <About />
      </div>
      <Calls />
      <div className='bg-gray-800'>
        <div className='max-w-screen-xl px-4 mx-auto'>
          <Welcome />
          <CardsBorder />
        </div>
      </div>
      <div className='bg-gray-900'>
        <div className='max-w-screen-xl px-4 mx-auto'>
          <HowToDo />
          <Faq />
        </div>
      </div>
      <Footer />
      <BackToTop />
    </main>
  );
}
