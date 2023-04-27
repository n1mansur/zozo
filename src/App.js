import { Route, Routes } from 'react-router-dom'
import './App.scss'
import 'boxicons'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Home from './components/Home/Home'
import Filials from './components/Filials/Filials'
import Contacts from './components/Contacts/Contacts'
import Basket from './components/Basket/Basket'
import SingFilial from './components/SingFilial/SingFilial'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="filials" element={<Filials />} />
        <Route path="filials/:id" element={<SingFilial />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="order" element={<Basket />} />
      </Route>
    </Routes>
  )
}

export default App
