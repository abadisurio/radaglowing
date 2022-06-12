import { useState } from 'react'

const useCart = (child) => {

    const [productList, setProductList] = useState([])

    const addProduct = (id) => {
        console.log('id', id)
        setProductList(prev => [...prev, id])
    }

    return { productList, addProduct }
    // return <child 
}

export default useCart