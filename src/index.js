// Returns the maximum value that can be put in a knapsack of capacity W
function ks(W, wt, val, n) {
  if (n === 0 || W === 0) {
    return 0;
  }
  //If weight of the nth item is more than Knapsack capacity W, then
  // this item cannot be included in the optimal solution
  if (wt[n - 1] > W) {
    return ks(W, wt, val, n - 1);
  } else {
    // Return the maximum of two cases:
    // (1) nth item included
    // (2) not included
    let tmp1 = val[n - 1] + ks(W - wt[n - 1], wt, val, n - 1);
    let tmp2 = ks(W, wt, val, n - 1);
    return Math.max(tmp1, tmp2);
  }
}

// A Dynamic Programming based solution for 0-1 Knapsack problem
function ks_dp(W, wt, val, n) {
  let K = Array( n + 1).fill().map(()=>Array(W + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= W; j++) {
      // if (i === 0 || w === 0) {
      //   K[i][w] = 0;
      // } else 
      if (wt[i - 1] <= j) {
        K[i][j] = Math.max( val[i - 1] + K[i - 1][j - wt[i - 1]] , K[i - 1][j]);
      } else {
        K[i][j] = K[i - 1][j];
      }
    }
  }
  return K[n][W];
}

let value = [60, 100, 120];
let weight = [10, 20, 30];
let mW = 50;

console.log(ks_dp(mW, weight, value, 3));