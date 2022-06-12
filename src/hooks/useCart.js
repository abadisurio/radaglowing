import { useState } from 'react'

const useCart = (child) => {

    const [productList, setProductList] = useState([])

    const addProduct = (id) => {
        // console.log('id', id)
        setProductList(prev => [...prev, id])
    }
    const removeProduct = (index) => {
        const newList = productList.filter((item, index2) => index2 !== index)
        setProductList(newList)
        // console.log('product removed')
    }

    return { productList, addProduct, removeProduct }
    // return <child 
}

export default useCart