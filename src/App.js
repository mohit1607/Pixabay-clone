import './App.css';
import { QueryClient, QueryClientProvider, hashQueryKey } from 'react-query';
import { ErrorFallback, Pics } from './components';
import { ErrorBoundary } from 'react-error-boundary';
import { useEffect } from 'react';
import { useState } from 'react';
//creating a client 
const queryClient = new QueryClient()


function App() {

  const [isOnline, setIsOnline] = useState(navigator.onLine)

  const handleOnline = () => {
    setIsOnline(true)
  }
  const handleOffline = () => {
    setIsOnline(false)
    alert('You are offline check your internet connection')
  }

  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline',handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    }
  })

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {
        window.location.reload()
      }}>
        <QueryClientProvider client={queryClient}>
         {
            isOnline ? <Pics></Pics> : <h1>Check your Inrernet connection</h1>
         }
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
