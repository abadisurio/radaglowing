import { CodeIcon } from '@heroicons/react/solid'
import React, { useEffect } from 'react'

const About = () => {
    useEffect(() => {
        document.title += " - About"
        return () => { document.title = "Rada Glow" }
    }, [])

    return (
        <div className='h-screen justify-center flex'>
            <div className='text-center p-5 self-center'>
                <h1 className="text-5xl racking-tight font-extrabold text-gray-900 sm:text-5xl md:text-7xl mb-10">
                    <span className="block xl:inline">This is </span>
                    <span className="block text-indigo-600 xl:inline">Rada Glow </span>
                    <span className="block xl:inline">team</span>
                </h1>
                {/* <p className="mt-3 text-xl text-gray-500 w-96 text-center mx-auto">
                    Pesananmu akan kami proses
                </p> */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-5">
                    <div className="p-5">
                        <div className="mx-auto inline-block ring-white rounded-full h-36 w-36 overflow-hidden flex justify-center bg-gradient-to-b from-indigo-500 to-violet-300">
                            <img class="object-cover" src={require('../asset/image/Abadi.png')} alt="Foto Abadi" />
                        </div>
                        <h1 className='mt-3 mb-0 text-xl font-bold text-slate-700'>Abadi Suryo</h1>
                        <h1 className='text-lg font-bold text-slate-400'>Code</h1>
                    </div>
                    <div className="p-5">
                        <div className="mx-auto inline-block ring-white rounded-full h-36 w-36 overflow-hidden flex justify-center bg-gradient-to-b from-orange-500 to-amber-400">
                            <img class="object-cover contrast-200 brightness-0" src={require('../asset/image/Daviadi.png')} alt="Foto Arosochi" />
                        </div>
                        <h1 className='mt-3 mb-0 text-xl font-bold text-slate-700'>Arosochi Yosua D.</h1>
                        <h1 className='text-lg font-bold text-slate-400'>Product</h1>
                    </div>
                    <div className="p-5">
                        <div className="mx-auto inline-block ring-white rounded-full h-36 w-36 overflow-hidden flex justify-center bg-gradient-to-b from-rose-600 to-fuchsia-500">
                            <img class="object-cover" src={require('../asset/image/Daviadi.png')} alt="Foto Daviadi" />
                        </div>
                        <h1 className='mt-3 mb-0 text-xl font-bold text-slate-700'>Daviadi Auzan F.</h1>
                        <h1 className='text-lg font-bold text-slate-400'>Analytics</h1>
                    </div>
                    <div className="p-5">
                        <div className="mx-auto inline-block ring-white rounded-full h-36 w-36 overflow-hidden flex justify-center bg-gradient-to-b from-lime-600 to-yellow-300">
                            <img class="object-cover" src={require('../asset/image/Rahma.png')} alt="Foto Rahma" />
                        </div>
                        <h1 className='mt-3 mb-0 text-xl font-bold text-slate-700'>Rahma Nur Annisa</h1>
                        <h1 className='text-lg font-bold text-slate-400'>Design</h1>
                    </div>
                </div>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">

                    <div className="rounded-md shadow">
                        <a
                            href="https://github.com/abadisurio/radaglowing"
                            target={'_blank'}
                            rel="noreferrer"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                        >
                            <CodeIcon className='w-10 mr-5' />
                            Lihat Source Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About