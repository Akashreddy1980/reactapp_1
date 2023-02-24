import "./App.css";
import {
BrowserRouter as Router,
Switch,
Route,
Routes,
Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import About from "./components/About";

function App() {
return (
	<>
	<Router>
		<Routes>
		<Route exact path="/" component={Home} />
	
		<Route path="/about" component={About} />

		<Route path="/contactus" component={ContactUs} />
		</Routes>
	</Router>
	</>
);
}

export default App;
