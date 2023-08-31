import React, { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import BannerImage from "../../images/home-banner-image.png";
import Thumbnail from "../../components/thumbnail/Thumbnail";
import data from "../../data/data.json";

export default function Home() {
	const [accomodationsData, setAccomodationsData] = useState(null);

	useEffect(() => {
		setAccomodationsData(data);
	}, []);

	return (
		<main class="home-container">
			<Banner url={BannerImage} />
			<section class="grid-wrapper">
				{accomodationsData &&
					accomodationsData.map((acc) => {
						return <Thumbnail key={acc.id} data={acc} />;
					})}
			</section>
		</main>
	);
}
