const fetchData = (URL, option = nil) => {
  if (option) {
    return fetch(URL, option).then(res => res.json);
  } else {
    return fetch(URL).then(res => res.json);
  }
};
