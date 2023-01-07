import './App.css';
import {  QueryClient, QueryClientProvider } from 'react-query';
import Pics from './components/Pics';

//creating a client 
const queryClient = new QueryClient()



function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Pics></Pics>
    </QueryClientProvider>
    </>
    );
}

export default App;
