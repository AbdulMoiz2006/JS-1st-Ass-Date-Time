
var dayOfBirth = prompt("Please enter your day of birth");
var monthOfBirth = prompt("Please enter your month of birth");
var yearOfBirth = prompt("Please enter your year of birth");


var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth() + 1;
var currentDay = currentDate.getDate();

var age = currentYear - yearOfBirth;


if (currentMonth < monthOfBirth || (currentMonth == monthOfBirth && currentDay < dayOfBirth)) {
  age--;
}


alert("You are " + age + " years old.");
