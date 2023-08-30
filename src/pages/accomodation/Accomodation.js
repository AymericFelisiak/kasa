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
		<main>
			<Carousel urls={state.pictures} />
			<section class="informations-container">
				<div class="title-location-tag-container">
					<div class="title-wrapper">
						<h2 class="title">{state.title}</h2>
					</div>
					<div class="location-wrapper">
						<h3 class="location">{state.location}</h3>
					</div>
					<div class="tag-wrapper">
						{state.tags.map((tag) => {
							return <Tag name={tag} />;
						})}
					</div>
				</div>
				<div class="host-rating-container">
                    <Host name={state.host.name} picture={state.host.picture}/>
                    <StarsRating rating={state.rating}/>
                </div>
			</section>
            <section class="drop-down-container">
                <DropDownList title="Description" content={state.description}/>
                <DropDownList title="Équipements" content={state.equipments}/>
            </section>
		</main>
	);
}
