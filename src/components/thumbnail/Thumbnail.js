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
		<div className="thumbnail" onClick={handleClick}>
			<div className="image-wrapper">
				<img src={data.cover} alt={data.title}/>
			</div>
			<div className="overlay"></div>
			<div className="title">
                <h2>{data.title}</h2>
            </div>
		</div>
	);
}
