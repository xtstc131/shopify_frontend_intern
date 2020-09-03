import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
// import github_logo from 'GitHub-Mark-64px.png';
const Header = () => {

    return (
        <Jumbotron className="jumbotron">
            <h1>The Shoppies</h1>
            <h2>Movie awards for entrepreneurs</h2>
            <p className="lead">
                This is a simple Movie searching and nomination tool, a simple Websit that help manage  movie nominations for the upcoming Shoppies.
            </p>
            <p>
                <Button
                    className="rounded-pill"
                    variant="outline-light"
                    href="https://github.com/xtstc131/LinkedIn-Scraper"
                >
                    Github
                <img className="btn_logo" src='GitHub-Mark-32px.png' alt="" />
                </Button>
            </p>
        </Jumbotron>
    )
}

export default Header;