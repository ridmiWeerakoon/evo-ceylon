import { Routes, Route } from 'react-router-dom'
import Layout from './components/site/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Lookbook from './pages/Lookbook'
import Custom from './pages/Custom'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/custom" element={<Custom />} />
      </Route>
    </Routes>
  )
}

export default App