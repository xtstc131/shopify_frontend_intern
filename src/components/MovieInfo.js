import React from 'react';
import { Button, Image, Row, Col } from 'react-bootstrap'
import FlipMove from "react-flip-move";

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
    <FlipMove duration={250} easing="ease-in-out">

      <div>
        {props.items ?
          <ul className="list-group ">

            {props.items.map(item => (
              <li key={item.imdbID} className="list-group-item ">
                <Row >
                  <Col lassName = "title" >
                    <Image alt="movie-poster" src={item.Poster} onError={event => event.target.src = 'no_image_found.jpg'}/>
                    <p className="mt-4">({item.Year})</p>
                  </Col>
                  <Col  className = "title">
                    <p> {item.Title}</p>

                  </Col>
                  <Col className = "title">
                    <Button variant="primary" disabled={isNominated(item)} onClick={() => { props.setNominatedItems([...props.nominatedItems, item]) }} active>
                      Nominated
                    </Button>
                  </Col>
                </Row>
              </li>
            ))}
          </ul>
          : ' '}
      </div>
    </FlipMove>

  );
}
export default MovieInfo;
