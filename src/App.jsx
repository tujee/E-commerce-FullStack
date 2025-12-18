import { Routes, Route } from 'react-router-dom';
import HomePages from '../pages/HomePages.jsx';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import FaqPages from '../pages/FaqPages.jsx';

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePages/>} />
        <Route path='/faq' element={<FaqPages/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
