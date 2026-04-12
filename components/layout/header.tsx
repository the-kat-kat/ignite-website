import Link from "next/link";
import HCFlag from "@/components/ui/hc-flag";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full">
            <div className=" border-white/10 border-b h-100 flex items-center justify-between px-5">
                <div>
                    <HCFlag />
                </div>


                <ul className="flex items-center gap-3">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}