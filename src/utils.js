import { v4 as uuidv4 } from 'uuid';

const fixPath = (pathsObject) => {
  const pathsCopy = { ...pathsObject };

  for (const key in pathsCopy) {
    pathsCopy[key] = pathsCopy[key].replace('./assets', '');
  }
  return pathsCopy;
};

const createItemListing = (data) => {
  const keys = data.map((item) => {
    return {
      itemKey: item.name,
      id: uuidv4(),
      timesPicked: 0,
    };
  });
  return keys;
};

const setPickedValue = (itemListing, itemName, addedCount) => {
  const item = itemListing.find((i) => i.itemKey === itemName);

  item.timesPicked = addedCount;
};

export default {
  fixPath,
  createItemListing,
  setPickedValue,
};
