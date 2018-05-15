import React from 'react';
import './Card.css';

const Card = (props) => (
    <div className="col-sm-4">
        <div className="chi-card"
            style={{ backgroundImage: `url("${props.image}")` }}
            onClick={() => props.cardClickedOn(props.id)}
        >
            <p>{props.name}</p>
        </div>
    </div>
);

export default Card;