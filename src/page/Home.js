import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div class="grid lg:grid-cols-2 gap-0 h-screen">
            <div class="bg-cover bg-center h-full" style={{ backgroundImage: "url(https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}></div>
            <div className='h-full justify-center flex'>
                <div className='sm:text-center lg:text-left p-5 self-center'>
                    <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-7xl">
                        <span className="block xl:inline">Skin Care</span>{' '}
                        <span className="block text-indigo-600 xl:inline">khusus buat kamu si paling <span className='underline'>kere</span></span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        Boleh dilihat-lihat dulu kakak produk yang kami tawarkan<br /><br />
                        "Saya sudah langganan dari dulu pasti beli skin care di sini" - Wanda Maximoff
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">

                        <div className="rounded-md shadow">
                            <Link
                                to="/explore"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                            >
                                Jelajahi koleksi
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home