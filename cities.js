const westVirginiaCities = [
  "Petersburg", "Peterstown", "Philippi", "Pinch", "Pipestem",
  "Poca", "Point Pleasant", "Princeton", "Princewick", "Ranson",
  "Ravenswood", "Red House", "Reedsville", "Richwood", "Ridgeley",
  "Ripley", "Romney", "Ronceverte", "Saint Albans", "Saint Marys",
  "Salem", "Salt Rock", "Sand Fork", "Sandstone", "Scarbro",
  "Scott Depot", "Shepherdstown", "Shinnston", "Sinks Grove", "Smithers",
  "Smoot", "South Charleston", "Spanishburg", "Spencer", "Springfield",
  "Stanaford", "Summersville", "Summit Point", "Terra Alta", "Tornado",
  "Triadelphia", "Union", "Valley Grove", "Vienna", "Volga",
  "Walton", "Wardensville", "Washington", "Waverly", "Wayne",
  "Weirton", "Welch", "Wellsburg", "West Liberty", "West Union",
  "Weston", "Wheeling", "White Sulphur Springs", "Williamson", "Williamstown",
  "Winfield", "Winifrede", "Worthington", "Yawkey",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < westVirginiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(westVirginiaCities[i]);
}

module.exports = { batches };
