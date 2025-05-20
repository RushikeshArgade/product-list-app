import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import ProductList from './pages/ProductList/ProductList'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Dashboard />} />
          <Route path='/product-list' element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
