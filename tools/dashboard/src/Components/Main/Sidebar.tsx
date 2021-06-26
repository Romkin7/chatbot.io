import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: FC = () => {
	return (
		<aside>
			<section className="logo">
				<img src="https://res.cloudinary.com/geniobot-io/image/upload/v1624693972/Logo_plmy4d.svg" alt="geniobot logo" />
			</section>
			<nav>
				<ul>
					<NavLink exact to="/">
						<li>Overview</li>
					</NavLink>
					<NavLink to="/invoices">
						<li>Invoices</li>
					</NavLink>
					<NavLink to="/messages">
						<li>Messages</li>
					</NavLink>
					<NavLink to="/automation">
						<li>Automation</li>
					</NavLink>
					<NavLink to="/intellect">
						<li>Art. Intellect</li>
					</NavLink>
					<NavLink to="/api-list">
						<li>API-list</li>
					</NavLink>
					<NavLink to="/settings">
						<li>Settings</li>
					</NavLink>
					<NavLink to="/help">
						<li>Help</li>
					</NavLink>
					<NavLink to="/administrator">
						<li>Administrator</li>
					</NavLink>
				</ul>
			</nav>
			<button>Upgrade to pro</button>
		</aside>
	);
};

export default Sidebar;
