const montName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const daynumber = document.getElementById("day-number");
const year = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
montName.innerText = date.toLocaleString("en",{
    month: "long"
})

dayName.innerText = date.toLocaleDateString("en", {
    weekday: "long"
})

daynumber.innerText = date.getDate();

year.innerText = date.getFullYear();

