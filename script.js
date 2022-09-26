// create a new date Object
// declare and initialize date, month, and year with the date object created 

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

// selecting all the html elements that needs to be dynamically updated with values 
const todaysDay = document.querySelector(".day");
const monthYear = document.querySelector(".month-year");

const previousMonthButton = document.querySelector(".prev-month");
const nextMonthButton = document.querySelector(".next-month");
let days = document.querySelector(".days");

// creating an array of months with value and keys that corresponds to the value of date.getMonth()
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


// add click event listiner to the previous and next button and call in the calendar function

previousMonthButton.addEventListener("click", () => {
    month += -1;
    renderCalender();
});
nextMonthButton.addEventListener("click", () => {
    month += 1;
    renderCalender();
});


// a function to update calender when it month get past december and january
const updateCalendar = () => {
    if (month < 0 ) {
        date =  new Date(year, month);
        year = date.getFullYear();
        month = date.getMonth();
    }
    if (month > 11) {
        date =  new Date(year, month);
        year = date.getFullYear();
        month = date.getMonth();
    }
}


const  renderCalender = (params) => {

    updateCalendar();

    todaysDay.innerHTML = day;
    monthYear.innerHTML = months[month]+", "+ year;

    let firstDayOfCurrentMonth = new Date(year, month, 1).getDay(); // No of first free days in current month
    let lastDateOfCurrentMonth = new Date(year, month + 1, 0).getDate(); // the last date of curent month
    let lastDaysOfCurrentMonth = new Date(year, month, lastDateOfCurrentMonth).getDay(); // No of free days  left at the end of the current month
    let lastDateOfPreviousMonth = new Date(year, month, 0).getDate(); // last day of the previous month
    let dayTag ="";

    // first fill calendar blank spaces with days from previous month  
    for (let i = firstDayOfCurrentMonth; i > 0 ; i--) {
        dayTag += `<li class="inactive">${lastDateOfPreviousMonth - i + 1}</li>`;
    }
    
    // generating the  days for curent month
    for (let i = 1; i <= lastDateOfCurrentMonth; i++) {

        let isToday = ""; // this is an empty class for
        
        if (i === day && month === new Date().getMonth()) {
            isToday = "active" ;
        }

        dayTag += `<li class="${isToday}">${i}</li>`;

    }

    // fill empty spaces at the end of calendar with days from next month
    for (let i = lastDaysOfCurrentMonth; i < 6; i++) {
        dayTag += `<li class="inactive">${i - lastDaysOfCurrentMonth + 1}</li>`;
    }

    days.innerHTML = dayTag;
}
renderCalender();

