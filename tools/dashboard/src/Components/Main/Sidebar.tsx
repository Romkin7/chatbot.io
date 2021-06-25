import React, { FC } from 'react';

const Sidebar: FC = () => {
	return (
		<aside>
			<section className="logo">
				<img src="assets/images/Logo.svg" alt="geniobot logo" />
			</section>
			<nav>
				<ul>
					<li>Overview</li>
					<li>Invoices</li>
					<li>Messages</li>
					<li>Automation</li>
					<li>Art. Intellect</li>
					<li>API-list</li>
					<li>Settings</li>
					<li>Help</li>
					<li>Administrator</li>
				</ul>
			</nav>
			<button>Upgrade to pro</button>
		</aside>
	);
};

export default Sidebar;
