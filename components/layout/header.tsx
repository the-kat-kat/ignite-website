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
        <header className="sticky top-0 z-100 w-full">
            <div className=" border-white/10 border-b h-20 grid grid-cols-3 items-center px-5">
                <div className="relative h-full flex items-center">
                    <div className="absolute top-0 left-[15%]">
                        <HCFlag />
                    </div>
                </div>

                <div
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex justify-center items-center text-3xl text-brand-secondary font-display hover:scale-125 active:scale-95 transition-all ease-in-out">
                    <Image
                        src="../public/ignite-icon.svg"
                        alt="iconn"
                        width={32}
                        height={32}
                        className="object-contain"
                    />

                    <span>ignite</span>
                </div>


                <div className="flex justify-end items-center gap-6">
                    get started
                </div>
            </div>
        </header>
    )
}