import React from 'react';
import { Form } from 'react-bootstrap'

function SearchBar(props) {
    const onChangeForm = (event) => {
        props.setSearchValue(event.target.value)
    }
    return (
        <div>
            <Form className="ustify-content-center md-form  active-cyan-2 mt-2">
                <Form.Group className = " md-form form-sm active-pink-2 mt-2" controlId="formBasicEmail">
                    <Form.Label>Search Movie Titles</Form.Label>
                    <Form.Control className="search-control"placeholder="Enter Movie Title" value={props.searchValue} onChange={event => onChangeForm(event)} />
                    <Form.Text className="text-muted"  >
                        We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
            </Form>
        </div>
    )
};


export default SearchBar;