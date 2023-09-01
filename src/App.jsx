import React from "react";

export default function Root() {
	return (
		<>
			<div id="sidebar">
				<h1>Home Page</h1>
				<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIKZrClp3TV-6mw9oAL5w2_rPdChUuLQOE9c7rkjFhpI-cm3rIQVkDJRXha9zjwfCowA&usqp=CAU'/>
				<div>
					<nav>
						<ul>
							<li><a href={`/contact`}>Contact Page</a></li>
							<li><a href={`/about`}>About Page</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	)
}