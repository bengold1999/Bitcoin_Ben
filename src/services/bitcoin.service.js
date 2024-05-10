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

function getMarketPriceHistory() {
    return axios.get(`${CHARTS_API}/trade-volume?timespan=5months&format=json&cors=true`)
        .then(response => {
            if (response.data && response.data.values) {
                const formattedData = response.data.values.map(item => {
                    return { 
                        name: new Date(item.x * 1000).toLocaleDateString("en-US"), 
                        value: item.y 
                    }
                })
                return formattedData
            } else {
                throw new Error('Invalid response format')
            }
        })
        .catch(error => { throw error })
}

function getAvgBlockSize() {
    return axios.get(`${CHARTS_API}/average-block-size?format=json&cors=true`)
        .then(response => response.data)
        .catch(error => { throw error })
}
