import React, { useState, useEffect, useContext } from "react";
import { Store } from '../../Store'
import Loader from 'react-loader-spinner';
import Chart, { ChartData } from 'chart.js'
import "./CoinChart.scss"
import { TCoinChartProps } from "../../types/props/TCoinChartProps";

// add priceChart to global namespace for use in createLineChart fn
declare global {
    interface Window { priceChart: any; }
}

export const CoinChart = ({ chartData, numDaysPriceData, setNumDaysPriceData, today }: TCoinChartProps): JSX.Element => {
    const { gState } = useContext(Store);
    const { currentCoin } = gState;

    const [selectedOption, setSelectedOption] = useState('30')

    const prepareLineData = (data: any) => {
        const lineChartData: any = {
            labels: [],
            datasets: [
                {
                    label: "$USD",
                    data: [],
                    borderColor: '#941cac',
                    backgroundColor: '#FFFFFF00',
                },
            ],
        };

        /// @dev point should !== any
        if (data) data.forEach((point: any) => {
            lineChartData.labels.push(point.date);
            lineChartData.datasets[0].data.push(point.closePrice);
        });

        return lineChartData;
    };

    const createLineChart = (data: ChartData) => {
        const canvas = document.querySelector('#line-chart');
        let priceChart
        if (window.priceChart !== undefined) {
            window.priceChart.destroy();
            window.priceChart = new Chart(canvas as any, {
                type: 'line',
                data: data,
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                // Include a dollar sign in the ticks
                                callback: function (value: number) {
                                    value = +value > 100 ? +value.toFixed(0) : +value.toFixed(2)
                                    value = +value.toString();
                                    return '$' + value;
                                }
                            }
                        }]
                    }
                }

            });
        } else {
            window.priceChart = new Chart(canvas as any, {
                type: 'line',
                data: data,
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                // Include a dollar sign in the ticks
                                callback: function (value: number) {
                                    value = +value > 100 ? +value.toFixed(0) : +value.toFixed(2)
                                    value = +value.toString();
                                    return '$' + value;
                                }
                            }
                        }]
                    }
                }
            })
        }
        return priceChart
    }


    useEffect(() => {

        const drawChart = async () => {
            try {
                const formattedData = await prepareLineData(chartData)
                createLineChart(formattedData)
            } catch (err) {
                console.log(err)
            }
        }

        if (chartData) drawChart();

    }, [chartData])

    const loading = <><p>Loading Price Data...</p><Loader type="Audio"
        color="#ebebeb"
        height={100}
        width={100} /></>

    const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setSelectedOption(e.currentTarget.name)

        // coerce e.target.name's type to number
        const newNumDays = +e.currentTarget.name
        setNumDaysPriceData(newNumDays)
    }

    if (chartData && currentCoin) {
        return (
            <div className="price-chart">
                {/* <h4>{currentCoin ? currentCoin.toUpperCase() : "Loading"}</h4> */}
                <div className='interval-container'>
                    <button className={`chart-btn ${selectedOption === '7' ? 'selected' : 'not-selected'}`} name='7' onClick={handleChange} value='7'>Week</button>
                    <button className={`chart-btn ${selectedOption === '30' ? 'selected' : 'not-selected'}`} name='30' onClick={handleChange} value='30'>Month</button>
                    <button className={`chart-btn ${selectedOption === '90' ? 'selected' : 'not-selected'}`} name='90' onClick={handleChange} value='90'>Quarter</button>
                    <button className={`chart-btn ${selectedOption === '180' ? 'selected' : 'not-selected'}`} name='180' onClick={handleChange} value='180'>Semi</button>
                </div>
                <p className='past-days'>Previous {numDaysPriceData} Days</p>
                {/* <p className='max-days-note'>{numDaysPriceData === 265 ? "Metrico's current data source only provides a maximum of 265 days of data" : null}</p> */}
                <div id="chart">
                    <canvas id='line-chart'></canvas>
                </div>
            </div>
        )
    }
    else {
        return <div>{loading}</div>
    }
}
