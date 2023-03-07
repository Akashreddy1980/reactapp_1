import React, { useEffect, useState } from "react";

function About() {
	const [count, setCount] = useState(0);
	useEffect(() => {
		document.getElementById("p1").innerHTML = 'You Clicked ' + count + ' times.'
	});
	return (
		<>
			<p id="p1" ></p>
			<button onClick={() => setCount(count + 1)} >Click ME</button>
		</>
	);
}
export default About;
