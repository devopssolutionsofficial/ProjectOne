import { dataSideBar } from '@/data'
import BtnLoginRegistrer from '../BtnLoginRegistrer'

export default function Sidebar() {
    return (

        <div className='flex flex-col justify-between h-full mt-6 md:mt-0'>
            <div className="">

                <header className='block md:hidden w-full border-b mt-4 p-3'>
                    <BtnLoginRegistrer />

                    <div className="hidden md:block">
                        <BtnLoginRegistrer />
                    </div>
                </header>

                <div className="p-2 md:p-6 flex flex-col mt-0 md:mt-[78px] ">
                    <p className='font-bold text-xl mb-2 text-center'>GENEROS</p>
                    {dataSideBar.map((data) => (
                        <div className='w-full' key={data.id}>
                            <div className="flex gap-2 flex-col w-full">
                                <section className='flex gap-2 p-4 transition hover:bg-slate-200 border mb-8 cursor-pointer rounded-lg'>
                                    {data.label}
                                    {data.icon}
                                </section>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}