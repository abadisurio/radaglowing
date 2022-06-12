import { StarIcon } from '@heroicons/react/solid'

import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
// import useCart from '../hooks/useCart'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const initialDetail = {
    "id": '',
    "name": '',
    "caption": '',
    "price": '',
    "discount_price": '',
    "rating": '',
    "rating_count": '',
    "photo_1": '',
    "photo_2": '',
    "photo_3": '',
    "photo_4": ''
}


const ProductPage = () => {
    const cart = useContext(CartContext)
    const [isLoading, setLoading] = useState(true)
    const [productDetail, setProductDetail] = useState(initialDetail)
    const [showAlert, setShowAlert] = useState(false)
    // const cart = useCart()

    let { id } = useParams();

    useEffect(() => {
        const productCollection = require('../utils/products.json')
        // console.log('id', id)
        // console.log('productCollection', productCollection)
        setLoading(false)
        const productDetail = productCollection.filter(item => String(item.id) === String(id))[0]
        // console.log('productDetail', productDetail)
        setProductDetail(productDetail)
        document.title += " - " + productDetail.name

        return () => { document.title = "Rada Glow" }
    }, [isLoading, id])

    const doShowAlert = () => {
        setShowAlert(true)
        return setTimeout(() => {
            setShowAlert(false)
        }, 1000)
    }

    const addToCart = (e) => {
        // console.log('e', e)
        console.log('cart', cart)
        cart.addProduct(e.target.name)
        doShowAlert()
        e.preventDefault()
    }

    return (
        <div className="bg-white">
            <div className="pt-6 ">
                {isLoading ? <h1>Loading</h1> : (
                    <>
                        {/* Image gallery */}
                        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                            <div className=" aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                                <img
                                    src={productDetail.photo_1}
                                    alt=''
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <div className=" lg:grid lg:grid-cols-1 lg:gap-y-8">
                                {productDetail.photo_2 !== '' && (<div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                                    <img
                                        src={productDetail.photo_2}
                                        alt=''
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>)}
                                {productDetail.photo_3 !== '' && (<div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                                    <img
                                        src={productDetail.photo_3}
                                        alt=''
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>)}
                            </div>
                            {productDetail.photo_4 !== '' && (<div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                                <img
                                    src={productDetail.photo_4}
                                    alt=''
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>)}
                        </div>

                        {/* Product info */}
                        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{productDetail.name}</h1>
                            </div>

                            {/* Options */}
                            <div className="mt-4 lg:mt-0 lg:row-span-3">
                                <h2 className="sr-only">Product information</h2>
                                <p className="text-3xl text-gray-900">{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(productDetail.price)}</p>
                                {/* Reviews */}
                                <div className="mt-6">
                                    <h3 className="sr-only">Reviews</h3>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    className={classNames(
                                                        productDetail.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                                        'h-5 w-5 flex-shrink-0'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>
                                        <p className="sr-only">{productDetail.rating} out of 5 stars</p>
                                        <span>{productDetail.rating}</span>
                                        <span className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                            {productDetail.rating_count} reviews
                                        </span>
                                    </div>
                                </div>
                                <form className="mt-10">
                                    <button
                                        onClick={addToCart}
                                        name={productDetail.id}
                                        className=" w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Tambah ke Keranjang
                                    </button>
                                    {showAlert && (
                                        <div className="flex mt-3 justify-center text-white bg-gradient-to-r from-indigo-500 to-pink-500 rounded-md  p-3 ">
                                            <span>Produk ditambahkan ke keranjang</span>
                                        </div>
                                    )}
                                </form>
                            </div>

                            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                {/* Description and details */}
                                <div>
                                    <h3 className="sr-only">Description</h3>

                                    <div className="space-y-6">
                                        <p className="text-base text-gray-900" style={{ whiteSpace: "pre-line" }}>{productDetail.caption}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )

}

export default ProductPage
