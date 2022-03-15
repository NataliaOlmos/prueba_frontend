import React from "react";
import { Card } from "react-bootstrap";


const SearchCard = (props) => {
    console.log(props.result.id)
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <div key={props.result.id} >
                    <img src={props.result.image} style={{ height: "10%", width: "15%", boderRadius: "50%" }}></img>
                    {props.result.title}
                </div>
            </Card.Body>
        </Card>
    )
}

export default SearchCard;
