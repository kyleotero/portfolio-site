function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        if(reveals[i].id === 'name') reveals[i].classList.add("nametextanim"), reveals[i+1].classList.add("desctextanim");
        if(reveals[i].id === 'langs') {
            reveals[i].classList.add("langanim");
            reveals[i+1].classList.add("langanim");
            reveals[i+2].classList.add("frameanim");
            reveals[i+3].classList.add("frameanim");
        }
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

function scrollfirst() {
    var element = document.getElementById("second");
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function scrollsecond() {
    var element = document.getElementById("third");
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function scrollthird() {
    var element = document.getElementById("fourth");
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}