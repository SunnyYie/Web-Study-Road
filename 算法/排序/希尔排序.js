function shellSort(arr) {
  var len = arr.length

  for (var gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (var i = gap; i < len; i++) {
      var j = i

      var current = arr[i]

      while (j - gap >= 0 && current < arr[j - gap]) {
        arr[j] = arr[j - gap]

        j = j - gap
      }

      arr[j] = current
    }
  }

  return arr
}
