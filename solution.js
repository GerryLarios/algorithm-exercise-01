module.exports.sumarize = function(array = []) {
  if (array === null) return 0
  return array.reduce((acc, item) => acc + item, 0)
}
