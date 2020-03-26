const fetchData = (URL, option = null) => {
  if (option) {
    return fetch(URL, option).then(res => res.json());
  } else {
    return fetch(URL).then(res => res.json());
  }
};

fetchData("http://localhost:3000/pastimes")
  .then(data => renderPastimes(data))
  .catch(err => console.log(err));

const renderPastimes = data => {
  const pastimes = document.querySelector(".pastimes");
  const table = document.createElement("div");
  table.className = "table";

  data.forEach(pastime => {
    const card = document.createElement("div");
    card.className = "card";
    const i = document.createElement("i");
    i.className = "fas fa-running";
    const h5 = document.createElement("h5");
    h5.className = "card-head";
    h5.innerText = pastime.title;
    const p = document.createElement("p");
    p.innerText = pastime.summary;
    const span = document.createElement("span");
    span.innerText = pastime.content;
    span.className = "pastime-duration";
    const a = document.createElement("a");
    a.className = "pastime-btn";
    a.innerText = "Read More";
    const a1 = document.querySelector(".back-btn");
    const title = document.querySelector("#title");
    title.innerText = pastime.title;
    const content = document.querySelector(".content");
    content.innerText = pastime.content;
    const image = document.querySelector("img");
    image.src = `images/${pastime.img_url}`;
    card.append(i, h5, p, span, a);
    table.append(card);
    document.querySelector(".show").style.display = "none";
    a.addEventListener("click", () => {
      document.querySelector(".index").style.display = "none";
      document.querySelector(".show").style.display = "flex";
    });
    a1.addEventListener("click", () => {
      console.log("hi");
      document.querySelector(".show").style.display = "none";
      document.querySelector(".index").style.display = "flex";
    });
  });
  pastimes.append(table);
};
