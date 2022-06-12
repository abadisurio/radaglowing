import { useState } from 'react'

const useCart = (child) => {

    const [productList, setProductList] = useState([])

    const addProduct = (id) => {
        console.log('id', id)
        setProductList(prev => [...prev, id])
    }
    const removeProduct = (id) => {
        setProductList(productList.filter(item => item.id !== id))
    }

    return { productList, addProduct, removeProduct }
    // return <child 
}

export default useCart