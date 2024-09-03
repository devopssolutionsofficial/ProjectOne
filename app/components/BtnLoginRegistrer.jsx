import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { dataUser } from '@/data'
import { CircleUserIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function BtnLoginRegistrer() {
    return (
        <div className="block lg:hidden">
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
    )
}
