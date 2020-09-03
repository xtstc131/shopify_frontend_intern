import React from 'react';
import { Button, Image, Row, Col } from 'react-bootstrap'

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
  return (
      <div className="movie-info">
        {props.items ?
          <ul className="list-group movie-info">

            {props.items.map(item => (
              <li key={item.imdbID} className="list-group-item movie-item">
                <Row >
                  <Col lassName = "title" >
                    <Image alt="movie-poster" src={item.Poster} onError={event => event.target.src = 'no_image_found.jpg'}/>
                    <p className="mt-4">({item.Year})</p>
                  </Col>
                  <Col  className = "title">
                    <p> {item.Title}</p>

                  </Col>
                  <Col className = "title">
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
          : ' '}
      </div>

  );
}
export default MovieInfo;
