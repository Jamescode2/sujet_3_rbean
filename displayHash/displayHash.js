function displayHash(hash) {
  for (const key in hash) {
    console.log(key+" => "+hash[key]);
  }
}


module.exports = displayHash;