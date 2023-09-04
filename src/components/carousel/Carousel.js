import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Carousel({ urls }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextImage = () => {
		const isLastImage = currentIndex === urls.length - 1;
		const newIndex = isLastImage ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const previousImage = () => {
		const isFirstImage = currentIndex === 0;
		const newIndex = isFirstImage ? urls.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	return (
		<section className="carousel">
			<div className="image-wrapper">
				<img src={urls[currentIndex]} alt=""></img>
			</div>
			<div className="overlay"></div>
			<div className="left-arrow" onClick={previousImage}>
				<FontAwesomeIcon icon={faChevronLeft} />
			</div>
			<div className="right-arrow" onClick={nextImage}>
				<FontAwesomeIcon icon={faChevronRight} />
			</div>
			<div className="carousel-index">
				{currentIndex + 1}/{urls.length}
			</div>
		</section>
	);
}
