import History from './pages/History'
import Landing from './pages/Landing'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';


function App() {

  return (
    <>

    <ToastContainer
    position="top-right"
    theme="colored"
    />

    <Header />

      <Routes>
        
         <Route path='/' element={<Landing />}/>
         <Route path='/home' element={<Home />}/>
         <Route path='/history' element={<History />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
