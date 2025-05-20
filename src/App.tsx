import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import ProductList from './pages/ProductList/ProductList'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path='/home' element={<Dashboard />} />
          <Route path='/product-list' element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
