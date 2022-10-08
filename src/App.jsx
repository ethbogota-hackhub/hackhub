import { ApolloProvider } from '@apollo/client';
import { ConnectKitButton } from 'connectkit';
import AppProvider from './contexts/app/AppProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { apolloClient } from './lib/apollo/apolloClient';
// components
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
// views
import Home from './views/Home';
import UserProfile from './views/UserProfile';
import Attendees from './views/Attendees';
import Events from './views/Events';

import './styles/App.css';
import Organizer from './views/Organizer';
import Footer from './components/Footer';

const App = () => {

  return (
    <AppProvider>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Topbar />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/attendees' element={<Attendees />} />
            <Route path='/events' element={<Events />} />
<<<<<<< HEAD
            <Route path='/profile' element={<UserSkills />} />
            <Route path='/organizer' element={<Organizer />} />
=======
            <Route path='/profile' element={<UserProfile />} />
>>>>>>> 59f11d5231ece4fb6266fe66ee7433096c13eb4d
          </Routes>
          <Footer />
        </BrowserRouter>
      </ApolloProvider>
    </AppProvider>
  )
}

export default App
