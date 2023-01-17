import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const connectionRef = useRef<WebSocket | null>(null);
  
  useEffect(() => {
    const connection = new WebSocket('ws://localhost:7071');
    // ვინახავთ ref-ს ქონეშენის ობიექტზე
    connectionRef.current = connection;

    connection.onopen = () => {
      console.log('კავშირი დამყარდა!')
    }

    connection.onclose = () => {
      console.log('კავშირი დაიხურა!')
    };

    connection.onerror = (ev) => {
      console.error(ev);
    }

    connection.onmessage = (event: MessageEvent<string>): any => {
      const message = JSON.parse(event.data) as {name: string; age: number;};

      console.log(message);
    }

    // ეს იგივეა რაც ზემოთ onmessage
    // connection.addEventListener('message', (event: MessageEvent<string>) => {
    //   const message = JSON.parse(event.data) as {name: string; age: number;};

    //   console.log(message);
    // })
    
    return () => {
      connection.close();
    }
  }, [])

  return (
    <div className="App">
      <button onClick={() => {
        connectionRef.current?.send(
          JSON.stringify({
            clientName: 'Zura'
          })
        )
      }}>
        send something to ws
      </button>

      <button onClick={() => {
        connectionRef.current?.close()
      }}>
        close connection
      </button>
    </div>
  )
}

export default App
