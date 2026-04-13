"use client";
import Image from 'next/image';
import Link from 'next/link';
import EyeTracker from '@/components/ui/eye-tracker';
import RiveAnim from '@/components/ui/rive-anim';

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
              active:scale-95 transition-all ease-in-out">
              Get Started
            </button>
          </div>

          <div className="h-[53vh] md:h-96 w-96 order-1 lg:order-2">
            {/*space for eye tracker */}
          </div>
        </div>

        {/* ok thats the end of the first part */}
        <div className="relative w-full md:mt-96 py-24 md:h-64 flex flex-col justify-start items-center">
          <div className="z-0 absolute inset-0 -translate-x-1/4
                    w-[150vw] h-32 md:h-64 bg-brand-accent 
                    rotate-2 md:rotate-[5deg] pointer-events-none" />

          <div className="z-50 flex px-16 justify-center text-center text-brand-secondary items-center rotate-2 md:rotate-[5deg]">
            <div className="grid grid-cols-[1fr_2fr] font-bold md:text-6xl mb-4 items-center">
              <div className="text-4xl r">
                <p>
                  Is this real? <br /> What is Hack Club?
                </p>
              </div>

              <div className="text-xl">
                <p>
                  Hack Club is of <span className="bg-white px-1 rounded-xl">the world&apos;s largest community of teenage makers</span>, and a 501(c)(3) nonprofit! <br />
                  Hack Club is supported by donations from tech companies like GitHub and individuals like Michael Dell.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ok how it works*/}
        <div className="relative w-full py-24 flex flex-col justify-start items-center">
          <div className="text-6xl text-white font-display">
            <p>
              How it works
            </p>
          </div>

          <div className="grid grid-cols-4 px-16 gap-8 mt-16 justify-center items-center text-brand-secondary font-bold text-center">
            {/* step 1 */}
            <div className="flex flex-col gap-4 items-center bg-white rounded-4xl ring-8 ring-white/40">
              <div className="pt-16 px-8">
                <p className="text-3xl pb-8">
                  1. Start coding <br /> a project
                </p>
                <p className="text-xl">
                  Beginner? Don&apos;t worry, we have lots of guides to get you started!
                </p>
              </div>
              <div>
                <RiveAnim src="/placeholder.riv" className="w-64 h-64" />
              </div>
            </div>


            {/* step 2 */}
            <div className="flex flex-col gap-4 items-center bg-white rounded-4xl ring-8 ring-white/40">
              <div className="pt-16 px-8">
                <p className="text-3xl pb-8">
                  1. Start coding <br /> a project
                </p>
                <p className="text-xl">
                  Beginner? Don&apos;t worry, we have lots of guides to get you started!
                </p>
              </div>
              <div>
                <RiveAnim src="/placeholder.riv" className="w-64 h-64" />
              </div>
            </div>

            {/* step 3 */}
            <div className="flex flex-col gap-4 items-center bg-white rounded-4xl ring-8 ring-white/40">
              <div className="pt-16 px-8">
                <p className="text-3xl pb-8">
                  1. Start coding <br /> a project
                </p>
                <p className="text-xl">
                  Beginner? Don&apos;t worry, we have lots of guides to get you started!
                </p>
              </div>
              <div>
                <RiveAnim src="/placeholder.riv" className="w-64 h-64" />
              </div>
            </div>

            {/* step 4 */}
            <div className="flex flex-col gap-4 items-center bg-white rounded-4xl ring-8 ring-white/40">
              <div className="pt-16 px-8">
                <p className="text-3xl pb-8">
                  1. Start coding <br /> a project
                </p>
                <p className="text-xl">
                  Beginner? Don&apos;t worry, we have lots of guides to get you started!
                </p>
              </div>
              <div>
                <RiveAnim src="/placeholder.riv" className="w-64 h-64" />
              </div>
            </div>
          </div>
        </div>

        {/*the goods*/}
        <div className="relative py-24 w-full flex flex-col justify-start items-center">
          <div className="z-0 absolute inset-0 -top-24">
            <Image
              src="/curve.svg"
              alt="the goods bg"
              fill
              className="object-cover object-top pointer-events-none"
            />
          </div>

          <div className="z-50 pt-64 text-black font-display text-center">
            <p className="text-6xl mb-4">
              Meet your new personal computer!?
            </p>
            <p className="text-xl">
              (All computers are refurbished, however free returns are offered)
            </p>
          </div>


          {/*computers*/}
          <div className="z-50 max-w-5xl flex flex-col gap-16 justify-center items-center">
              <Link
                href="https://www.backmarket.com/en-us/p/lenovo-100e-116-inch-amd-a4-9120c-4-gb-hdd-32-gb/ef382c91-4a88-4002-a20c-1825cb623fb8?l=12"
                target="_blank" 
                className="flex flex-col items-center -rotate-5 md:-rotate-[10deg] hover:scale-120
              active:scale-95 transition-all ease-in-out pointer-events-auto group"
              >
                <Image
                  src="/chromebook.png"
                  alt="pc 1"
                  width={500}
                  height={400}
                  className="object-cover rounded-2xl "
                />
                <p className="text-xl text-center text-black -mt-8">
                  Refurbished Lenovo Chromebook <br/> (32 GB storage, 4GB RAM)
                </p>
              </Link>

              <Link
                href="https://www.backmarket.com/en-us/p/lenovo-100e-116-inch-amd-a4-9120c-4-gb-hdd-32-gb/ef382c91-4a88-4002-a20c-1825cb623fb8?l=12"
                target="_blank" 
                className="flex flex-col items-center rotate-5 md:rotate-[10deg] hover:scale-120
              active:scale-95 transition-all ease-in-out pointer-events-auto group"
              >
                <Image
                  src="/chromebook.png"
                  alt="pc 1"
                  width={500}
                  height={400}
                  className="object-cover rounded-2xl "
                />
                <p className="text-xl text-center text-black -mt-8">
                  Refurbished Lenovo Chromebook <br/> (32 GB storage, 4GB RAM)
                </p>
              </Link>

              <Link
                href="https://www.backmarket.com/en-us/p/lenovo-100e-116-inch-amd-a4-9120c-4-gb-hdd-32-gb/ef382c91-4a88-4002-a20c-1825cb623fb8?l=12"
                target="_blank" 
                className="flex flex-col items-center -rotate-5 md:-rotate-[10deg] hover:scale-120
              active:scale-95 transition-all ease-in-out pointer-events-auto group"
              >
                <Image
                  src="/chromebook.png"
                  alt="pc 1"
                  width={500}
                  height={400}
                  className="object-cover rounded-2xl "
                />
                <p className="text-xl text-center text-black -mt-8">
                  Refurbished Lenovo Chromebook <br/> (32 GB storage, 4GB RAM)
                </p>
              </Link>
          </div>
        </div>

      </div>
    </main>
  );
}