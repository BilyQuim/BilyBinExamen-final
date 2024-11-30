import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [notification, setNotification] = useState('')

  const handleIncrement = () => {
    if (count < 25) {
      setCount(count + 1)
      setNotification('')  // Reset notification
    } else {
      setNotification('Has alcanzado el límite máximo de 25')
    }
  }

  const handleDecrement = () => {
    if (count > -25) {
      setCount(count - 1)
      setNotification('')  // Reset notification
    } else {
      setNotification('Has alcanzado el límite mínimo de -25')
    }
  }

  return (
    <>
      
      <h1>Contador - evaluación</h1>
      <div className="card">
        <button onClick={handleDecrement}>
          Decrement
        </button>
        <span> Count is {count} </span>
        <button onClick={handleIncrement}>
          Increment
        </button>
        <p>
         Bily Esteven Bin Quim 
        </p>
      </div>
      {notification && <p className="notification">{notification}</p>}
      
    </>
  )
}

export default App
