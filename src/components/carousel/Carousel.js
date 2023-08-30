import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Carousel({ urls }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	console.log(urls[currentIndex]);

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
		<div class="carousel">
			
			<div class="image-wrapper">
				<img src={urls[currentIndex]} alt=""></img>
			</div>
			<div class="overlay"></div>
			<div class="left-arrow" onClick={previousImage}>
				<FontAwesomeIcon icon={faChevronLeft} />
			</div>
			<div class="right-arrow" onClick={nextImage}>
				<FontAwesomeIcon icon={faChevronRight} />
			</div>
			<div class="carousel-index">{currentIndex + 1}/{urls.length}</div>
			
		</div>
	);
}
