import React from "react";
import { useNavigate } from "react-router-dom";

export default function Thumbnail({data}) {

	const navigate = useNavigate();

	function handleClick() {
		navigate('/accomodation',
		{
			state: data
		});
	}

	return (
		<div class="thumbnail" onClick={handleClick}>
			<div class="image-wrapper">
				<img src={data.cover} alt={data.title}/>
			</div>
			<div class="overlay"></div>
			<div class="title">
                <h2>{data.title}</h2>
            </div>
		</div>
	);
}
