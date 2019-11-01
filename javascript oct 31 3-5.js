////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
*/

function uniq (arr, callback) {
    for(let i = 0; i < arr.length; i++) {
      for(let j = arr.length - 1; j >=0; j--){
        if(arr[i] === arr[j] && i !==j) {
            arr.splice(i, 1)
            }
        }
    }
  }



// Do not edit the code below.
uniq(names, function(uniqArr){
    console.log('The new names array with all the duplicate items removed is ', uniqArr);
  });
  // Do not edit the code above.
  
  


  ////////// PROBLEM 8 //////////

// Do not edit the code below.
var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
// Do not edit the code above.

/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list and adding new items to our list.

  Write a function called removeItem that is given two arguments, the first is myGroceryList, and the second is an item to remove from myGroceryList. 
  If the second argument (or the item to add or remove) matches an item in myGroceryList, remove that item from the your grocery list and return the new, updated grocery list.

  Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList and the second is an item to add to your grocery list. 
  In addItem add the item you passed in to myGroceryList then return the new, updated grocery list.

  In both removeItem and addItem check to see if the 'myGroceryList' and 'item' arguments are truthy.
  If they are not, return an empty array.

  Here are some examples of calling your functions and what should be returned:
  removeItem(myGroceryList, 'chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
  addItem(myGroceryList, 'Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];
  removeItem(myGroceryList) --> [];
  addItem() --> [];
*/

// function removeItem(myGroceryList, item) {
//     let newArr = []
//     if(myGroceryList && item) {
//     for (let i = 0; i < myGroceryList.length; i++) {
//         if (myGroceryList[i] === item) {
//             myGroceryList.splice(i, 1)
//         }
//     }return myGroceryList
// } else {
//     return newArr
//     }
// }
// function addItem(myGroceryList, item) {
//     let newArr = []
//     if (myGroceryList && item) {
//     myGroceryList.push(item)
// }   return myGroceryList
// } else {
//     return newArr
// }
// }



function removeItem(myGroceryList, item) {
    let newArr = []
    if(myGroceryList && item) {
      for (let i = 0; i < myGroceryList.length; i++) {
         if (myGroceryList[i] === item) {
           myGroceryList.splice(i, 1)
         }
       }return myGroceryList
    } else {
      return newArr
    }
  }
  function addItem(myGroceryList, item) {
    let newArr = []
    if (myGroceryList && item) {
      myGroceryList.push(item)
      return myGroceryList
    } else {
      return newArr
    }
  }