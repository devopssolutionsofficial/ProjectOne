"use client";
import Image from "next/image";
import AddShow from "../addshow/AddShow";
import BtnUser from "../btnuser/BtnUser";

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between mx-5">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="business image"
          className="m-3"
        />

        <div className="flex gap-3 items-center">
          <AddShow />

          <div className="hidden lg:block">
            <BtnUser />
          </div>
        </div>
      </div>
    </header>
  );
}
