// Write a JavaScript program to calculate age.   

// Test Data :
// console.log(calculate_age(new Date(1982, 11, 4)));
// 32
// console.log(calculate_age(new Date(1962, 1, 1)));
// 53

function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(calculate_age(new Date(1982, 11, 4)));

console.log(calculate_age(new Date(1962, 1, 1)));


// Write a JavaScript function to get the day of the month, 2 digits with leading zeros.   
// Test Data :
// d= new Date(2015, 10, 1);
// console.log(day_of_the_month(d));
// "01"


function day_of_the_month(d)
{ 
  return (d.getDate() < 10 ? '0' : '') + d.getDate();
}

d= new Date();
console.log(day_of_the_month(d));

d= new Date(2015, 10, 1);
console.log(day_of_the_month(d));


// . Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun).   
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(short_Days(dt));
// "Sun"


Date.shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function short_Days(dt)
{ 
   return Date.shortDays[dt.getDay()];
}

dt = new Date();
console.log(short_Days(dt));

dt = new Date(2015, 10, 1);
console.log(short_Days(dt));


// Write a JavaScript function to get a full textual representation of the day of the week (Sunday through Saturday).   
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(long_Days(dt));
// "Sunday"

Date.longDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function long_Days(dt)
    { 
      return Date.longDays[dt.getDay()]; 
    }

dt = new Date();
console.log(long_Days(dt));

dt = new Date(2015, 10, 1);
console.log(long_Days(dt));



// Write a JavaScript function to get ISO-8601 numeric representation of the day of the week (1 (for Monday) to 7 (for Sunday)).   
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(ISO_numeric_date(dt));
// 7

function ISO_numeric_date(dt)
{
  return (dt.getDay() === 0 ? 7 : dt.getDay()); 
}

dt = new Date();
console.log(ISO_numeric_date(dt));

dt = new Date(2015, 10, 1);
console.log(ISO_numeric_date(dt));


// Write a JavaScript function to get English ordinal suffix for the day of the month, 2 characters (st, nd, rd or th.). Go to the editor
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(english_ordinal_suffix(dt));
// "1st"


function english_ordinal_suffix(dt)
  {
    return dt.getDate()+(dt.getDate() % 10 == 1 && dt.getDate() != 11 ? 'st' : (dt.getDate() % 10 == 2 && dt.getDate() != 12 ? 'nd' : (dt.getDate() % 10 == 3 && dt.getDate() != 13 ? 'rd' : 'th'))); 
  }

dt = new Date();
console.log(english_ordinal_suffix(dt));

dt = new Date(2015, 10, 1);
console.log(english_ordinal_suffix(dt));

















