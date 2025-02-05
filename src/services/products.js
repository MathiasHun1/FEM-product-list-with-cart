const baseUrl = '/data.json';

const getAll = async () => {
  try {
    const response = await fetch(baseUrl);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error happened in fetching data: ', error.message);
  }
};

export default {
  getAll,
};
