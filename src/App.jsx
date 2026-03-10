import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
// import SearchSkills from './pages/SearchSkills'
// import ProvideSkills from './pages/ProvideSkills'
// import MyProfile from './pages/MyProfile'
// import Login from './pages/Login'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 主頁路由 */}
        <Route path="/" element={<Home />} />
        
        {/* 其他功能路由 */}
        {/* <Route path="/search" element={<SearchSkills />} />
        <Route path="/provide" element={<ProvideSkills />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/login" element={<Login />} /> */}
        
        {/* 404 路由 */}
        <Route path="/404" element={<NotFound />} />
        
        {/* 捕捉所有未定義的路由 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
