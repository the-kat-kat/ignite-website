"use client";
import Link from "next/link";
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
        <header className="sticky top-0 z-50 w-full">
            <div className=" border-white/10 border-b h-20 grid grid-cols-3 items-center px-5 bg-red-200">
                <div className="relative h-full flex items-center">
                    <div className="absolute top-0 left-0">
                        <HCFlag />
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    ignite
                </div>


                <div className="flex justify-end items-center gap-6">
                    get started
                </div>
            </div>
        </header>
    )
}