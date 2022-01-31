function defaultApi(URL) {
  return fetch(URL)
    .then((result) => result.json())
    .then((json) => json)
    .catch((e) => console.log(e));
}

export default defaultApi;
