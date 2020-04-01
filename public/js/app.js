console.log("Client side js is loaded!!!");

// fetch("http://localhost:3000/weather?location=london").then(response => {
//   response.json().then(data => {
//     if (data.error) {
//         console.log( data.error );
//     } else {
//       console.log(data);
//     }
//   });
// });

const form = document.querySelector("form");
const input = document.querySelector("input");
const weatherOutput = document.getElementById("weather");

form.addEventListener("submit", e => {
  e.preventDefault();
  const location = input.value;
  let currentWeather;

  fetch(`http://localhost:3000/weather?location=${location}`).then(response => {
    response.json().then(data => {
      currentWeather = data.weather;
      weatherOutput = document.write(currentWeather);
    });
  });


});
