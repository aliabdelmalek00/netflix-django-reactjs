import './styles/App.css';
import Nav from './scripts/Nav'
import Banner from './scripts/Banner'
import Row from './scripts/Row'
import React from 'react'
import requests from './scripts/requests'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
}

export default App;
