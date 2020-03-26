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
  btn1.href = "#";
  btn1.innerText = "Read More";
  divImg.append(img);
  divDate.append(spanDay, spanDate);
  divInfo.append(divDate, heading, p, btn1);
  div.append(divImg, divInfo);
  document.querySelector(".info-container").append(div);

  const btn2 = document.querySelector("#back");

  const h1 = document.querySelector("#title-heading");
  h1.innerText = title;

  const p2 = document.querySelector("#content");
  p2.innerHTML = content;

  const source = document.querySelector("#corona-video-source");
  source.src = videoSrc;

  document.querySelector(".show").style.display = "none";

  btn1.addEventListener("click", e => {
    document.querySelector(".med-info").style.display = "none";
    document.querySelector(".show").style.display = "flex";
  });
  btn2.addEventListener("click", () => {
    document.querySelector(".show").style.display = "none";
    document.querySelector(".med-info").style.display = "flex";
  });
};

{
  /*
      <a href="#" class="info-card-btn">Back</a>
      <h1 class="info-card-title"></h1>
      <p class="info-card-text"></p>
      <video src=""></video>
  
  <div class="info-container"> 
  <div class="info-card">
  <div class="info-card-img">
  </div>
  <div class="card-info">
    <div class="card-date">
      <span>Sunday</span>
      <span>18th March</span>
    </div>
    <h1 class="info-card-title">Quarantine Properly</h1>
    <p class="info-card-text">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt cumque hic
      nesciunt ducimus id distinctio reiciendis, ipsum sint tempora sequi aut!
      Minima, eos.
    </p>
    <a href="#" class="info-card-btn">
      Read More
    </a>
  </div>
</div>; */
}

const renderIndex = data => {
  data.forEach(medicalAdvice => eachMedicalAdvice(medicalAdvice));
};

fetchData("http://localhost:3000/advices").then(renderIndex);
