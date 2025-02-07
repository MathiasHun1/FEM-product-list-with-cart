import _ from 'lodash';
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
  const itemListingCopy = _.cloneDeep(itemListing);
  const item = itemListingCopy.find((i) => i.itemKey === itemName);

  item.timesPicked = addedCount;
  return itemListingCopy;
};

export default {
  fixPath,
  createItemListing,
  setPickedValue,
};
