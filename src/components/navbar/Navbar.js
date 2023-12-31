import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<header>
			<nav>
				<Link to="/" className="logo-wrapper">
					<img src={logo} alt="Kasa"></img>
				</Link>
				<div className="link-wrapper">
					<Link to="/">Accueil</Link>
					<Link to="/about">A Propos</Link>
				</div>
			</nav>
		</header>
	);
}
