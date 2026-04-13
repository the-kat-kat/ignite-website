"use client";
import Image from "next/image";
import HCFlag from "@/components/ui/hc-flag";
import { useState, useEffect } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);

        }
    })

    return (
        <header className={'sticky top-0 z-100 w-full duration-300 transition-all ease-in-out ' + (isScrolled ? 'bg-white/50 backdrop-blur-md' : 'bg-transparent')}>
            <div className=" h-20 grid grid-cols-3 items-center px-5">
                <div className="relative h-full flex items-center">
                    <div className="absolute top-0">

                    </div>
                </div>

                <div
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex justify-center items-center text-3xl text-brand-secondary font-display hover:scale-125 active:scale-95 transition-all ease-in-out">
                    <Image
                        src="/ignite-icon.svg"
                        alt="iconn"
                        width={64}
                        height={64}
                        className="object-contain"
                    />

                    <span>ignite</span>
                </div>


            <div className="flex justify-end items-center gap-6">
                <button className=
                {'pointer-events-auto px-4 py-2 bg-brand-primary text-white text-md font-bold rounded-xl hover:scale-120 active:scale-90 transition-all shadow-[0px_5px_0px_0px_var(--brand-secondary)] ' +
                 (isScrolled ? 'opacity-100 pointer-event-auto' : 'opacity-0 pointer-event-none')}>
                    Get Started
                </button>
            </div>
            </div>
        </header>
    )
}