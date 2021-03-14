import React, { useContext } from 'react';
import { TCoinProfileDataProps } from '../../types/props/TCoinProfileDataProps';
import { Store } from '../../Store';
import './CoinDescription.scss';

/// @dev ICoinDescriptionProps is currently of type any
export const CoinDescription = ({ coinProfileData }: TCoinProfileDataProps): JSX.Element => {
	const { gState } = useContext(Store);
	const { currentCoin } = gState;
	let name;
	let description;

	const cleanseDescription = () => {
		if (coinProfileData) {
			description = coinProfileData.profile.general.overview.project_details.replace(
				/<([^>]+)>/g,
				''
			);
			name = coinProfileData.name;
		} else {
			description = `Loading Data for ${currentCoin}`;
			name = currentCoin;
		}
	}

	cleanseDescription();
	return (
		<div className='coin-description'>
			<h5>{name} Overview</h5>
			<p>{description}</p>
		</div>
	);
};

