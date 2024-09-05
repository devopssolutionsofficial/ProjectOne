import { Outfit } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar/Sidebar";

import Navbar from "./components/navbar/Navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Wiki",
  description: "Wiki by Devops Solution Official",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={outfit.className}>
        <div className="flex w-full h-full">
          <div className="hidden xl:block h-full w-80 xl:fixed">
            <Sidebar />
          </div>
          <div className="w-full h-full xl:ml-80">
            <Navbar />
            <div className="p-0 md:p-4 h-fit">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
