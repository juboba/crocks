// isUndefOrNull :: a -> Bool
function isUndefOrNull(x) {
  return x === undefined || x === null
}

module.exports = isUndefOrNull