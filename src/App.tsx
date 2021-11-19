import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { RouterProvider } from './router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider />
  )
}

export default App
