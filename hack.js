// SELECT
//   users.name,
//   sub.distance_traveled
// FROM
//   (
//     SELECT
//       user_id,
//       SUM(distance) as distance_traveled
//     FROM
//       RIDES
//     GROUP BY
//       user_id
//   ) sub
// JOIN
//   USERS ON users.id = sub.user_id
// ORDER BY
//   sub.distance_traveled DESC
// LIMIT
//   100;

function maxTickets(tickets) {
  tickets.sort((a,b) => a - b)
  let maxLength = 0;
  let currentLength = 1;
  for (let i = 0; i < tickets.length - 1; i++) {
    if (tickets[i + 1] - tickets[i] > 1) {
      maxLength = Math.max(maxLength, currentLength);
      currentLength = 1;
    } else {
      currentLength++;
    }
  }

  return maxLength;
}

function maxProfitFromStocks(stockPrices, k) {
  if (stockPrices.length === k) return 1;
  let profitMonths = 0;
  let count = 1;
  for (let i = 0; i < stockPrices.length - 1; i++) {
    if (stockPrices[i] < stockPrices [i + 1]) {
      count++;
    } else if (stockPrices[i] >= stockPrices[i + 1]) {
      count = 1;
    }
    if (count === k) {
      count -=1;
      profitMonths++
    }
  }
  return profitMonths
}