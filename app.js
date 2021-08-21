const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


function makeWordCloud(words) {
  $('.teaching-domains').jQCloud(words, {delay: 120});
}

function displayWordCloud() {
  var count = 1;
  $(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 2700; // set to whatever you want it to be
    var words = makeWords();
    if (y_scroll_pos > scroll_pos_test && count <= 1) {
      makeWordCloud(words);
      count++;
    }
  });
}

