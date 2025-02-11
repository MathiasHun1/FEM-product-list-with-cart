import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

const fixPath = (pathsObject) => {
  const pathsCopy = { ...pathsObject };

  for (const key in pathsCopy) {
    pathsCopy[key] = pathsCopy[key].replace('./assets', '');
  }
  return pathsCopy;
};

const createItemsList = (rawData) => {
  const transformedData = rawData.map((item) => {
    return {
      ...item,
      id: uuidv4(),
      timesPicked: 0,
    };
  });

  transformedData.forEach((item) => {
    item.image = fixPath(item.image);
  });

  return transformedData;
};

const setPickedValue = (itemListing, itemName, addedCount) => {
  const itemListingCopy = _.cloneDeep(itemListing);
  const item = itemListingCopy.find((i) => i.name === itemName);

  item.timesPicked = addedCount;
  return itemListingCopy;
};

const updateItemsList = (itemsList, item) => {
  const existingItemIndex = itemsList.findIndex((i) => i.id === item.id);

  //append if item not exist yet
  if (existingItemIndex === -1) {
    return itemsList.concat(item);
  }

  return itemsList.map((i, index) => (index === existingItemIndex ? item : i));
};

export default {
  fixPath,
  createItemsList,
  setPickedValue,
  updateItemsList,
};
