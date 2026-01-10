// Get the date
let date = new Date();
// display to console for error handling
console.log(date);

// extract the current date info
let currentMonth = date.getMonth();
let currentDay = date.getDay();
let currentDate = date.getDate();
let currentYear = date.getFullYear();

let months = [
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
    "December"
]

let weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

// set the correct month
let title = document.getElementById("title");
title.innerHTML = months[currentMonth];

// update the calendar info
let habitTitle = document.getElementById("habitTitle");
habitTitle.onclick = function() {
    let habits = prompt("What's your habit?", habitTitle.innerHTML);
    if (habits.length == 0) {
        habitTitle.innerHTML = "Click to set your habit."
    } else {
        habitTitle.innerHTML = habits;
    }
}