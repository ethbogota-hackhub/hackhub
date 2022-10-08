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
import { apolloClient } from './lib/apollo/apolloClient';

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
      </ApolloProvider>
    </AppProvider>
  )
}

export default App
