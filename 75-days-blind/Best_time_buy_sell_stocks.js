/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy=prices[0]   //let us assume the first element as the buy price
    let netProfit=0;    //let us assume the net profit as 0 initially

    for(let i=0;i<prices.length;i++){
        if(buy>prices[i])      //if the buy price is greater than the current price
        {
            buy=prices[i]  //update the buy price
        }
        //new profit
        else if(netProfit<prices[i]-buy){      //if the (old Profit)net profit is less than the new profit
           netProfit=prices[i]-buy           //update the net profit
        }
       
    }
    return netProfit                       //return the net profit
};