import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons"

export default function StarsRating({ rating }) {

    let stars = [];

    for(let i = 0; i < 5; i++) {
        if(i < rating - 1) {
            stars.push(<FontAwesomeIcon icon={faStar}/>);
        }
        else stars.push(<FontAwesomeIcon icon={faStar} className="grey"/>);
        
    }

	return (
		<div class="stars-wrapper">
			{stars.map(star => {
                return star;
            })}
		</div>
	);
}
