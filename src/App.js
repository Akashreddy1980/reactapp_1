import "./App.css";
import {Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import TempConv from "./components/TepConv";
import { Akash } from "./components/Akash";

function App() {
return (
	<>
		<Routes>
		<Route  path="/" element={<Home/>} />
	
		<Route path="/about" element={<About/>} />

		<Route path="/tempconv" element={<TempConv/>} />
		<Route path="akash/:id" element={<Akash/>}/>
		</Routes>
	</>
);
}

export default App;
