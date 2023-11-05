var lengthOfLastWord = function (s) {
  s = s.trim()
  s = s.split(' ')
  return s[s.length - 1].length
}
