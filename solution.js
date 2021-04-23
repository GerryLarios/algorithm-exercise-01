function sumarize(array = [], acc = 0, index = 0) {
  if (array === null || array?.length <= index) return acc

  const item = array[index]

  return sumarize(array, item + acc, index + 1)
}

// O^n

module.exports.sumarize = sumarize
