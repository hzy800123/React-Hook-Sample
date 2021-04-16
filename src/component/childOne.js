import React, { useEffect } from 'react'

let renderCountChildOne = 0
const ChildOne = () => {    
    useEffect(() => {
        renderCountChildOne++
        console.log('Try to useEffect in Child One here')
    })

    console.log('Child One render here')
    return (<h3>Re-render Child One count: {renderCountChildOne}</h3>)
}

export default ChildOne;