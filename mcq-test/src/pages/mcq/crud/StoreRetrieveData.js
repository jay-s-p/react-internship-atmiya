
const storeData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

const retrieveData = (key) => {
  const value = localStorage.getItem(key);
  console.log(value);
  return value ? JSON.parse(value) : null;
}

export {storeData, retrieveData}