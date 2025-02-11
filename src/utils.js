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

export default {
  fixPath,
  createItemsList,
};
