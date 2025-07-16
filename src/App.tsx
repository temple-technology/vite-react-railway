import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface ApiData {
  message: string;
  timestamp: string;
  data: {
    items: string[];
    count: number;
  };
}

function App() {
  const [count, setCount] = useState(0)
  const [apiData, setApiData] = useState<ApiData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchApiData = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('http://localhost:3000/api/data')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setApiData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchApiData()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      {/* API Data Section */}
      <div className="card">
        <h2>API Data from Fastify</h2>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {apiData && (
          <div>
            <p><strong>Message:</strong> {apiData.message}</p>
            <p><strong>Timestamp:</strong> {apiData.timestamp}</p>
            <p><strong>Items:</strong> {apiData.data.items.join(', ')}</p>
            <p><strong>Count:</strong> {apiData.data.count}</p>
            <button onClick={fetchApiData} disabled={loading}>
              {loading ? 'Refreshing...' : 'Refresh Data'}
            </button>
          </div>
        )}
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
