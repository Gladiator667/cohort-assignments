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
  if( transactions.length === 0 ) {
    return [];
  }

  const categoryMap = new Map();
  transactions.forEach(transaction => {
    if ( categoryMap.has( transaction.category ) ) {
      const price = categoryMap.get( transaction.category );
      categoryMap.set( transaction.category, ( price + transaction.price ) );
    } else {
      categoryMap.set( transaction.category, transaction.price );
    }
  });

  let categoryArr = [];
  categoryMap.forEach( ( value, key ) => {
    categoryArr.push({
      'category': key,
      'totalSpent': value,
    });
  });

  return categoryArr;
}

module.exports = calculateTotalSpentByCategory;
