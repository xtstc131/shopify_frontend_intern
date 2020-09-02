import React from 'react';
import { Button } from 'react-bootstrap'


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
    <div>
      {props.items ?
        <ul className="list-group ">
          {props.items.map(item => (
            <li key={item.imdbID} className="list-group-item d-flex justify-content-between"> <p className="p-0 m-0 flex-grow-1"> {item.Title}({item.Year})</p>
              <Button className="ml-4" variant="primary" disabled={isNominated(item)} onClick={() => { props.setNominatedItems([...props.nominatedItems, item]) }} active>
                nominated
            </Button>
            </li>
          ))}
        </ul>
        : ' '}
    </div>
  );
}
export default MovieInfo;
