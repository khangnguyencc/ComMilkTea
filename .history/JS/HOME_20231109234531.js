// JS cho thông tin quán 
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplays) => {
    let startVlue = 0;
    let endVlue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval / endVlue)
});