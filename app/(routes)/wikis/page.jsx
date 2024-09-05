import { dataWikis } from '@/data'
import Image from 'next/image'

export default function page() {
  return (
    <main className='max-w-5xl mx-auto grid grid-cols-8 gap-4'>
      {dataWikis.map((data) => (
        <div key={data.id} className="mb-8 border">
          <Image src={data.img} alt={data.alt} width={500} height={500} />

        </div>
      ))}
    </main>
  )
}
