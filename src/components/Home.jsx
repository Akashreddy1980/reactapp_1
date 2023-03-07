import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Home =  () => {
	const [pageno , setpageno] = useState('');
return (
	<div>
	<h1>Home Page</h1>
	<br />
	<ul>
		<li>
		<Link to="/">Home</Link>
		</li>
		<li>
		<Link to="/about">About</Link>
		</li>
		<li>
		<Link to="/tempconv">Temperature Conversion</Link>
		</li>
		<input value={pageno} placeholder="Page No" onChange={(e) => setpageno(e.target.value)}/>
		<Link to ={"/akash/"+ pageno} >Submit</Link>
	</ul>
	</div>
);
}
export default Home;
