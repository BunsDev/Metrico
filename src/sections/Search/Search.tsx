import React from 'react';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { TSearchProps } from '../../types/props/TSearchProps';
import './Search.scss';

export const Search = ({ handleSubmit, type }: TSearchProps): JSX.Element => {
	return (
		<div className='search-container'>
			{/* <p>
				Search by Symbol
			</p> */}
			<SearchForm handleSubmit={handleSubmit} />
		</div>
	);
};
