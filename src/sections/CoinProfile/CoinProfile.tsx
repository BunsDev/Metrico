import React, { useState, useContext, useEffect } from 'react';
import { CoinSummary } from '../../components/CoinSummary/CoinSummary';
import { CoinImg } from '../../components/CoinImg/CoinImg';
import { CoinDescription } from '../../components/CoinDescription/CoinDescription';
import { Store } from '../../Store';
import { CoinChart } from '../../components/CoinChart/CoinChart';
import { setChartDataInterval } from '../../helpers/dateHelpers';
import { fetchAssetMetricsData, fetchAssetPriceData, fetchAssetProfileData } from '../../apis/messari';
import PriceLinePoint from '../../PriceLinePoint';
import './CoinProfile.scss';
import { TCoinProfileData } from '../../types/TCoinProfileData';
import { TCoinMetricsData } from '../../types/TCoinMetricsData';

export const CoinProfile = (): JSX.Element => {
	const { gState, dispatch } = useContext(Store);
	const { currentCoin, errorMsg } = gState;
	const [coinProfileData, setCoinProfileData] = useState<TCoinProfileData | undefined>();
	const [coinMetricsData, setCoinMetricsData] = useState<TCoinMetricsData | undefined>();
	const [chartData, setChartData] = useState<Array<PriceLinePoint>>();
	const [numDaysPriceData, setNumDaysPriceData] = useState(30)

	// calc today's date and num days in the past to get data for based on user input
	const [today, maxInterval] = setChartDataInterval(numDaysPriceData)

	useEffect(() => {

		const getCoinData = async () => {
			setCoinProfileData(undefined)
			setCoinMetricsData(undefined)

			const profile = await fetchAssetProfileData(currentCoin, dispatch);
			const metrics = await fetchAssetMetricsData(currentCoin, dispatch);

			setCoinProfileData(profile)
			setCoinMetricsData(metrics)
		}

		getCoinData();

	}, [currentCoin, dispatch]);

	useEffect(() => {
		const getPriceData = async () => {

			setChartData(undefined)
			const priceData = await fetchAssetPriceData(currentCoin, dispatch, today, maxInterval)

			setChartData(priceData)
		}

		getPriceData();

	}, [currentCoin, maxInterval, dispatch, today])


	const coinProfile = errorMsg === '' ? (<><div className='coin-profile'>
		<div className='coin-summary-cont'>
			<CoinImg />
			<CoinSummary
				coinMetricsData={coinMetricsData}
				coinProfileData={coinProfileData}
			/>
		</div>
		<CoinDescription coinProfileData={coinProfileData} />
		<CoinChart chartData={chartData} today={today} numDaysPriceData={numDaysPriceData} setNumDaysPriceData={setNumDaysPriceData} />
	</div></>) : <div>{errorMsg}</div>

	return (
		<div>
			{coinProfile}
		</div>
	);
};
