// QUESTION
// Best Time to Buy and Sell Stock
// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
//
// Example 1:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5
// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
//
// Example 2:
// Input: [7, 6, 4, 3, 1]
// Output: 0
// In this case, no transaction is done, i.e. max profit = 0.
//
// SOLUTION
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function(prices) {
//
// };
var maxProfit = function(prices) {
  var profit = 0;
  for (var i = 0; i < prices.length - 1; i++) {
    for (var j = i + 1; j < prices.length; j++) {
      var calProfit = prices[j] - prices[i];
      if (calProfit > profit) {
        profit = calProfit;
      }
    }
  }
  return profit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

var maxProfit = function(prices) {
  var min = Number.MAX_SAFE_INTEGER;
  var profit = 0;
  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    var calProfit = prices[i] - min;
    if (calProfit > profit) {
      profit = calProfit;
    }
  }
  return profit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
