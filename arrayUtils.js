// Array utility functions
function flatten(arr) { return arr.reduce((acc, val) => acc.concat(val), []); }
module.exports = { flatten };
