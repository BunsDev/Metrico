export default class PriceLinePoint {
	timestamp: string;
	date: string
	closePrice: number;
	constructor(timestamp: string, closePrice: number) {
		this.timestamp = timestamp;
		this.date = `${new Date(timestamp).getMonth() + 1}/${new Date(
			timestamp
		).getDate()}/${new Date(timestamp).getFullYear()}`;
		this.closePrice = closePrice;
	}
}
