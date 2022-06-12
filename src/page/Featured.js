import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const initialFeatured = [
    {
        "id": "",
        "title": "",
        "body": "",
        "productListId": ""
    }
]

const FeaturedPage = () => {

    let { id } = useParams();

    const [isLoading, setLoading] = useState(true)
    const [featuredDetail, setFeaturedDetail] = useState(initialFeatured)
    const [productCollection, setProductCollection] = useState()

    useEffect(() => {
        const featuredCollection = require('../utils/featured.json')
        const featuredDetail = featuredCollection.filter(item => String(item.id) === String(id))[0]
        // console.log('featuredDetail', featuredDetail)
        const productCollection = require('../utils/products.json')
        setLoading(false)
        setFeaturedDetail(featuredDetail)
        setProductCollection(productCollection)
        document.title += " - " + featuredDetail.title
        return () => { document.title = "Rada Glow" }
    }, [isLoading, id])

    const recommendationId = featuredDetail.productListId ? featuredDetail.productListId.split(", ") : []

    return (
        <div>
            <div className="relative bg-white overflow-hidden">
                <div className=" py-16">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                        <div className="sm:max-w-lg">
                            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                                {featuredDetail.title}
                            </h1>
                            <p className="mt-4 text-xl text-gray-500">
                                {featuredDetail.body}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Rada Glow Pick</h2>

                    <div className="mt-6 grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-4 lg:grid-cols-6 xl:gap-x-8">
                        {isLoading
                            ? <h1>isLoading</h1>
                            : recommendationId.length === 0
                                ? null
                                : recommendationId.map((productId) => {
                                    const product = productCollection.filter(item => String(item.id) === String(productId))[0]
                                    console.log('product', product)
                                    return (
                                        <div key={product.id} className="group relative">
                                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                                <img
                                                    src={product.photo_1}
                                                    alt={product.imageAlt}
                                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                                />
                                            </div>
                                            <div className="mt-4 flex justify-between">
                                                <div>
                                                    <h3 className="text-sm text-gray-700">
                                                        <Link to={`/product/${product.id}`}>
                                                            <span aria-hidden="true" className="absolute inset-0" />
                                                            {product.name}
                                                        </Link>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                        <div className="group relative h-full">
                            <div className="w-full h-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">

                                <Link
                                    to="/explore"
                                    className="w-full h-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                >
                                    Lihat produk lainnya
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPage