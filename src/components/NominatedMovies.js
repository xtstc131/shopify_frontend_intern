import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Button } from 'react-bootstrap'

function NominationsMovies(props) {

    const getNominationCount = () => {
        if (props.nominations === undefined || props.nominations.length === 0) {
            return '5 Choices Left';
        } else if ((5 - props.nominations.length) > 1) {
            return `${5 - props.nominations.length} Choices Left`;
        } else if ((5 - props.nominations.length) === 1) {
            return '1 Choice Left';
        } else {
            return 'No Choices Left'
        }
    };
    const handleRemoveItem = (e) => {
        const imdbID = e.target.getAttribute("imdbid")
        props.setNominatedItems(props.nominatedItems.filter(item => item.imdbID !== imdbID));
        // console.log(nominatedItems)
    };
    return (
        <div>
            {props.nominatedItems ?
                <ul className="list-group  slide-fade" >
                    {/* <CSSTransition
                        timeout={300}
                        classNames="fade"
                        unmountOnExit> */}
                    {
                        props.nominatedItems.map(nominatedItem => (
                            <li key={nominatedItem.imdbID} className="list-group-item d-flex justify-content-between show"> <p className="p-0 m-0 flex-grow-1"> {nominatedItem.Title}({nominatedItem.Year})</p>
                                <Button className="ml-4" variant="danger" imdbid={nominatedItem.imdbID} onClick={handleRemoveItem} active >
                                    Remove
                    </Button>
                            </li>
                        ))}
                    {/* </CSSTransition> */}
                </ul>
                : ' '}
        </div>
    );
};

export default NominationsMovies;