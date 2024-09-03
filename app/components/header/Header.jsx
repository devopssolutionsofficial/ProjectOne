
import { CircleUserIcon } from 'lucide-react'
import Image from 'next/image'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { dataUser } from '@/data'

export default function Header() {
    return (
        <header className='w-full'>
            <div className="flex items-center justify-between mx-5">
                <Image src="/logo.png" width={50} height={50} alt='business image' className='m-3' />

                <div className="hidden lg:block">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <CircleUserIcon size={40} className='cursor-pointer' />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-fit">
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup>

                                {dataUser.map((data) => (
                                    <div key={data.id} className='mb-2 transition rounded-md hover:bg-slate-200 font-semibold'>
                                        <Link href={data.href} className='w-full px-4'>{data.label}</Link>
                                    </div>
                                ))}

                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}
