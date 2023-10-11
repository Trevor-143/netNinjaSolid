import { createSignal } from 'solid-js'

import './App.css'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <h1>Hey Solid</h1>
      <div><button onClick={() => setCount((count) => count + 1)}>
        count is {count()}
      </button></div>
    </>
  )
}

export default App
