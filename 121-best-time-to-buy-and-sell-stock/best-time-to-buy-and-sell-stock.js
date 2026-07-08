/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l = 0;
    let r = l+1;
    let max_profit = 0;

    while(r<prices.length){
        if(prices[r]<prices[l]){
            l = r;
        }else{
            max_profit = Math.max(max_profit,prices[r] - prices[l])
        }
        r++;
    }

    return max_profit;
};