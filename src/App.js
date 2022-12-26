import './App.css';
import {  QueryClient, QueryClientProvider } from 'react-query';
import Pics from './components/Pics';
import Nav from './components/Nav';

//creating a client 
const queryClient = new QueryClient()



function App() {

  return (
    <>
    <Nav/>
    <QueryClientProvider client={queryClient}>
    <Pics></Pics>
    </QueryClientProvider>
    </>
    );
}

export default App;
