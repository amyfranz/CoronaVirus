const fetchData = (URL, option = nil) => {
  if (option) {
    return fetch(URL, option).then(res => res.json);
  } else {
    return fetch(URL).then(res => res.json);
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
    `https://api.opencagedata.com/geocode/v1/json?q=${nameCountry}&key=4df023b44de34d0fa736a9c2758c8581`
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

createMap();
