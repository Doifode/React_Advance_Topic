import React, { useState } from 'react'


const App = () => {
  const [state, setState] = useState(0)
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState(state + 2)}>Increment</button>
    </div>
  )
}

export default App