import React from 'react';

const ContactPage = () => {
	return (
		<>
			<div id="sidebar">
				<h1>Contact Page</h1>
				<img src='https://gagaru.club/uploads/posts/2023-06/1685609495_gagaru-club-p-bob-marli-krasivo-5.jpg'/>
				<div>
					<nav>
						<ul>
							<li><a href={`/`}>Home Page</a></li>
							<li><a href={`/about`}>About Page</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	)
}
export default ContactPage;