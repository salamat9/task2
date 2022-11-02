function maxProfit(prices) {
    let maxProfit = 0;
    let buy = prices[0];
    let result = [];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > buy) {
            let tempProfit = prices[i] - buy;
            if (tempProfit >= maxProfit) {
                maxProfit = tempProfit
                result = [buy - 1, i]
            }
        }

        if (prices[i] < buy) buy = prices[i];
    }

    return result;
}

console.log(maxProfit([13, 6, 3, 4, 10, 2, 4]))
