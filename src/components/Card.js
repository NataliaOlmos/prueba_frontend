import React from "react";
import { Card } from "react-bootstrap";
import "./Card.css"


const SearchCard = (props) => {
    return (
        <Card className="card__style" style={{ width: '16rem' }}>
            <Card.Body>
                <div key={props.result.id} >
                    <img className="card__image" src={props.result.image} alt={props.result.title}></img>
                    <span className="card__title" >{props.result.title}</span>
                </div>
            </Card.Body>
        </Card>
    )
}

export default SearchCard;
