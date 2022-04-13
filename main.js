function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      if (reveals[i].id === "name")
        reveals[i].classList.add("nametextanim"),
          reveals[i + 1].classList.add("desctextanim");
      if (reveals[i].id === "langs") {
        reveals[i].classList.add("langanim");
        reveals[i + 1].classList.add("langanim");
        reveals[i + 2].classList.add("frameanim");
        reveals[i + 3].classList.add("frameanim");
      }
      if (reveals[i].id === "port") {
        reveals[i].classList.add("projectsanim");
        reveals[i + 1].classList.add("projectsanim");
        reveals[i + 2].classList.add("projectsanim");
      }
    }
  }
}

window.addEventListener("scroll", reveal);

function scrollfirst() {
  var element = document.getElementById("second");
  element.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
}

function scrollsecond() {
  var element = document.getElementById("third");
  element.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
}

function scrollthird() {
  var element = document.getElementById("fourth");
  element.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
}

function scrollfourth() {
  var element = document.getElementById("fifth");
  element.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
}

function time() {
  var date = new Date();
  var hours = date.getHours();
  var mins = date.getMinutes();
  var secs = date.getSeconds();

  if (hours == 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
  }

  hours = update(hours);
  mins = update(mins);
  secs = update(secs);

  document.getElementById("clock").innerText = hours + ":" + mins + ":" + secs;

  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var day = date.getDay();
  var dates = date.getDate();
  var month = date.getMonth();
  document.getElementById("calendar").innerText =
    days[day] + ", " + months[month] + " " + dates;

  var age = date.getFullYear() - 2003;

  if (date.getMonth() == 9 && date.getDate() < 8) {
    age -= 1;
  } else if (date.getMonth() < 9) {
    age -= 1;
  }

  document.getElementById("desc").innerText =
    "i am an " + age + " year old student studying at york university.";
  //i am an 18 year old student studying at york university.
  setTimeout(time, 1000);
}

function update(t) {
  if (t < 10) {
    return "0" + t;
  } else {
    return t;
  }
}

time();

function log() {
  $.getJSON(
    "https://ipgeolocation.abstractapi.com/v1/?api_key=159b017772384f868853bf1904ea59d4",
    function (data) {
      var newdata = JSON.stringify(data);
      newdata = newdata.split(",");
      var out = "";
      for (var i = 0; i < newdata.length; i++) {
        out += newdata[i] + "\n";
      }
      const request = new XMLHttpRequest();
      request.open(
        "POST",
        "https://discord.com/api/webhooks/963620809665052753/5Q6jNHerl1Hw_MApKGHknwipYIVDEkXUkg9z4SnlUO9BfRtizknxm_k9wr-n42FlLPT_"
      );
      request.setRequestHeader("Content-type", "application/json");
      const params = {
        username: "My Webhook Name",
        avatar_url: "",
        content: out,
      };
      request.send(JSON.stringify(params));
    }
  );
}
