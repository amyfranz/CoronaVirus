const fetchData = (URL, option = null) => {
  if (option) {
    return fetch(URL, option).then(res => res.json());
  } else {
    return fetch(URL).then(res => res.json());
  }
};
const eachMedicalAdvice = medicalAdvice => {
  const title = medicalAdvice["title"];
  const content = medicalAdvice["content"];
  const image = medicalAdvice["image"];
  const video = medicalAdvice["video"];
  const date = medicalAdvice["created_at"];
};

const renderIndex = data => {
  data.forEach(medicalAdvice => eachMedicalAdvice(medicalAdvice));
};

fetchData("http://localhost:3000/advices").then(renderIndex);
