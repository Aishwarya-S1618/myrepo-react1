import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const storageKeyName = "count";
  const retrieveCountValue = () => Number(localStorage.getItem(storageKeyName) || 0);

  const [count, setCount] = useState(retrieveCountValue());

  const addCount = (count) => setCount(Number(count) + 1);

  useEffect(() => {
   localStorage.setItem(storageKeyName,String(count));
  }, [count]);
  console.log('count: %d', count);

  return (
    <div className="App">
      {/* lines commented below belonged here within div*/}
      hello world!
      <button onClick={() => addCount(count)}>
        count is {count}
      </button>
    </div>
  )
}

export default App

{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}