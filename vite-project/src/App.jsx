import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionComponent from './FunctionComponent'
import DynamicCode from './DynamicCode'
import "./DynamicCode.css";
import ToDo from './ToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDo />
    </>
  )
}

export default App

