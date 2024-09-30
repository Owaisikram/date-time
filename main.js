// 1. 04/20/2024 13:45:30
// 2. Thu 20/4/2024 13.45
// 3. 2024-04-20 3:45 Thursday
// 4. April 20th, 2024 01.45.30 PM
// 5. 20 April 2024 at 01:45 PM


const date = new Date()
const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()


// 1st Pattern 
const date1 = `${date.getMonth()+1} /${date.getDate()} /${date.getFullYear()}  ${hours}:${date.getMinutes()}:${date.getSeconds()}`
console.log(date);

// 2nd Pattern

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

const date2 = `${days[date.getDay()]} ${date.getDate()} /${date.getMonth()+1} /${date.getFullYear()}  ${hours}:${date.getMinutes()}
`
console.log(date2);


// 3rd Pattern 
const date3 = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${hours}:${date.getMinutes()} ${days[date.getDay()]}`
console.log(date3);

const months = [
    "januray",
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
]
// hours < 10 ? `0${hours}` : hours;
// 4. April 20th, 2024 01.45.30 PM
const date4 = `${months[date.getMonth()]} ${date.getDate()+"st"}, ${date.getFullYear()} ${hours < 10 ? `0${hours}` : hours}.${date.getMinutes()}.${date.getSeconds()}`
console.log(date4);
