import React from 'react';
import { Form } from 'react-bootstrap'

function SearchBar(props) {
    const onChangeForm = (event) => {
        props.setSearchValue(event.target.value)
    }
    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Search Movie Titles</Form.Label>
                    <Form.Control placeholder="Enter Movie Title" value={props.searchValue} onChange={event => onChangeForm(event)} />
                    <Form.Text className="text-muted"  >
                        We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
            </Form>
        </div>
    )
};


export default SearchBar;