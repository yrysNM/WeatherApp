export const getItem = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key)!);
  } catch (e) {
    console.log("Error getting data from localStorage", e);
    return null;
  }
};

export const setItem = <T>(key: string, data: T) => {
  try {
    return localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.log(`Error soving data in localStorage`, e);
  }
};
