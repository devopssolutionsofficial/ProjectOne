import Link from "next/link";

export default function PageRegister() {
    return (
        <>
            <div className='flex items-center justify-center min-h-screen bg-darkBg rounded-md w-full'>
                <form autoComplete='off' className='flex flex-col items-center bg-white/50 py-4 md:py-8 px-1 md:px-8 m-4 rounded-md'>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <h1 className='text-center text-4xl text-secondaryButton font-bold'>Registro de usuario</h1>
                    </div>

                    <div className=" flex flex-col gap-8 w-full p-8">
                        <div className="flex flex-col items-start w-full">
                            <label htmlFor="name" className='font-bold'>Nombre de usuario</label>
                            <input
                                type="text"
                                id="name"
                                name="user_name"
                                required
                                placeholder='Nombre'
                                className='p-2 rounded-lg my-3 px-3 text-black font-semibold focus:outline'
                            />
                        </div>

                        <div className="flex flex-col items-start w-full">
                            <label htmlFor="email" className='font-bold'>Email</label>
                            <input
                                type="email"
                                id="email"
                                name='user_email'
                                required
                                placeholder='ejemplo@gmail.com'
                                className='p-2 rounded-lg my-3 px-3 text-black font-semibold focus:outline'
                            />
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <label htmlFor="email" className='font-bold'>Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                name='pass'
                                required
                                placeholder='·$%"·$'
                                className='p-2 rounded-lg my-3 px-3 text-black font-semibold focus:outline'
                            />
                        </div>


                    </div>

                    <section className="mb-4">
                        <p>¿Yá tienes cuenta? <Link href="/login" className="font-bold underline cursor-pointer">Inicia Sesión aquí</Link> </p>
                    </section>
                    <button
                        type="submit" className='bg-slate-800 rounded-lg hover:bg-slate-700 text-white transition py-3 px-8 w-fit'>
                        Iniciar Sesión
                    </button>

                </form>
            </div></>
    )
}
