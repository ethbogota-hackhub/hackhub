import { ApolloProvider } from '@apollo/client';
import { ConnectKitButton } from 'connectkit';
import AppProvider from './contexts/app/AppProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { apolloClient } from './lib/apolloClient';
// components
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
// views
import Home from './views/Home';
import UserSkills from './views/UserSkills';
import Attendees from './views/Attendees';
import Events from './views/Events';

import './styles/App.css';
import Organizer from './views/Organizer';
import Footer from './components/Footer';

const App = () => {

  return (
    <AppProvider>
      <ApolloProvider client={apolloClient}>
<<<<<<< HEAD
      <BrowserRouter>
        <Topbar />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/organizer' element={<Organizer />} />
          <Route path='/attendee' element={<UserSkills />} />
        </Routes>
        <Footer />
      </BrowserRouter>
=======
        <BrowserRouter>
          <Topbar />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          
          <Routes>
            <Route path='/attendees' element={<Attendees />} />
          </Routes>
          
          <Routes>
            <Route path='/events' element={<Events />} />
          </Routes>

          <Routes>
            <Route path='/profile' element={<UserSkills />} />
          </Routes>
        </BrowserRouter>
>>>>>>> f6e1fdcbd591d0d6e01d7dc553219d19cdf2993b
      </ApolloProvider>
    </AppProvider>
  )
}

export default App
