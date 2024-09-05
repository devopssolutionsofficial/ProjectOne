import { dataAnime } from "@/data";
import Image from "next/image";

export default function page() {
  return (
    <main className="max-w-5xl mx-auto grid grid-cols-8">
      {dataAnime.map((data) => (
        <div key={data.id} className="mb-8">
          <Image src={data.image} alt={data.alt} width={400} height={400} />
        </div>
      ))}
    </main>
  );
}
