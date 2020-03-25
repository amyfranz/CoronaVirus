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
  const video = medicalAdvice["video"];
  const date = medicalAdvice["created_at"];

  const div = document.createElement("div");
  div.class = "info-card";

  // const divImg = document.createElement("div");
  // div.class = "info-card-img";

  const divImg = document.createElement("div");
  div.class = "info-card-img";
  const img = document.createElement("img");
  img.src = imageSrc;
  img.alt = "";
  img.class = "info-img";

  const divInfo = document.captureEvent("div");
  divInfo.class = "info-card-img";

  const divDate = document.captureEvent("div");
  divDate.class = "card-date";
  const spanDay = document.captureEvent("span");
  debugger;
  spanDay.innerText = date.getDay();
  const spanDate = document.captureEvent("span");
  spanDate.innerText = date.getDay();
};

{
  /* <div class="info-card">
  <div class="info-card-img">
    <img src="images/stock-image.jpg" alt="" class="info-img" />
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

fetchData("https://localhost:3000/advices").then(renderIndex);
