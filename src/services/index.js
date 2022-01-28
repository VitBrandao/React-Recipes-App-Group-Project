function defaultApi(URL) {
  return fetch(URL)
    .then((result) => result.json())
    .then((json) => json);
}

export default defaultApi;
