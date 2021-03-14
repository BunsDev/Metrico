import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './SearchForm.scss';
import { TSearchFormProps } from '../../types/props/TSearchFormProps';

export const SearchForm = ({ handleSubmit }: TSearchFormProps): JSX.Element => {
	const [searchVal, setSearchVal] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchVal(e.target.value);
	}

	const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleSubmit(searchVal);
	}

	return (
		<Form onSubmit={handleSearchSubmit}>
			<Form.Group controlId='formBasic'>
				<Form.Control
					type='text'
					name='searchBar'
					placeholder=''
					value={searchVal}
					onChange={handleChange}
				/>
			</Form.Group>
		</Form>
	);
};
