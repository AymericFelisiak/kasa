import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function DropDownText({ title, text }) {

    const [open, setOpen] = useState(false);

	return (
		<div class="drop-down-wrapper">
			<div className={`drop-down-header ${open? 'active' : 'inactive'}`} onClick={() => {setOpen(!open)}}>
				<h2>{title}</h2>
				<FontAwesomeIcon icon={faChevronUp} />
			</div>
			<div className={`drop-down-content-wrapper ${open? 'active' : 'inactive'}`}>
				<div class="drop-down-content">
					<p>{text}</p>
				</div>
			</div>
		</div>
	);
}
