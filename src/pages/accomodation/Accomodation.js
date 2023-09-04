import React from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";
import Tag from "../../components/tag/Tag";
import Host from "../../components/host/Host";
import StarsRating from "../../components/stars-rating/StarsRating";
import DropDownList from "../../components/drop-down/DropDown";

export default function Accomodation() {
	const { state } = useLocation();

	return (
		<main className="accomodation-container">
			<Carousel urls={state.pictures} />
			<section className="informations-container">
				<div className="title-location-tag-container">
					<div className="title-wrapper">
						<h2 className="title">{state.title}</h2>
					</div>
					<div className="location-wrapper">
						<h3 className="location">{state.location}</h3>
					</div>
					<div className="tag-wrapper">
						{state.tags.map((tag) => {
							return <Tag name={tag} />;
						})}
					</div>
				</div>
				<div className="host-rating-container">
                    <Host name={state.host.name} picture={state.host.picture}/>
                    <StarsRating rating={state.rating}/>
                </div>
			</section>
            <section className="drop-down-container">
                <DropDownList title="Description" content={state.description}/>
                <DropDownList title="Équipements" content={state.equipments}/>
            </section>
		</main>
	);
}
