// 1. 04/20/2024 13:45:30
// 2. Thu 20/4/2024 13.45
// 3. 2024-04-20 3:45 Thursday
// 4. April 20th, 2024 01.45.30 PM
// 5. 20 April 2024 at 01:45 PM


const date = new Date()
const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`
const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`
const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];


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
];

//**********************************************************************************************************************/
//**********************************************************************************************************************/

// 1st Pattern 
function dateFormat1(){
    const date1 = `${date.getMonth()+1} /${date.getDate()} /${date.getFullYear()}  ${hours}:${minutes}:${seconds}`
    
    console.log(date1);

    return dateFormat1;
}

module.exports = {dateFormat1};
//**********************************************************************************************************************/

// 2nd Pattern
function dateFormat2(){
    const date2 = `${days[date.getDay()]} ${date.getDate()} /${date.getMonth()+1} /${date.getFullYear()}  ${hours}:${minutes}`
    console.log(date2);
    return dateFormat2
}

module.exports = {dateFormat2};
//**********************************************************************************************************************/

// 3rd Pattern 
function dateFormat3(){
    const date3 = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${hours % 12 || 12}:${minutes} ${days[date.getDay()]}`
    console.log(date3);
    return dateFormat3
}

module.exports = {dateFormat3};
//**********************************************************************************************************************/

// 4. April 20th, 2024 01.45.30 PM
function dateFormat4(){
    const date4 = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${hours % 12 || 12 < 10 ? `0${hours % 12 || 12}` : hours % 12 || 12}.${minutes}.${seconds} ${ampm}`
    console.log(date4);
    return dateFormat4
}

module.exports = {dateFormat4};
//**********************************************************************************************************************/

// 5. 20 April 2024 at 01:45 PM
function dateFormat5(){
    const date5 = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} at ${hours % 12 || 12}:${minutes} ${ampm}`
    console.log(date5);
    return dateFormat5

}
module.exports = {dateFormat5};

