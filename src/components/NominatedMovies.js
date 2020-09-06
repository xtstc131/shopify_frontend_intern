import React from 'react';
import { Button } from 'react-bootstrap'
import FlipMove from "react-flip-move";
function NominationsMovies(props) {

    const animationedCallback = (imdbID) => {
        props.setNominatedItems(props.nominatedItems.filter(item => item.imdbID !== imdbID))
    }
    const handleRemoveItem = (e) => {
        var target = e.target;
        var parent = target.parentElement;
        parent.classList.remove("new-item");
        const imdbID = target.getAttribute("imdbid");
        parent.addEventListener("animationend", animationedCallback(imdbID), false);
        // parent.classList.add("removed-item");
    }
    return (
        <div className="noimated-info-container">
            <span className="search-results-placeholder">Nominated Movies</span>
            {props.nominatedItems ?
                <ul className="list-group  noimated-info" >

                    <FlipMove duration={250} easing="ease-out">                    
                        {
                        props.nominatedItems.map(nominatedItem => (

                        <li key={nominatedItem.imdbID} className="list-group-item d-flex justify-content-between" >
                            <p className="p-0 m-0"> {nominatedItem.Title}({nominatedItem.Year})</p>
                            <Button className="ml-4" variant="danger" imdbid={nominatedItem.imdbID} onClick={handleRemoveItem} active >
                                Remove
                                </Button>
                        </li>
                    ))}</FlipMove>

                </ul>
                : ' '}
        </div>
    );
};

export default NominationsMovies;