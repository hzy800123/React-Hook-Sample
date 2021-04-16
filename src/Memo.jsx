import React, { useDebugValue } from "react"

// const Memo = (props) => {
//     console.log('val =', props.val)
//     return (
//         <div>{props.val}</div>
//     )
// }

const Memo = React.memo((props) => {
    console.log('val = ', props.val)
    return (
        <div>
            {props.val}
        </div>
    )
})

export default Memo

// const UseMemo = (props) => {
//     React.useMemo(() => {
//         console.log('val is ', props.val)
//         return (
//             <div>{props.val}</div>
//         )
//     }, [props.val])
//     return <div>0</div>
// }

// export default UseMemo