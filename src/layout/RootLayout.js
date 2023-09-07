import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";


export default function RootLayout() {
	return (
		<div className="App">
            <ScrollRestoration getKey={(location) => {
                return location.pathname;
            }}/>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}
