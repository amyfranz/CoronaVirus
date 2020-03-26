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
    a.id = pastime.id;
    a.innerText = "Read More";
    card.append(i, h5, p, span, a);
    table.append(card);
  });
  pastimes.prepend(table);
  const links = document.querySelectorAll(".table a");
  links.forEach(link => {
    link.addEventListener("click", e => fetchShow(e));
  });
};

function fetchShow(event) {
  fetch(`http://localhost:3000/pastimes/${event.target.id}`)
    .then(res => res.json())
    .then(pastime => {
      displayShow(pastime);
    });
}

function displayShow(pastime) {
  const container = document.querySelector(".show");
  const h1 = document.createElement("h1");
  h1.innerText = pastime.title;
  const img = document.createElement("img");
  img.src = `images/${pastime.img_url}`;
  const p = document.createElement("p");
  p.innerText = pastime.content;
  const a = document.createElement("a");
  a.innerText = "Back";
  a.className = "back-btn";
  a.addEventListener("click", e => handleExit(e));
  container.append(h1, img, p, a);
  document.querySelector(".pastimes").style.display = "none";
}

function handleExit(e) {
  document.querySelector(".pastimes").style.display = "grid";
  document.querySelector(".show").innerHTML = "";
}

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  console.log(e.target);
  const body = {
    icon: e.target.icon.value,
    title: e.target.title.value,
    content: e.target.content.value,
    summary: e.target.summery.value,
    img_url: e.target.image.value
  };
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json"
    },
    body: JSON.stringify(body)
  };
  fetchData("http://localhost:3000/pastimes", option).then(console.log);
});
