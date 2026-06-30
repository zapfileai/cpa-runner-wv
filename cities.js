const westVirginiaCities = [
  "Adrian", "Alderson", "Alum Creek", "Arnoldsburg", "Ashford",
  "Athens", "Auburn", "Augusta", "Bakerton", "Barboursville",
  "Barrackville", "Bartley", "Bartow", "Beaver", "Beckley",
  "Belington", "Belle", "Belmont", "Berkeley Springs", "Berwind",
  "Beverly", "Birch River", "Blair", "Bloomingrose", "Bluefield",
  "Branchland", "Brandywine", "Bridgeport", "Bruceton Mills", "Buckhannon",
  "Buffalo", "Bunker Hill", "Burlington", "Cabin Creek", "Cairo",
  "Caldwell", "Camden On Gauley", "Canvas", "Capon Bridge", "Cedar Grove",
  "Ceredo", "Chapmanville", "Charles Town", "Charleston", "Chester",
  "Clarksburg", "Clendenin", "Coal City", "Coalton", "Cottageville",
  "Crab Orchard", "Craigsville", "Crawley", "Culloden", "Dailey",
  "Daniels", "Danville", "Davis", "Davisville", "Dawes",
  "Delbarton", "Dellslow", "Dryfork", "Dunbar", "Eglon",
  "Eleanor", "Elizabeth", "Elkins", "Elkview", "Ellenboro",
  "Fairmont", "Fairview", "Falling Waters", "Fayetteville", "Fenwick",
  "Fisher", "Flatwoods", "Flemington", "Follansbee", "Fort Ashby",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < westVirginiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(westVirginiaCities[i]);
}

module.exports = { batches };
