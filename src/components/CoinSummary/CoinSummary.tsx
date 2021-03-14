import React from 'react';
import Loader from 'react-loader-spinner';
import { TCoinSummaryProps } from '../../types/props/TCoinSummaryProps';
import './CoinSummary.scss';

export const CoinSummary = ({ coinMetricsData, coinProfileData }: TCoinSummaryProps): JSX.Element => {
	let usdPrice;
	let pctChg;
	let posNeg;
	let pctChgColor;
	// let sector;

	let name = coinProfileData ? (
		coinProfileData.name
	) : (
			<Loader type="ThreeDots"
				color="#6713bb"
				height={50}
				width={50} />
		);

	if (coinMetricsData) {
		usdPrice = coinMetricsData.market_data.price_usd;
		usdPrice = usdPrice
			.toFixed(2)
			//convert to string and add thousands comma separators
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		pctChg = coinMetricsData.market_data.percent_change_usd_last_24_hours;
		pctChg = pctChg.toFixed(2);

		if (Number(pctChg) > 0) {
			posNeg = '+';
			pctChgColor = 'green';
		} else {
			posNeg = '';
			pctChgColor = 'red';
		}
	}

	const price = coinMetricsData ? (
		<>
			<span>${usdPrice} </span>(
			<span style={{ color: pctChgColor }}>
				{posNeg} 
				{pctChg}%
			</span>
			<span>)</span>
		</>
	) : (
			'Loading...'
		);

	// if (coinProfileData) {
	// 	// CHECK THAT THE COIN HAS A SECTOR, IF NOT, SET TO 'N/A'
	// 	sector = coinProfileData.profile.general.overview.sector
	// 		? coinProfileData.profile.general.overview.sector
	// 		: 'N/A';
	// }

	return (
		<div className='coin-summary'>
			<h4>{name}</h4>
			<div className='coin-summary-data'>
				<div className='coin-price'>{price}</div>
				{/* <div className='detail-list'>
					<ul>
						<li>{sector}</li>
					</ul>
				</div> */}
			</div>
		</div>
	);
};
