import "./styles/sass/style.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.js";
import About from "./pages/about/About.js";
import Error from "./pages/error/Error.js";
import Accomodation from "./pages/accomodation/Accomodation.js";
import Navbar from "./components/navbar/Navbar.js";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/error" element={<Error />} />
				<Route path="/accomodation" element={<Accomodation />} />
			</Routes>
		</div>
	);
}

export default App;
