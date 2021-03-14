import PriceLinePoint from "../../PriceLinePoint";

export type TCoinChartProps = {
    chartData: PriceLinePoint[] | undefined;
    numDaysPriceData: number;
    setNumDaysPriceData: Function;
    today: string;
}