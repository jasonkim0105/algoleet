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

// function maxTickets(tickets) {
//   tickets.sort((a,b) => a - b)
//   let maxLength = 0;
//   let currentLength = 1;
//   for (let i = 0; i < tickets.length - 1; i++) {
//     if (tickets[i + 1] - tickets[i] > 1) {
//       maxLength = Math.max(maxLength, currentLength);
//       currentLength = 1;
//     } else {
//       currentLength++;
//     }
//   }

//   return maxLength;
// }

// function maxProfitFromStocks(stockPrices, k) {
//   if (stockPrices.length === k) return 1;
//   let profitMonths = 0;
//   let count = 1;
//   for (let i = 0; i < stockPrices.length - 1; i++) {
//     if (stockPrices[i] < stockPrices [i + 1]) {
//       count++;
//     } else if (stockPrices[i] >= stockPrices[i + 1]) {
//       count = 1;
//     }
//     if (count === k) {
//       count -=1;
//       profitMonths++
//     }
//   }
//   return profitMonths
// }

// function maxProfitFromStocks(stockPrices, k) {
//   if (stockPrices.length === k) return 1;
//   let profitMonths = 0;
//   let count = 1;
//   for (let i = 0; i < stockPrices.length - 1; i++) {
//     if (stockPrices[i] < stockPrices [i + 1]) {
//       count++;
//     } else if (stockPrices[i] >= stockPrices[i + 1]) {
//       count = 1;
//     }
//     if (count >= k) {
//       profitMonths++
//     }
//   }
//   return profitMonths
// }

// function nodeMapping(files) {
//   let result = {};

//   for (let i = 0; i < files.length; i++) {
//     const file = files[i]
//     let ptr = result;
//     // console.log(ptr)
//     for (let j = 0; j < file.length; j++) {
//       let string = file[j]
//       // console.log(ptr)
//       if (!ptr[string]) ptr[string] = {}
//       ptr = ptr[string];
//     }
//   }

//   return result
// }

// ptr = result["A"]
// ptr = {}
// ptr["B"] === undefined = {}
// ptr = ptr["B"]
// ptr = {C: {}}
// ptr["D"] === undefined
// ptr = {"C": {}, "D": {}}

// console.log(nodeMapping([
//   ['A', 'B', 'C'],
//   ['A', 'B', 'D'],
//   ['A', 'J', 'K'],
//   ['D', 'E'],
//   ['F', 'G', 'H']
// ]))

// {
//   A: { B: { C: {}, D: {} }, J: { K: {} } },
//   D: { E: {} },
//   F: { G: { H: {} } }
// }

const LiveRampData = "data_store_segment_id,name,description,provider,price,\n123456789,123Push > Consumer > Demographic > Senior Citizens > Age 65+, Individuals living in a household with 3 or more people.,123Push,0.75,\n123456788,Alliant > Automotive > Auto - In Market New Vehicle,In-Market model for new vehicle,Alliant,2.75,\n123456787,Alliant > Automotive > Auto - In Market for Insurance,In-Market model for auto insurance,Alliant,2.75,\n123456786,Alliant > Automotive > Auto - In Market for Used Vehicle,In-Market model for used vehicle,Alliant,2.75\n123456785,Alliant > Demographic > Homeowner,Active multi-channel households who own their home,Alliant,2.0,\n123456784,Alliant > Demographic > Age 25-29 years,Active multi-channel households with a person age 25-29 years old present in the HH.,Alliant,1.75,\n123456783,Alliant > Demographic > Age 30-34 years,Active multi-channel households with a person age 30-34 years old present in the HH.,Alliant,1.75,\n123456782,Alliant > Demographic > Age 35-39 years,Active multi-channel households with a person age 35-39 years old present in the HH.,Alliant,1.75,\n123456781,Alliant > Demographic > Age 40-44 years,Active multi-channel households with a person age 40-44 years old present in the HH.,Alliant,1.75"

function csvParse(LiveRampData) {

  const res = {};
  let pointer = res;
  const data = LiveRampData.split(',\n')
  for (let i = 1; i < data.length; i++) {
    const info = data[i].split(',');
    const names = info[1].split('>');
    // console.log(names)
    const description = info[2];
    const provider = info[3];
    const price = info[4];
    const segmentID = info[0];
    for (let name of names) {
      if (!pointer[name]) pointer[name] = {};
      pointer = pointer[name]
    }
    pointer[description] = description;
    // pointer['segmentID'] = segmentID;
    pointer = res;
  }
  return res;
}
console.log(csvParse(LiveRampData))

// {
//   '123Push': { Consumer: { Demographic: [Object] } },
//   Alliant: {
//     Automotive: {
//       'Auto - In Market New Vehicle': [Object],
//       'Auto - In Market for Insurance': [Object],
//       'Auto - In Market for Used Vehicle': [Object]
//     },
//     Demographic: {
//       Homeowner: [Object],
//       'Age 25-29 years': [Object],
//       'Age 30-34 years': [Object],
//       'Age 35-39 years': [Object],
//       'Age 40-44 years': [Object]
//     }
//   }
// }