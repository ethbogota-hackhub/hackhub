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
            <Route path='/attendee' element={<UserSkills />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </AppProvider>
  )
}

export default App
