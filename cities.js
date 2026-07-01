const westVirginiaCities = [
  "Franklin", "Friendly", "Gallipolis Ferry", "Gandeeville", "Gassaway",
  "Gauley Bridge", "Gerrardstown", "Ghent", "Glen Dale", "Glenville",
  "Grafton", "Hamlin", "Harpers Ferry", "Harrisville", "Hedgesville",
  "Helvetia", "Hico", "Hinton", "Holden", "Hundred",
  "Huntington", "Hurricane", "Institute", "Inwood", "Jane Lew",
  "Julian", "Jumping Branch", "Justice", "Kanawha Head", "Kearneysville",
  "Kellysville", "Kenna", "Kenova", "Keyser", "Kingwood",
  "Lansing", "Lavalette", "Le Roy", "Lenore", "Leon",
  "Lerona", "Lester", "Letart", "Levels", "Lewisburg",
  "Liberty", "Lindside", "Lizemores", "Logan", "Lost Creek",
  "Lumberport", "Mabie", "Macarthur", "Madison", "Mallory",
  "Mannington", "Martinsburg", "Midway", "Millstone", "Milton",
  "Mineral Wells", "Montgomery", "Moorefield", "Morgantown", "Moundsville",
  "Mount Clare", "Mount Hope", "Mount Lookout", "Mount Nebo", "Mount Storm",
  "Mullens", "New Cumberland", "New Martinsville", "Nitro", "Oak Hill",
  "Omar", "Ona", "Paden City", "Parkersburg", "Paw Paw",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < westVirginiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(westVirginiaCities[i]);
}

module.exports = { batches };
