const dark = document.getElementById("dark-toggle");
const light = document.getElementById("light-toggle");




if(dark) {
  dark.addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  });
}

if(light) {
  light.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  });
}


const time = document.getElementById("time");
setInterval(() => {
    const date = new Date();
    if (time) {
        time.innerHTML = `Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }
}, 1000);

const readMoreBtns = document.querySelectorAll('.read-more-btn');

$(document).ready(function() {

  $("#search-input").on("keyup", function() {
    const value = $(this).val().toLowerCase();

    $(".recommend-card").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });

    $(".recommend-card").each(function() {
      $(this).html($(this).html().replace(/<span class="highlight">(.*?)<\/span>/g, '$1'));
    });

    if (value) {
      $(".recommend-card:visible h3, .recommend-card:visible p").each(function() {
        const regex = new RegExp(`(${value})`, "gi");
        $(this).html($(this).text().replace(regex, "<span class='highlight'>$1</span>"));
      });
    }
  });
});
