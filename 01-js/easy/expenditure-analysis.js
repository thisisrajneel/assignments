/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let spends = []
  
  for (const t of transactions) {
    let temp = spends.filter( s => s.category == t.category)
    if(temp == []) {
      const add = { 'category': t.category, 'totalSpent': t.price}
      spends = spends.concat(add)
    }
    else {
      temp.map( s => {
        s.totalSpent += t.price
      })
    }
  }

  return spends;
}

module.exports = calculateTotalSpentByCategory;
