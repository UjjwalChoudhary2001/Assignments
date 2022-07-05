const form = document.querySelector("form");
const section = document.querySelector("#main");
const t_date = document.querySelector("#t_date");
const tempdiv = document.querySelector("#temp");
const maxmin_tempdiv = document.querySelector("#maxmin_temp");
const visibilitydiv = document.querySelector("#visibility");
const base_Url = "https://api.openweathermap.org/data/2.5/weather?q=";
const h1 = document.createElement("h1");
const h2 = document.getElementById("city");
const h3 = document.getElementById("todays_weather");
document.body.style.backgroundImage =
  'url("https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg")';
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getWeather = (cityName) => {
  fetch(`${base_Url}${cityName}&appid=d0d74908db80099ace58782926b186a1&units=metric
  `)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const temp = data.main.temp;
      const mintemp = data.main.temp_min;
      const maxtemp = data.main.temp_max;
      const visibility = data.visibility / 1000;
      const weather = data.weather[0].description;
      const nameofcity = data.name;
      h2.innerText = `${nameofcity}, ${data.sys.country}`;
      //Date section of the code.
      var d = new Date();
      const t_date = document.getElementById("t_date");
      t_date.innerText = `${d.getDate()}  ${months[d.getMonth()]}  (${
        days[d.getDay()]
      }) , ${d.getFullYear()}`;

      tempdiv.innerText = ` ${temp} ℃  `;
      maxmin_tempdiv.innerText = ` ${mintemp} ℃(min) / ${maxtemp} ℃(max)`;
      visibilitydiv.innerText = `${visibility} Km `;

      h3.innerText = weather;

      if (h3.innerText.toLowerCase().includes("rain")) {
        document.body.style.backgroundImage =
          "url('https://images.pexels.com/photos/3394939/pexels-photo-3394939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
      } else if (h3.innerText.toLowerCase().includes("haze")) {
        document.body.style.backgroundImage =
          "url('https://www.brookings.edu/wp-content/uploads/2020/11/shutterstock_1558646858_small.jpg')";
      } else if (
        h3.innerText.toLowerCase().includes("broken") ||
        h3.innerText.toLowerCase().includes("scattered") ||
        h3.innerText.toLowerCase().includes("few clouds")
      ) {
        document.body.style.backgroundImage =
          'url("https://images.unsplash.com/photo-1589650719856-35843f317d65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")';
      } else if (h3.innerText.toLowerCase().includes("clear sky")) {
        document.body.style.backgroundImage =
          'url("https://wallpapercave.com/wp/wp4196184.jpg")';
      } else if (h3.innerText.toLowerCase().includes("overcast clouds")) {
        document.body.style.backgroundImage =
          "url('    https://www.thoughtco.com/thmb/I9G1xnUm4yBDZr2WNPfOHs0yIec=/1887x1415/smart/filters:no_upscale()/GettyImages-528903279-599d1549aad52b001107054d.jpg')";
      } else if (h3.innerText.toLowerCase().includes("smoke")) {
        document.body.style.backgroundImage =
          "url('https://i.cbc.ca/1.6108494.1628282889!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/smoke-calgary.jpg')";
      } else if (h3.innerText.toLowerCase().includes("mist")) {
        document.body.style.backgroundImage =
          "url('https://upload.wikimedia.org/wikipedia/commons/9/9d/%D0%97%D0%B0_%D1%81%D0%B5%D0%BB%D0%BE%D0%BC_2.jpg')";
      } else if (h3.innerText.toLowerCase().includes("drizzle")) {
        document.body.style.backgroundImage =
          "url('https://upload.wikimedia.org/wikipedia/commons/5/5b/Row_of_poplars_in_the_drizzle_-_geograph.org.uk_-_591822.jpg')";
      }
    })
    .catch((err) => {
      alert("Please enter a valid city.");
    });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityName = form.children[0].value;
  getWeather(cityName);
  form.children[0].value = "";
});
