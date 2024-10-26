import Hero from "@/components/Hero";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex items-center justify-center flex-col text-white overflow-hidden mx-auto sm:px-10 px-5">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:top-20 h-screen fill-white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw] fill-purple-500 " />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] fill-blue-600" />
        <Hero />
      </div>
    </main>
  );
}
