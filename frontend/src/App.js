import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import About from "./pages/About";
import Buy from "./pages/Buy";
import CarPage from "./pages/CarPage";
import Contact from "./pages/Contact";
import Financing from "./pages/Financing";
import Footer from "./components/Footer";
import Offer from "./pages/Offer";
import Sold from "./pages/Sold";
import SiteHeader from "./components/SiteHeader";
import Thanks from "./pages/Thanks";
import Wallpaper from "./components/Wallpaper";
import Home from './pages/home';


// Graphql
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});

const App = () => {
  useEffect(() => {
    // Fetch data when the component mounts
    fetch('http://localhost:3000/api/data')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <SiteHeader />
          <Wallpaper />
          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/about' element={<About />} /> 
            <Route path='/buy' element={<Buy />} /> 
            <Route path='/carpage/:id' element={<CarPage />} /> 
            <Route path='/contact' element={<Contact />} /> 
            <Route path='/financing' element={<Financing />} /> 
            <Route exact path='/offers' element={<Offer />} /> 
            <Route path='/sold' element={<Sold />} /> 
            <Route path='/thanks' element={<Thanks />} /> 
          </Routes>
          <Footer />
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
