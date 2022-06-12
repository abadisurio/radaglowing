import React, { useEffect } from 'react'

const About = () => {
    useEffect(() => {
        document.title += " - About"
        return () => { document.title = "Rada Glow" }
    }, [])

    return (
        <div>About</div>
    )
}

export default About