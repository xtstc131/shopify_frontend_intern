import React from 'react';
import { Button, Image, Row, Col, Spinner, Container } from 'react-bootstrap'

const MovieInfo = (props) => {

  //Check whether a Moive is nominated or not.
  const isNominated = (movie) => {
    let nominated = false;
    if (props.nominatedItems.length === 5)
      return true;
    props.nominatedItems.forEach(nominatedItem => {
      if (nominatedItem.imdbID === movie.imdbID) {
        nominated = true;
      }
    })
    return nominated
  }
  const movieList = (
    props.items ?
      <ul className="list-group movie-info">
        {props.items.map(item => (
          <li key={item.imdbID} className="list-group-item movie-item">
            <Row >
              <Col  >
                <Image alt="movie-poster" src={item.Poster} onError={event => event.target.src = 'no_image_found.jpg'} />
                <p className="mt-4">({item.Year})</p>
              </Col>
              <Col className="title">
                <p> {item.Title}</p>
              </Col>
              <Col className="title">
                <Button
                  className="rounded-pill "
                  variant="primary" disabled={isNominated(item)} onClick={() => { props.setNominatedItems([...props.nominatedItems, item]) }} active>
                  Nominated
                </Button>
              </Col>
            </Row>
          </li>
        ))}
      </ul>
      : ' ')
  return (
    <div className="movie-info-container">
      <Container >
        <Row  className="justify-content-md-center">
            {<span className="search-results-placeholder d-flex justify-content-center">Search Results</span>}
        </Row>
        <Row  className="justify-content-md-center">
          {props.error !== null && <span className="error-info">Ops, No results....</span>}
          { props.error === null && !props.isLoaded &&
            <Spinner animation="border" role="status" variant="info" >
              <span className="sr-only">Loading...</span>
            </Spinner>}
          {props.isLoaded && movieList}
        </Row>
      </Container>
</div>

  );
}
export default MovieInfo;
