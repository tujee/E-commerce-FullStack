import { Routes, Route } from 'react-router-dom';
import HomePages from '../pages/HomePages.jsx';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePages/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
