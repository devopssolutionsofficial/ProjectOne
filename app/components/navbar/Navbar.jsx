import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

import Sidebar from '../sidebar/Sidebar'
import { Menu } from "lucide-react"
import Header from "../header/Header"


export default function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full h-20 border-b gap-x-4 px-2 md:px-6 bg-background">

            <Header />

            <div className="block xl:hidden">
                <Sheet>
                    <SheetTrigger className="flex items-center">
                        <Menu size={35} />
                    </SheetTrigger>
                    <SheetContent side={"left"}>
                        <Sidebar />
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}
