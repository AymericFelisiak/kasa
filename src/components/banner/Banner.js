import React from "react";
import { useLocation } from "react-router-dom";

export default function Banner({ url }) {

        let h1 = "";

        if(useLocation().pathname === '/') {
           h1 = <h1>Chez vous, partout et ailleurs</h1>;
        }

	return (
		<div class="banner">
			<img src={url} alt="Banière"></img>
            <div class="overlay"></div>
            {h1}
		</div>
	);
}
