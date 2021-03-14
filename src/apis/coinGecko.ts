import axios from 'axios';

export const fetchCoinGeckoAssetList = async (dispatch: Function) => {
    try {
        dispatch({ type: "SET_ERROR_MSG", payload: '' })
        const list = await axios.get("https://api.coingecko.com/api/v3/coins/list");
        return list.data
    } catch (error) {
        console.log(error);
        dispatch({ type: "ERROR", payload: 'Error while fetching coin images' })
    }
};