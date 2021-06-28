import React, { FC } from 'react';
import { ILogo } from 'app-shared-types';
const companylogo: ILogo = {
	src: 'https://res.cloudinary.com/geniobot-io/image/upload/v1624693972/telia-logo_rnc4wl.png',
	alt: 'Telia logo',
};

const Header: FC = () => {
	return (
		<header>
			<section className="companylogo">
				<img src={companylogo.src} alt={companylogo.alt} />
			</section>
			<section className="subscriptionplan">subscriptionplan</section>
			<section className="specification">specification</section>
		</header>
	);
};

export default Header;
