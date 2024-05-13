import axios from "axios"

const CHARTS_API = "https://api.blockchain.info/charts"

const TRADE_VOLUME_KEY = 'tradeVolume'

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize
}

async function getRate(coins) {
    try {
        const response = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

async function getMarketPriceHistory() {
    try {
        const res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
        console.log(res.data);
        return res.data
    } catch (err) {
        console.log(err);
    }
}
function getAvgBlockSize() {
    return axios.get(`${CHARTS_API}/average-block-size?format=json&cors=true`)
        .then(response => response.data)
        .catch(error => { throw error })
}
