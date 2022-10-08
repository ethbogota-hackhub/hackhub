import { ApolloProvider } from '@apollo/client';
import { ConnectKitButton } from 'connectkit';
import AppProvider from './contexts/app/AppProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// components
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
// views
import Home from './views/Home';
import UserSkills from './views/UserSkills';
import { apolloClient } from './lib/apolloClient';

import './styles/App.css';
import Organizer from './views/Organizer';
import Footer from './components/Footer';

const App = () => {

  return (
    <AppProvider>
<<<<<<< HEAD
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
=======
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Topbar />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>

          <Routes>
            <Route path='/attendee' element={<UserSkills />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
>>>>>>> 908cf12f29a3830acd58e0d35a2f0a430a4dc374
    </AppProvider>
  )
}

export default App
