import React from 'react'
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const heroSection = () => {
  return (
    <div className=' pb-20 pt-36'>
      <div className="flex justify-center my-20">
        <div className=" max-w-[100vw] md:max-w-4xl flex flex-col items-center justify-center z-10">
          {/* <h2 className=' uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 '>
            Dynamic Web Magic With Next.js
          </h2> */}
          <TextGenerateEffect className="py-7 text-center text-[40px] md:text-5xl lg:text-6xl " words="Tansforming Ideas into Seamless User Experience." />

          <p className=" text-center md:trackint-wider mb-4 text-sm lg:text-2xl">
            Hi, I am Dilip Patnana.
          </p>
          <a href='#about'>
            <MagicButton title='More About Me' icon = {<FaLocationArrow/>} position='right'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default heroSection 