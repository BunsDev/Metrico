import axios from 'axios';
import { TCoinProfileData } from '../types/TCoinProfileData';
import PriceLinePoint from '../PriceLinePoint';
import { TCoinMetricsData } from '../types/TCoinMetricsData';
const { REACT_APP_MESSARI_API_KEY } = process.env;

export const fetchAssetProfileData = async (currentCoin: string, dispatch: Function): Promise<TCoinProfileData | undefined> => {
	try {
		dispatch({ type: "SET_ERROR_MSG", payload: '' })
		const profile = await axios.get(
			`https://data.messari.io/api/v2/assets/${currentCoin}/profile`,
			{
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					'x-messari-api-key': REACT_APP_MESSARI_API_KEY,
				},
			}
		)
		return profile.data.data;
	} catch (error) {
		console.log(error);
		dispatch({ type: "SET_ERROR_MSG", payload: `No profile data found for ${currentCoin}, please check your input or select an option from the list.` })
	}
};

export const fetchAssetMetricsData = async (currentCoin: string, dispatch: Function): Promise<TCoinMetricsData | undefined> => {
	try {
		dispatch({ type: "SET_ERROR_MSG", payload: '' })
		const metrics = await axios.get(
			`https://data.messari.io/api/v1/assets/${currentCoin}/metrics`,
			{
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					'x-messari-api-key': REACT_APP_MESSARI_API_KEY,
				},
			}
		);
		return metrics.data.data;
	} catch (error) {
		console.log(error);
		dispatch({ type: "SET_ERROR_MSG", payload: `No metrics data found for ${currentCoin}, please check your input or select an option from the list.` })
	}
};

export const fetchAssetPriceData = async (
	currentCoin: string, dispatch: Function,
	today: string,
	maxInterval: string
) => {
	try {
		dispatch({ type: "SET_ERROR_MSG", payload: '' })
		const res = await axios.get(
			`https://data.messari.io/api/v1/assets/${currentCoin}/metrics/price/time-series?start=${maxInterval}&${today}&interval=1d`,
			{
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					'x-messari-api-key': REACT_APP_MESSARI_API_KEY,
				},
			}
		);

		const pricesArray = res.data.data.values;

		const daysTimestampClose: PriceLinePoint[] = [];
		pricesArray.forEach((day: any, index: number) => {
			// create a new PriceLinePoint instance for each day in the OHLCV array and push it to the daysTimestampClose array
			const pricePoint = new PriceLinePoint(day[0], day[4].toFixed(2))
			daysTimestampClose.push(pricePoint);
		});
		return daysTimestampClose;
	} catch (error) {
		console.log(error);
		dispatch({ type: "SET_ERROR_MSG", payload: `No price data found for ${currentCoin}, please check your input or select an option from the list.` })
	}
};
