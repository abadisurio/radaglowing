import React, { useEffect } from 'react'
import ProductCollection from '../component/ProductCollection'

const ExplorePage = () => {
    useEffect(() => {
        document.title += " - Explore"
        return () => { document.title = "Rada Glow" }
    }, [])
    return (
        <ProductCollection />
    )
}

export default ExplorePage