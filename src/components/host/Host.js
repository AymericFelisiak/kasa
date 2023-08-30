import React from "react";

export default function Host({ name, picture }) {
	return (
		<div class="host-wrapper">
			<h2>{name}</h2>
			<div class="picture-wrapper">
				<img src={picture} alt={name}></img>
			</div>
		</div>
	);
}
