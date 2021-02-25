let countries = [];
let states = [];
let cities = [];

fetch("./countries.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    countries = data;

    // console.log(data);

    countries.map((country) => {
      $("#countries").append(
        $("<option></option>").attr("value", country.id).text(country.name)
      );
    });
  });

$("#countries").on("change", (e) => {
  const { name, value } = e.target;

  console.log(name, value);
  renderStates(value);
});

$("#states").on("change", (e) => {
  const { name, value } = e.target;

  console.log(name, value);
  renderCity(value);
});
// countries
//  capital: "Kabul"
// currency: "AFN"
// emoji: "🇦🇫"
// emojiU: "U+1F1E6 U+1F1EB"
// id: 1
// iso2: "AF"
// iso3: "AFG"
// name: "Afghanistan"
// native: "افغانستان"
// phone_code: "93"

const renderStates = (countryCode) => {
  fetch("./states.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log("states", data)
      states = data;

      $("#states").empty();
      states.map((state) => {
        if (state.country_id == countryCode) {
          $("#states").append(
            $("<option></option>")
              .attr("value", state.state_code)
              .text(state.name)
          );
        }
      });
    });
};

const renderCity = (stateCode) => {
  fetch("./cities.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      cities = data;

      $("#cities").empty();
      console.log(stateCode);
      cities.map((city) => {
        console.log(city);
        if (city.state_code == stateCode) {
          console.log(city.state_code, stateCode);
          $("#cities").append(
            $("<option></option>").attr("value", city.id).text(city.name)
          );
        }
      });
      // console.log("cities", data)
    });
};

//   states
// country_code: "AF";
// country_id: 1;
// id: 3901;
// name: "Badakhshan";
// state_code: "BDS";

// cities
// country_code: "AF";
// country_id: 1;
// id: 52;
// latitude: "36.68333000";
// longitude: "71.53333000";
// name: "Ashkāsham";
// state_code: "BDS";
// state_id: 3901;
