const fetchData = (URL, option = null) => {
  if (option) {
    return fetch(URL, option).then(res => res.json());
  } else {
    return fetch(URL).then(res => res.json());
  }
};

const createMap = () => {
  const map = L.map("map").setView([0, 0], 2);
  L.tileLayer(
    "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=JESFcdfPGvH9Vd8eE5E1",
    {
      attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`
    }
  ).addTo(map);

  // fetchData(
  //   "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=France",
  //   {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
  //       "x-rapidapi-key": "8bb8e967eemsh8a6761ce1927604p1bcdb8jsn7a749ed9576c"
  //     }
  //   }
  // ).then(data => {
  //   const marker = L.marker([48.866699, 2.4833])
  //     .addTo(map)
  //     .bindPopup(
  //       `${data["data"]["covid19Stats"][0]["country"]}:<br>Cases: ${data["data"]["covid19Stats"][0]["confirmed"]} <br>Recoveries: ${data["data"]["covid19Stats"][0]["recovered"]}<br>Deaths: ${data["data"]["covid19Stats"][0]["deaths"]}`
  //     );
  //   marker.addEventListener("click", () => map.setView([48.866699, 2.4833], 3.4));
  // });

  // fetchData("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats", {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
  //     "x-rapidapi-key": "8bb8e967eemsh8a6761ce1927604p1bcdb8jsn7a749ed9576c"
  //   }
  // }).then(countryData => {
  //     debugger;
  //     countryData["data"]["covid19Stats"].forEach(dataNew => {
  //       debugger;
  //       let nameCountry;
  //       if (dataNew["province"]) {
  //         nameCountry = dataNew["province"];
  //       } else {
  //         nameCountry = dataNew["country"];
  //       }
  //       debugger;
  //       fetchData(
  //         `https://api.opencagedata.com/geocode/v1/json?q=${nameCountry}&key=e4c53fec8cd84372a9a23cfa112506ad`
  //       ).then(data => {
  //         debugger;
  //         if (data != undefined) {
  //           let long = Number(
  //             data["results"][0]["annotations"]["DMS"]["lng"].split("'")[1]
  //           );
  //           let lat = Number(
  //             data["results"][0]["annotations"]["DMS"]["lat"].split("'")[1]
  //           );
  //           const marker = L.marker([lat, long])
  //             .addTo(map)
  //             .bindPopup(
  //               `${dataNew["country"]}:<br>Cases: ${dataNew["confirmed"]} <br>Recoveries: ${dataNew["recovered"]}<br>Deaths: ${dataNew["deaths"]}`
  //             );
  //         }
  //       });
  //     });
  //   });
  // };

  fetchData(
    "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "8bb8e967eemsh8a6761ce1927604p1bcdb8jsn7a749ed9576c"
      }
    }
  ).then(countryData =>
    countryData["countries_stat"].forEach(country =>
      addCountryMarker(country, map)
    )
  );
};

const addCountryMarker = (countryData, map) => {
  const nameCountry = countryData["country_name"];
  fetchData(
    `https://api.opencagedata.com/geocode/v1/json?q=${nameCountry}&key=003d4d4170f54726a615eeb07ff54d3b`
  ).then(data => {
    data["results"][0]["geometry"]["lat"];
    data["results"][0]["geometry"]["lng"];
    if (data != undefined) {
      let long = Number(data["results"][0]["geometry"]["lng"]);
      let lat = Number(data["results"][0]["geometry"]["lat"]);
      const marker = L.marker([lat, long])
        .addTo(map)
        .bindPopup(
          `${countryData["country_name"]}:<br>Cases: ${countryData["cases"]} <br>Recoveries: ${countryData["total_recovered"]}<br>Deaths: ${countryData["deaths"]}`
        );
    }
  });
};

const searchBar = () => {
  const cities = [];
  fetchData(
    "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "8bb8e967eemsh8a6761ce1927604p1bcdb8jsn7a749ed9576c"
      }
    }
  ).then(data => {
    cities.push(...data["countries_stat"]);
  });

  const filterCities = wordToMatch => {
    return cities.filter(place => {
      const regex = new RegExp(wordToMatch, "gi");
      return place["country_name"].match(regex);
    });
  };
  const search = document.querySelector(".search");
  const suggest = document.querySelector(".suggestions");

  search.addEventListener("change", event => {
    displayRes(event);
  });

  search.addEventListener("keyup", event => displayRes(event));

  const displayRes = event => {
    if (search.value === "") {
      suggest.innerHTML = "";
    } else {
      const matchArr = filterCities(event.target.value);
      const html = matchArr
        .map(place => {
          const cityName = place.country_name;
          return `<li><span class="name">${cityName}:</span><span class="cases"> ${place["cases"]} cases</span></li>`;
        })
        .join("");
      suggest.innerHTML = html;
    }
  };
};
createMap();
searchBar();
