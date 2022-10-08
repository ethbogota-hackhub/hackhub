import { ConnectKitButton } from 'connectkit';
import AppProvider from './contexts/app/AppProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// components
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
// views
import Home from './views/Home';

import './styles/App.css';

const App = () => {

  return (
    <AppProvider>
      <BrowserRouter>
        <Topbar />
        <Navbar />
        <ConnectKitButton />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
