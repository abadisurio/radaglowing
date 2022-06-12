import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const initialProductList = [
    {
        "id": "",
        "name": "",
        "price": "",
        "photo_1": ""
    }
]

const Cart = () => {

    const navigate = useNavigate();

    const cart = useContext(CartContext)
    const [open, setOpen] = useState(false)
    const [finalCart, setFinalCart] = useState(initialProductList)
    const [finalPrice, setFinalPrice] = useState(0)

    const location = useLocation()
    const [prevPath, setPrevPath] = useState("")

    const closeCart = () => {

        setOpen(false)
        setTimeout(() => {
            navigate(prevPath)
        }, 500)
    }

    const removeProduct = (id) => {
        // console.log('id', id)
        cart.removeProduct(id)
    }

    useEffect(() => {
        setOpen(true)
        // const cart = cart
        // console.log('cart', cart)
        // console.log('test')

    }, [cart])

    const [isLoading, setLoading] = useState(true)
    const [productCollection, setProductCollection] = useState(initialProductList)

    useEffect(() => {
        const product = require('../utils/products.json')
        // console.log('product', cart)
        setLoading(false)
        setProductCollection(product)
        const finalCart = cart.productList.map((id, index) => ({ ...productCollection.filter(item => item.id === id)[0] }))
        setFinalCart(finalCart)
        // console.log('finalPrice', finalPrice)
        // setFinalPrice(currencyPrice)
    }, [isLoading, productCollection, cart])

    useEffect(() => {
        // console.log('e', location)
        setPrevPath(location.state.background.pathname)

    }, [location])

    useEffect(() => {
        // console.log('finalCart', finalCart)
        const finalPrice = (finalCart).reduce((prev, current) => {
            // console.log('prev.price', prev)
            // console.log('current', current.price)
            return prev + current.price
        }, 0)
        const currencyPrice = Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(finalPrice);
        // console.log('currencyPrice', currencyPrice)
        setFinalPrice(currencyPrice)

    }, [finalCart])

    // console.log('finalPrice', finalPrice)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeCart}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900"> Shopping cart </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={closeCart}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    <ul className="-my-6 divide-y divide-gray-200">

                                                        {finalCart.map((product, index) => {
                                                            const price = Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price);
                                                            return (
                                                                <li key={product.id + index} className="flex py-6">
                                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                        <img
                                                                            src={product.photo_1}
                                                                            alt={"this is Alt"}
                                                                            className="h-full w-full object-cover object-center"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-4 flex flex-1 flex-col">
                                                                        <div>
                                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                <h3>
                                                                                    <a href={product.href}> {product.name} </a>
                                                                                </h3>
                                                                                <p className="ml-4">{price}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                                            {/* <p className="text-gray-500">Qty {product.quantity}</p> */}

                                                                            <div className="flex">
                                                                                <button
                                                                                    type="button"
                                                                                    onClick={() => removeProduct(index)}
                                                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                                >
                                                                                    Remove
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <p>Subtotal</p>
                                                <p>{finalPrice}</p>
                                            </div>
                                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                            <div className="mt-6">
                                                <Link
                                                    to="/"
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                >
                                                    Checkout
                                                </Link>
                                            </div>
                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                <p>
                                                    or{' '}
                                                    <button
                                                        type="button"
                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        Continue Shopping<span aria-hidden="true"> &rarr;</span>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Cart