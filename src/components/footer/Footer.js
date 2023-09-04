import React from "react";
import logo from "../../images/logo.svg";

export default function Footer() {
	return (
		<footer>
			<div className="footer-logo-wrapper">
                <img src={logo} alt="Kasa"/>
            </div>
            <h3>© 2020 Kasa. All rights reserved</h3>
		</footer>
	);
}
