import React, { useEffect } from 'react'

let renderCountChildTwo = 0
const ChildTwo = () => {    
    useEffect(() => {
        renderCountChildTwo++
        console.log('Try to useEffect in Child Two here')
    })

    console.log('Child Two render here')
    return (<h3>Re-render Child Two count: {renderCountChildTwo}</h3>)
}

export default ChildTwo;