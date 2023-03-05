let daysColums = document.querySelectorAll(".days > div p:last-of-type");

let days = {
    0 : "sun",
    1:"mon",
    2:"tue",
    3:"wed",
    4:"thu",
    5:"fri",
    6:"sat"
};
let toDay = new Date().getDay();

// make a loop to change the column color for current day
Array.from(daysColums).forEach((col)=>{
    col.previousElementSibling.classList.remove("active");
    if (col.innerText == days[toDay]){
        col.previousElementSibling.classList.add("active");
    }
})