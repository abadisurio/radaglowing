import React, { useEffect } from 'react'
import ProductCollection from '../component/ProductCollection'
import useGaTRacker from '../utils/useGaTRacker';

const ExplorePage = () => {
    const gaEventTracker = useGaTRacker('Explore Page');
    useEffect(() => {
        gaEventTracker('explore')
    })

    return (
        <ProductCollection />
    )
}

export default ExplorePage