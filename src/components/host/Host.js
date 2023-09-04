import React from "react";

export default function Host({ name, picture }) {
	return (
		<div className="host-wrapper">
			<h2>{name}</h2>
			<div className="picture-wrapper">
				<img src={picture} alt={name}></img>
			</div>
		</div>
	);
}
