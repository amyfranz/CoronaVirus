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
  const imageSrc = medicalAdvice["image"];
  const videoSrc = medicalAdvice["video"];
  const date = new Date(medicalAdvice["created_at"]);
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const div = document.createElement("div");
  div.className = "info-card";

  // const divImg = document.createElement("div");
  // div.class = "info-card-img";

  const divImg = document.createElement("div");
  divImg.className = "info-card-img";
  const img = document.createElement("img");
  img.src = imageSrc;
  img.alt = "";
  img.className = "info-img";

  const divInfo = document.createElement("div");
  divInfo.className = "card-info";

  const divDate = document.createElement("div");
  divDate.className = "card-date";
  const spanDay = document.createElement("span");
  spanDay.innerText = weekdays[date.getDay()];
  const spanDate = document.createElement("span");
  spanDate.innerText = `${date.getDate()} ${date.toLocaleString("default", {
    month: "long"
  })} ${date.getFullYear()}`;

  const heading = document.createElement("h1");
  heading.className = "info-card-title";
  heading.innerText = title;
  const p = document.createElement("p");
  p.className = "info-card-text";
  p.innerHTML = `${content
    .split(" ")
    .splice(0, 20)
    .join(" ")}...`;
  const btn1 = document.createElement("a");
  btn1.className = "info-card-btn";
  btn1.id = medicalAdvice.id;
  btn1.href = "#";
  btn1.innerText = "Read More";
  divImg.append(img);
  divDate.append(spanDay, spanDate);
  divInfo.append(divDate, heading, p, btn1);
  div.append(divImg, divInfo);
  document.querySelector(".info-container").append(div);
  const links = document.querySelectorAll(".info-container a");
  links.forEach(link => {
    link.addEventListener("click", e => fetchShow(e));
  });
};

function fetchShow(event) {
  fetch(`http://localhost:3000/advices/${event.target.id}`)
    .then(res => res.json())
    .then(advice => {
      displayShow(advice);
    });
}

function displayShow(advice) {
  const container = document.querySelector(".show");
  const h1 = document.createElement("h1");
  h1.innerText = advice.title;
  const p = document.createElement("p");
  p.innerText = advice.content;
  const a = document.createElement("a");
  a.innerText = "Back";
  a.className = "back-btn";
  debugger;
  a.addEventListener("click", e => handleExit(e));
  container.append(h1, p, a);
  document.querySelector(".info-container").style.display = "none";
}

function handleExit(e) {
  document.querySelector(".info-container").style.display = "grid";
  document.querySelector(".show").innerHTML = "";
  fetchShow(e);
}

const renderIndex = data => {
  data.forEach(medicalAdvice => eachMedicalAdvice(medicalAdvice));
};

fetchData("http://localhost:3000/advices").then(renderIndex);
