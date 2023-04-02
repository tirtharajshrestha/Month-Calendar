const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

const monthInx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
//const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;    //  for week starting from Monday
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay();          // for week starting from Sunday

//console.log(firstDay);


const months = [
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

monthEl.innerText = months[monthInx];           //print the month
fullDateEl.innerText = new Date().toDateString();       //print the full date

let days = "";

for (let i = firstDay; i > 0; i--){
    days += `<div class="empty"></div>`;
}

for (let i=1; i<=lastDay; i++){
    if(i === new Date().getDate()){
        days += `<div class="today">${i}</div>`;
    } else {
    days += `<div>${i}</div>`;
    }
}

daysEl.innerHTML = days;