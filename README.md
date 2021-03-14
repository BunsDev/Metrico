# Metrico.page
Metrico is a portal for viewing a time series chart along with metrics on top cryptocurrencies with data from the Messari API.

Metrico includes an overview for a given asset powered by the [time-series](https://data.messari.io/api/v1/assets/yfi/metrics/price/time-series?start=2021-01-01&end=2021-02-01&interval=1d) endpoint for that specific asset as well as the [metrics endpoint](https://data.messari.io/api/v1/assets/yfi/metrics) for that asset.

The page contains a high-level chart for visualizing the time-series for that given cryptoasset viewable at the monthly, quarterly, and semi-annual time periods.

Though existing on a single page, users may browse through a vast array of cryptoassets, which enables lives updates to the chart visualization and metrics -- pulled from the paginated asset list contained in the [Messari API assets](https://data.messari.io/api/v1/assets).

# Documentation
- Time Series Endpoint: https://data.messari.io/api/v1/assets/yfi/metrics/price/time-series?start=2021-01-01&end=2021-02-01&interval=1d
- Metrics Endpoint: https://data.messari.io/api/v1/assets
- Detailed Documentation: https://messari.io/api/docs
# Contributing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.