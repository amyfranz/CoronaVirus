fetch("http://localhost:3000/pastimes")
  .then(res => res.json())
  .then(data => renderPastimes(data))
  .catch(err => console.log(err));

function renderPastimes(data) {
  const pastimes = document.querySelector(".pastimes");
  const table = document.createElement("div");
  table.className = "table";

  data.forEach(pastime => {
    console.log(pastime);
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
    card.append(i, h5, p, span, a);
    table.append(card);
  });
  pastimes.append(table);
}
