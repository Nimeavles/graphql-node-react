import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages'

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation;