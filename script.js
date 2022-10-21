function total(arr) {
  const initial = arr.reduce((prev, current) => {
    return prev + current;
  });
  return initial;
}

console.log(total([1, 2, 3])); // 6

function stringConcat(arr) {
  let string = arr.reduce((prev, current) => {
    return prev + current;
  }, "");
  return string;
}

console.log(stringConcat([1, 2, 3])); // "123"

function totalVotes(arr) {
  const voters = arr.reduce((prev, current) => {
    if (current.voted) {
      return prev + 1;
    }
    return prev;
  }, 0);
  return voters;
}

const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
console.log(totalVotes(voters)); // 7

function shoppingSpree(arr) {
  const allPrices = arr.reduce((prev, current) => {
    return prev + current.price;
  }, 0);
  return allPrices;
}

const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

console.log(shoppingSpree(wishlist)); // 227005

function flatten(arr) {
  const allArray = [];
  arr.forEach((miniArr) => {
    miniArr.forEach((element) => {
      allArray.push(element);
    });
  });
  return allArray;
}

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

function voterResults(arr) {
  let numYoungVotes = 0;
  let numYoungPeople = 0;
  let numMidVotesPeople = 0;
  let numMidsPeople = 0;
  let numOldVotesPeople = 0;
  let numOldsPeople = 0;

  arr.forEach((voter) => {
    if (voter.age >= 18 && voter.age <= 25) {
      numYoungPeople++;
      if (voter.voted) {
        numYoungVotes++;
      }
    }
    if (voter.age >= 26 && voter.age <= 35) {
      numMidsPeople++;
      if (voter.voted) {
        numMidVotesPeople++;
      }
    }
    if (voter.age > 35) {
      numOldsPeople++;
      if (voter.voted) {
        numOldVotesPeople++;
      }
    }
  });
  return {
    numYoungVotes: numYoungVotes,
    numYoungPeople: numYoungPeople,
    numMidVotesPeople: numMidVotesPeople,
    numMidsPeople: numMidsPeople,
    numOldVotesPeople: numOldVotesPeople,
    numOldsPeople: numOldsPeople,
  };
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/

/* koristiti 
Array.prototype.map()
Math.pow() */

const powing = (arr) => {
  const powedNumbers = arr.map((number) => {
    return Math.pow(number, 2);
  });
  return powedNumbers;
};

// napraviti funkciju koja prima npr input kao niz i vraca resultat kad se pozove.
const input = [1, 2, 3, 4, 5];
const result = [1, 4, 9, 16, 25];

console.log(powing(input));
// Sum of every positive element

const sumingPositive = (arr) => {
  const positive = arr.reduce((prev, current) => {
    if (current > 0) {
      return prev + current;
    }
    return prev;
  }, 0);
  return positive;
};

// napraviti funkciju koja vraca zbir svih pozitivnih brojeva
const input1 = [1, -4, 12, 0, -3, 29, -150];
const result1 = 42;

console.log(sumingPositive(input1));
