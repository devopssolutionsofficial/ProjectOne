import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { dataUser } from "@/data";
import { CircleUserIcon } from "lucide-react";

export default function BtnUser() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <CircleUserIcon size={40} className="cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup>
          {dataUser.map((data) => (
            <div
              key={data.id}
              className="mb-2 transition rounded-md hover:bg-slate-200 font-semibold"
            >
              <Link href={data.href} className="w-full px-4">
                {data.label}
              </Link>
            </div>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
