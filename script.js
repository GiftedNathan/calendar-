// create a new date Object
// declare and initialize date, month, and year with the date object created 


let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();



const todaysDay = document.querySelector(".day");
const monthYear = document.querySelector(".month-year");

const previousMonth = document.querySelector(".prev-month");
const nextMonth = document.querySelector(".next-month");
let days = document.querySelector(".days");


const months = [
    "january", 
    "february", 
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
];

const updateCalendar = () => {
    if (month < 0 ) {
        date =  new Date(year, month);
        year = date.getFullYear;
        month = date.getMonth;
    }
    if (month > 11) {
        date =  new Date(year, month);
        year = date.getFullYear;
        month = date.getMonth;
    }
}
updateCalendar();

previousMonth.addEventListener("click", () => {
    month += -1;
    renderCalender();
    // updateCalendar();
});
nextMonth.addEventListener("click", () => {
    month += 1;
    renderCalender();
    // updateCalendar();
});



const  renderCalender = (params) => {
    // updateCalendar();
    todaysDay.innerHTML = day;
    monthYear.innerHTML = months[month]+", "+ year;

    let firstDayOfCurrentMonth = new Date(year, month, 1).getDay(); // No of first free days in current month
    let lastDateOfCurrentMonth = new Date(year, month + 1, 0).getDate(); // the last date of curent month
    let lastDaysOfCurrentMonth = new Date(year, month, lastDateOfCurrentMonth).getDay(); // No of free days  left at the end of the current month
    let lastDateOfPreviousMonth = new Date(year, month, 0).getDate(); // last day of the previous month
    let dayTag ="";

    console.log(firstDayOfCurrentMonth);
    console.log(lastDateOfCurrentMonth);
    console.log(lastDaysOfCurrentMonth);
    console.log(lastDateOfPreviousMonth);

    for (let i = firstDayOfCurrentMonth; i > 0 ; i--) {
        dayTag += `<li>${lastDateOfPreviousMonth - i + 1}</li>`;
    }
    
    
    for (let i = 1; i <= lastDateOfCurrentMonth; i++) {
        dayTag += `<li>${i}</li>`;
    }

    for (let i = lastDaysOfCurrentMonth; i < 6; i++) {
        dayTag += `<li>${i - lastDaysOfCurrentMonth + 1}</li>`;
    }

    days.innerHTML = dayTag;
    // updateCalendar();
}
renderCalender();
// console.log(nextMonth);
