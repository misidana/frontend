import CardsGradient from "@/components/CardsGradient";
import Navbar from "@/components/Navbar";
import StartBlock from "@/components/StartBlock";

export default async function Home() {
  return (
    <main className='bg-gray-900'>
      <Navbar />
      <div className='max-w-screen-xl px-4 mx-auto'>
        <StartBlock />
        <CardsGradient />
      </div>
    </main>
  );
}
