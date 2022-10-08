import { ConnectKitButton } from 'connectkit';
import AppProvider from './contexts/app/AppProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// components
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
// views
import Home from './views/Home';

import './styles/App.css';
import Organizer from './views/Organizer';
import Footer from './components/Footer';

const App = () => {

  return (
    <AppProvider>
      <BrowserRouter>
        <Topbar />
        <Navbar />
        <ConnectKitButton />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/organizer' element={<Organizer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
