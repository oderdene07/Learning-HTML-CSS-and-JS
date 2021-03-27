const toggle = document.querySelector(".toggle");
var months = [
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
var days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
toggle.addEventListener("click", function (e) {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});
function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const divTime = document.querySelector(".time");
  const divDate = document.querySelector(".date");
  const divSeconds = document.querySelector(".needle--second");
  const divMinutes = document.querySelector(".needle--minute");
  const divHours = document.querySelector(".needle--hour");
  if (seconds < 10) var showseconds = "0" + seconds;
  else showseconds = seconds;
  divTime.innerHTML =
    hoursForClock + ":" + minutes + ":" + showseconds + " " + ampm;
  divDate.innerHTML =
    days[day] + ", " + months[month] + " " + "<span>" + date + "</span>";
  divSeconds.style.transform =
    "translate(-50%, -100%) rotate(" + seconds * 6 + "deg)";
  divMinutes.style.transform =
    "translate(-50%, -100%) rotate(" + (minutes * 6 + seconds / 10) + "deg)";
  divHours.style.transform =
    "translate(-50%, -100%) rotate(" +
    (hours * 30 + minutes * 0.5 + (seconds * 3) / 360) +
    "deg)";
  setTimeout("setTime()", 1000);
}

setTime();
