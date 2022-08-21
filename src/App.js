import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllRegions from './pages/AllRegions'
import FavoriteRegion from './pages/FavoriteRegion'
import MyRegion from './pages/MyRegion'
import TabMenu from './components/TabMenu'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyRegion />} />
        <Route path="/all-region" element={<AllRegions />} />
        <Route path="/favorite-region" element={<FavoriteRegion />} />
      </Routes>
      <TabMenu />
    </BrowserRouter>
  )
}

export default App
