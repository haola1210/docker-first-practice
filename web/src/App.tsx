import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import instance from './axios'

function App() {
  const [count, setCount] = useState(0)

  const getRand = async () => {
    const res = await instance.post('/rand', {});
    const { data } = res;
    console.log(data)
    setCount(data.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React! hehe hoho</p>
        <p>
          <button type="button" onClick={() => getRand()}>
            Random is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
