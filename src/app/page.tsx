import Advstats from "./sections/advstats";
import Boost from "./sections/boost";
import Hero from "./sections/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center relative scroll-smooth overflow-x-hidden">
      <Hero />
      <Advstats />
      <Boost />
    </main>
  );
}
