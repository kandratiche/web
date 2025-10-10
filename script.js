const themeBtn = document.getElementById("theme-toggle");

if(themeBtn) {
  themeBtn.addEventListener("click", () => {
    console.log('theme')
    document.body.classList.toggle("dark-theme");
  });
}

const time = document.getElementById("time");
setInterval(() => {
    const date = new Date();
    if (time) {
        time.innerHTML = `Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }
}, 1000);


