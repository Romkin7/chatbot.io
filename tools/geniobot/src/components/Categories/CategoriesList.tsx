import React, { FC } from 'react';
import { ICategory } from '../../../../types';

interface ICategoriesListProps {
	categories: ICategory[];
}

const CategoriesList: FC<ICategoriesListProps> = ({ categories }) => {
	return (
		<ul className="categoriesList">
			{categories.map((category: ICategory) => {
				return <li key={category.id}>{category.name}</li>;
			})}
		</ul>
	);
};

export default CategoriesList;
