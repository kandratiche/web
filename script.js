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


