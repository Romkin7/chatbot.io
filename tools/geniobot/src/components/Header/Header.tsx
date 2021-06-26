import React, { FC } from 'react';

interface IHeader {
	headerText: string;
	logoSrc: string;
	logoAlt: string;
}

const Header: FC<IHeader> = ({ headerText, logoSrc, logoAlt }) => {
	return (
		<header className="geniobot--header">
			<img className="geniobot--header__logo" src={logoSrc} alt={logoAlt} />
			<h3 className="geniobot--header__title">{headerText}</h3>
		</header>
	);
};

export default Header;
