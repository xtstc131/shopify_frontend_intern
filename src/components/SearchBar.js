import React from 'react';
import { Form } from 'react-bootstrap'
import './SearchBar.scss'
function SearchBar(props) {
    const onChangeForm = (event) => {
        props.setSearchValue(event.target.value)
    }
    return (
        <div className="search-bar-container justify-content-center md-form  active-cyan-2 mt-2">
            <Form className=" search-bar">
                <Form.Group className = " md-form form-sm active-pink-2 mt-2" controlId="formBasicEmail">
                    <Form.Label className="search-results-placeholder">Search Movie Titles</Form.Label>
                    <Form.Control className="search-control"placeholder="Enter Movie Title" value={props.searchValue} onChange={event => onChangeForm(event)} />
                    <Form.Text className="text-muted"  >
                       
                </Form.Text>
                </Form.Group>
            </Form>
        </div>
    )
};


export default SearchBar;