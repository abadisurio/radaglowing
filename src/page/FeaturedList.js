import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const initialFeaturedList = [{
    "id": 0,
    "title": "Suplemen untuk Pagi Hari",
    "body": "Baca deh",
    "productListId": "2, 4, 7, 9"
}]

const FeaturedListPage = () => {

    const [isLoading, setLoading] = useState(true)
    const [featuredCollection, setFeaturedCollection] = useState(initialFeaturedList)

    useEffect(() => {
        const featuredCollection = require('../utils/featured.json')
        console.log('featuredCollection', featuredCollection)
        setFeaturedCollection(featuredCollection)
        setLoading(false)
        document.title += " - Featured"
        return () => { document.title = "Rada Glow" }
    }, [isLoading])

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Your recommendation</h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {isLoading
                        ? <h1>isLoading</h1>
                        : featuredCollection.map((featured) => {
                            return (

                                <div key={featured.id} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <Link to={"/featured/" + featured.id}>
                                        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                                    </Link>
                                    <div className="p-5">
                                        <Link to={"/featured/" + featured.id}>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{featured.title}</h5>

                                        </Link>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">{featured.body}</p>
                                        <Link to={"/featured/" + featured.id} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Read more
                                            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedListPage