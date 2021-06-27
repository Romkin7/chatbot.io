import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import TimelineIcon from '@material-ui/icons/Timeline';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DialpadIcon from '@material-ui/icons/Dialpad';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import SettingsInputCompositeIcon from '@material-ui/icons/SettingsInputComposite';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

const Sidebar: FC = () => {
	return (
		<aside>
			<section className="logo">
				<img src="https://res.cloudinary.com/geniobot-io/image/upload/v1624693972/Logo_plmy4d.svg" alt="geniobot logo" />
			</section>
			<nav>
				<ul>
					<li>
						<NavLink exact to="/">
							<TimelineIcon className="icon" />
							Overview
						</NavLink>
					</li>

					<li>
						<NavLink to="/invoices">
							<EuroSymbolIcon className="icon" />
							Invoices
						</NavLink>
					</li>

					<li>
						<NavLink to="/messages">
							<MailOutlineIcon className="icon" />
							Messages
						</NavLink>
					</li>

					<li>
						<NavLink to="/automation">
							<DialpadIcon className="icon" />
							Automation
						</NavLink>
					</li>

					<li>
						<NavLink to="/intellect">
							<CastForEducationIcon className="icon" />
							Art. Intellect
						</NavLink>
					</li>

					<li>
						<NavLink to="/api-list">
							<SettingsInputCompositeIcon className="icon" />
							API-list
						</NavLink>
					</li>

					<li>
						<NavLink to="/settings">
							<SettingsIcon className="icon" />
							Settings
						</NavLink>
					</li>

					<li>
						<NavLink to="/help">
							<HelpOutlineIcon className="icon" />
							Help
						</NavLink>
					</li>

					<li>
						<NavLink to="/administrator">
							<AccessibilityIcon className="icon" />
							Administrator
						</NavLink>
					</li>
				</ul>
			</nav>
			<button>Upgrade to pro</button>
		</aside>
	);
};

export default Sidebar;
