function min(arr) {
  var i = arr.sort()
  return i.slice (0, 1)
}


function max(arr) {
  return arr.reduce(function (x, y)  {
    return (x > y ? x : y)
  } ) 

}

function mean(arr) {
  
    var jumlah = 0
    for (i = 0; i < arr.length; i++) {
      jumlah += arr[i]
    }
  
  return Math.round(jumlah / arr.length)
// cari lagi/explore itu math.round appan

}

function odds(arr) {
  var odd = arr.filter (function getodd(m) {
    return m % 2 === 1
  })
  .join('-')
  return odd
}

function evens(arr) {
  var even = arr.filter (function geteven(n) {
    return n % 2 === 0
  })
return even.join('-')

}

function numberProcessing(arr) {
  return 'Min: ' + min(arr) + ', Max: ' + max(arr) + ', Mean: ' + mean(arr) + ', Odds: ' + odds(arr) + ', Evens: ' + evens(arr)
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]))
// "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"