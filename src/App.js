import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Movies from './components/movie';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import Customers from './components/customers';

function App() {
  return (
    <main className='container' >
      
    <Movies></Movies>
    <Route path="/movies" component={Movies} />
    <Route path="/customers" component={Customers} />
    <Route path="/rentals" component={Rentals} />
    <Route path="/not-found" component={NotFound} />
    </main>
  );
}

export default App;
