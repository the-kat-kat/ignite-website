"use client";
import EyeTracker from '@/components/ui/eye-tracker';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">

      <div className="z-0 absolute inset-0 items-center justify center w-full">
        <EyeTracker />
      </div>

      <div className="z-50 grid grid-rows-2 justify-items-center pointer-events-none">
        <div className="grid grid-cols-2 justify-items-center items-center w-full ">
          <div className="text-5xl text-center font-display">
            Code 3 projects, <br /> Earn a personal computer!
          </div>
          <div className="h-200 w-200 ">
            {/*space for eye tracker */}
          </div>
        </div>

        <div className="h-20 bottom-0 left-0 w-full border-gray-200 py-4 z-50">
          <div className="flex justify-center text-center text-brand-primary items-center">
            <p>
            Hack Club is the world&apos;s largest community of teenage makers, and a 501(c)(3) nonprofit. <br />
            Hack Club is supported by donations from tech companies like GitHub and individuals like Michael Dell. Hack Club is fiscally transparent.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}