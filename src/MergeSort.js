
const mergeSort = function(arr, selection){
  if (arr.length < 2)
  {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0,mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr, selection), mergeSort(rightArr, selection), selection);
  
}
function merge(left, right, selection){
  const sorted = [];
  while (left.length && right.length)
  {
    switch (selection)
    {
      case "date":
        sorted.push(
          compareDate(left[0], right[0]) === left[0] ? 
          left.shift() :
          right.shift()
        );
        break;
      case "category":
        sorted.push(
          compareCategory(left[0], right[0]) === left[0] ?
          left.shift() :
          right.shift()
        );
        break;
      case "price":
        sorted.push(
          comparePrice(left[0], right[0]) === left[0] ?
          left.shift() :
          right.shift()
        )
        break;
    }
  }
  return [...sorted, ...left, ...right]
}

// --- Comparison Methods: Date, Price, and Category ---
//Returns smaller

//Date
function compareDate(left, right)
{
  //returns smaller 
  //first check by year, then month, then date
  if (left.date.year > right.date.year)
  {
    return right;
  }
  else if (right.date.year > left.date.year)
  {
    return left;
  }
  else 
  {
    //now check month
    if (left.date.month > right.date.month)
    {
      return right;
    }
    else if (right.date.month > left.date.month)
    {
      return left;
    }
    else 
    {
      //now check day
      if (left.date.day >= right.date.month)
      {
        return right;
      }
      else
      {
        return left;
      }
    }
  }
}

//Category
function compareCategory(left, right)
{
  if (left.category > right.category)
  {
    return right;
  }
  else 
  {
    return left;
  }
}

function comparePrice(left, right)
{
  if (parseFloat(left.amount) > parseFloat(right.amount))
  {
    return right;
  }
  else
  {
    return left;
  }
}
export default mergeSort;