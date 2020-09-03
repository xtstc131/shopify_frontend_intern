import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Alert } from 'react-bootstrap'
import Header from './components/layout/Header'
import SerchBar from './components/SearchBar'
import MovieInfo from './components/MovieInfo'
import NominationsMovies from './components/NominatedMovies'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [nominatedItems, setNominatedItems] = useState(() => {
    const stickyValue = window.localStorage.getItem(0);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : [];
  });
  const [finished, setFinished] = useState(false)
  const [searchValue, setSearchValue] = useState("Movie");

  //Fetch Movie info from OMDB API
  useEffect(() => {
    setItems(null)
    setError(null)
    setIsLoaded(false)
    fetch(`http://www.omdbapi.com/?type=movie&s=${searchValue}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.Response === "True") {
            setIsLoaded(true);
            setItems(result.Search);
            // console.log(items)
          }
          else {
            setIsLoaded(false);
            setError(result.Error);
          }
        }
      )
  }, [searchValue])

  useEffect(() => {
    //Store nominated movie at local storage
    window.localStorage.setItem(0, JSON.stringify(nominatedItems));
    //If 5 Movies have been nominated, set finish value to true. 
    if (nominatedItems.length === 5)
      setFinished(true)
    else
      setFinished(false)
  }, [nominatedItems])


  return (
    <div className="App">

      <Alert show={finished} variant="success" className="banner" transition={null} >
        <Alert.Heading>Congratulations!</Alert.Heading>
        <p>
          You have finished nomination!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
        </div>
      </Alert>
      <Header />
      <Container>
        <Row >
          <Col >
            <SerchBar searchValue={searchValue} setSearchValue={setSearchValue} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MovieInfo items={items} setItems={setItems} nominatedItems={nominatedItems} setNominatedItems={setNominatedItems} />
          </Col>
          <Col>
            <NominationsMovies nominatedItems={nominatedItems} setNominatedItems={setNominatedItems} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
