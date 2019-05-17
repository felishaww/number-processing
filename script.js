function min(arr) {
  var i = arr.sort()
return i.slice (0, 1)
}

}

function max(arr) {

}

function mean(arr) {

}

function odds(arr) {

}

function evens(arr) {

}

function numberProcessing(arr) {
  return 'Min: ' + min(arr) + ', Max: ' + max(arr) + ', Mean: ' + mean(arr) + ', Odds: ' + odds(arr) + ', Evens: ' + evens(arr)
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]))
// "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"