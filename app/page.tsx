"use client";
import Image from 'next/image';
import EyeTracker from '@/components/ui/eye-tracker';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-20 md:pt-32 overflow-x-hidden">

      <div className="z-0 absolute inset-0 items-center -translate-y-1/12 -translate-x-1/4 w-[200%] h-full md:w-full md:-translate-y-1/2 md:translate-x-1/4 md:pt-[20vh]">
        <EyeTracker />
      </div>

      <div className="z-50 grid flex-col justify-items-center pointer-events-none">

        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center w-full ">

          <div className="items-center justify-center flex flex-col gap-4 md:gap-8 order-2 lg:order-1">
            <div className="leading-relaxed text-4xl text-foreground md:text-6xl text-center font-display">
              <p>
                Code 3 projects, <br /> Earn a <span className="bg-brand-accent px-2 rounded-xl">personal computer!</span>
              </p>
            </div>
            <button className="pointer-events-auto px-8 md:px-16 py-2 md:py-4 bg-white
             text-brand-primary text-xl md:text-6xl font-bold rounded-4xl hover:scale-120
              active:scale-95 transition-all">
              Get Started
            </button>
          </div>

          <div className="h-[53vh] md:h-96 w-96 order-1 lg:order-2">
            {/*space for eye tracker */}
          </div>
        </div>

        {/* ok thats the end of the first part */}
        <div className="relative w-full md:mt-96 py-24 md:h-64 flex justify-center items-center">
          <div className="z-0 absolute inset-0 -translate-x-1/4 -translate-y-1/8
                    w-[150vw] h-32 md:h-64 bg-brand-accent 
                    rotate-2 md:rotate-[5deg] pointer-events-none" />

          <div className="z-50 flex px-16 justify-center text-center text-xl text-brand-primary items-cente rotate-2 md:rotate-[5deg]">
            <div className="grid grid-cols-[1fr_2fr] font-bold md:text-6xl mb-4">
              <div className="text-4xl">
                <p>
                  Is this real? <br/> What is Hack Club?
                </p>
              </div>

              <div className="text-xl text-center">
                <p>
                  Hack Club is the world&apos;s largest community of teenage makers, and a 501(c)(3) nonprofit! <br />
                  Hack Club is supported by donations from tech companies like GitHub and individuals like Michael Dell. Hack Club is fiscally transparent.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ok how it works*/}
      </div>
    </main>
  );
}