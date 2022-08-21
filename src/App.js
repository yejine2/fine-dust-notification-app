import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllRegions from './pages/AllRegions'
import FavoriteRegion from './pages/FavoriteRegion'
import MyRegion from './pages/MyRegion'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyRegion />} />
        <Route path="/all-region" element={<AllRegions />} />
        <Route path="/favorite-region" element={<FavoriteRegion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
