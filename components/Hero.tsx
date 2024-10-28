import React from 'react'
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { Spotlight } from "@/components/ui/Spotlight";

const heroSection = () => {
  return (
    <div className=' pb-20 pt-36'>
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:top-20 h-scree " fill="white" />
        <Spotlight className="top-8 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex justify-center my-20">
        <div className=" max-w-[100vw] md:max-w-4xl flex flex-col items-center justify-center z-10">
          {/* <h2 className=' uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 '>
            Dynamic Web Magic With Next.js
          </h2> */}
          <TextGenerateEffect className="py-7 text-center text-[40px] md:text-5xl lg:text-6xl " words="Tansforming Ideas Into Reality." />

          <p className=" text-center md:trackint-wider mb-4 text-sm lg:text-2xl">
            Hi, I am Dilip Patnana.
          </p>
          <a href='#about'>
            <MagicButton title='More About Me' icon={<FaLocationArrow />} position='right' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default heroSection 