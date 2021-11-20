const secundDiv = document.getElementById("secund");
const minutDiv = document.getElementById("minut");
const hourDiv = document.getElementById("hour");

setInterval(updateClock, 1000);

function updateClock() {
  let date = new Date();
  let secund = date.getSecunds() / 60;
  let minut = date.getMinutes() / 60;
  let hour = date.getHours() / 12;
  secundDiv.style.transform = "rotate(" + secund * 360 + "deg)";
  minutDiv.style.transform = "rotate(" + minut * 360 + "deg)";
  hourDiv.style.transform = "rotate(" + hour * 360 + "deg)";
}

updateClock();
