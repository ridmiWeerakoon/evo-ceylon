import { Routes, Route } from 'react-router-dom'
import Layout from "./components/site/Layout"
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App