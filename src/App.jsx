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
            <Route path='/profile' element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </AppProvider>
  )
}

export default App
