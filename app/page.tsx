import Hero from "@/components/Hero";
import { Spotlight } from "@/components/ui/Spotlight";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex items-center justify-center flex-col text-white overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" w-screen">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:top-20 h-scree " fill="white" />
        <Spotlight className="top-8 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        <Hero />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
    </main>
  );
}
