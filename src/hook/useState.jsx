import React, { useState, useMemo } from 'react'
// import { useDebugValue } from 'react'
import ChildOne from '../component/childOne'
import ChildTwo from '../component/childTwo'

function CounterUseState() {  
  // useStateCount++;
  let initialCount = 10;  
  const [count, setCount] = useState(initialCount)
  console.log('count = ', count)
  
  // useDebugValue('debug')
  // useDebugValue(count>0 ? 'count>0' : 'count<=0')
  
  // useMemo 缓存 计算数据的值
  const MemoChildTwo = useMemo(() => {
    return <ChildTwo/>
  }, [])
  // }, [count])

  return (
    <div>
      当前数字：{count}
      <div>
        <button onClick={() => setCount(initialCount)}>重置</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </div>
      <h2>Normal Render</h2>
      <ChildOne/>
      <h2>Memo Render</h2>
      {MemoChildTwo}
    </div>
  )
}

export default CounterUseState