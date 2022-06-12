import { ShoppingBagIcon, EmojiHappyIcon } from '@heroicons/react/outline'
import React from 'react'
import { Link } from 'react-router-dom'


const CheckedOut = () => {
    return (
        <div className='h-screen justify-center flex'>
            <div className='text-center p-5 self-center'>
                <div className="flex text-blue-700 justify-center">
                    <ShoppingBagIcon />
                    <EmojiHappyIcon />
                </div>
                <h1 className="text-5xl flex flex-col racking-tight font-extrabold text-gray-900 sm:text-5xl md:text-7xl">
                    <p className="block xl:inline">Terima kasih</p>
                    <p className="block text-indigo-600 xl:inline">sudah berbelanja</p>
                </h1>
                <p className="mt-3 text-xl text-gray-500 w-96 text-center mx-auto">
                    Pesananmu akan kami proses
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">

                    <div className="rounded-md shadow">
                        <Link
                            to="/explore"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                        >
                            Lihat produk kami yang lain
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckedOut