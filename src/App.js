import "./styles/sass/style.scss";
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home.js";
import About from "./pages/about/About.js";
import Error from "./pages/error/Error.js";
import Accomodation from "./pages/accomodation/Accomodation.js";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<RootLayout />}>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/error" element={<Error />} />
			<Route path="/accomodation" element={<Accomodation />} />
			<Route path="/*" element={<Error />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
