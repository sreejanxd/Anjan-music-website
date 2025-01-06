import { Button } from "./ui/button";
import { Star } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
    return (
        <header className="flex justify-between items-center py-5 md:px-20 lg:px-28 px-6">
            <Logo />
            <div className="flex items-center justify-center gap-2">
                <div className="hidden md:block">
                    <Search />
                </div>
                <ModeToggle />
                <Button size="icon" asChild><Link href="https://wa.me/917439382677?text=❥◎⃝𝙎𝙍𝙀𝙀𝙅𝘼𝙉🩷🌸'༢༎" target="_blank"><Star className="h-4 w-4"/></Link></Button>
            </div>
        </header>
    )
}
