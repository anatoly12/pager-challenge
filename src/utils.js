import { BASE_URL, OBJECT_TYPES, PEOPLE_FIELD_NAME } from './constants';

export const uniq = (arr) => {
  return Array.from(new Set(arr));
};

export const getPeople = (urls) => {
  return Promise.all(
    urls.map((characterUrl) => fetch(characterUrl).then((res) => res.json()))
  );
};

export const searchPeople = async (term) => {
  try {
    const requests = OBJECT_TYPES.map((endpoint) =>
      fetch(`${BASE_URL}/${endpoint}/?search=${encodeURIComponent(term)}`).then((res) =>
        res.json()
      )
    );
    const data = await Promise.all(requests);

    let urls = [];
    data.forEach((item, idx) => {
      if (item.count > 0) {
        item.results.forEach((el) => {
          const fieldName = PEOPLE_FIELD_NAME[OBJECT_TYPES[idx]];
          urls = [...urls, ...el[fieldName]];
        });
      }
    });
    const peopleResult = await getPeople(uniq(urls));
    return peopleResult;
  } catch (error) {
    console.log(error);
  }
};
