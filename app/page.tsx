import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { NavItems } from "@/Data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex items-center justify-center flex-col text-white overflow-hidden mx-auto sm:px-10 px-5">
      <FloatingNav navItems={NavItems}/>
      <div className=" w-screen">
        <Hero />
      </div> 
    </main>
  );
}
