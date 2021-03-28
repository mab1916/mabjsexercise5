// Object Handling
// Q1 List the Properties
function ShowList() {
    var listOfProperties = {
        Name: "Ahmad",
        Class: "17",
        RollNo: "17402"
    };
    document.getElementById('list').innerHTML = "Open Web Console to See";
    console.log("list Of Properties: ", listOfProperties);
}
// Q2 Delete an Object
function Delete() {
    var listOfProperties = {
        Name: "Ahmad",
        Class: "17",
        RollNo: "17402"
    };
    document.getElementById('delete').innerHTML = "Open Web Console to See";
    console.log("list Of Properties Before Deleting an Object: ", listOfProperties);
    delete listOfProperties.RollNo;
    console.log("list Of Properties After Deleting an Object: ", listOfProperties);
}
// Q3 The Length of an Object
function Length() {
    var listOfProperties = {
        Name: "Ahmad",
        Class: "17",
        RollNo: "17402"
    };
    document.getElementById('length').innerHTML = "Open Web Console to See";
    console.log("The Length of an Object: ", Object.keys(listOfProperties).length);
}
// Q4 Reading Status
function Status() {
    var library = [ 
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true
        },
        {
            author: 'Suzanne Collins',
            title:  'Mockingjay: The Final Book of The Hunger Games', 
            readingStatus: false
        }];
        document.getElementById('status').innerHTML = "Open Web Console to See";
        console.log("Book Status: ", library);
}
// Q5 Volume of a Cylinder
function Cylinder() {
    var ra = document.getElementById('Radius').value;
    var he = document.getElementById('Height').value;
    if (ra !== "" && he !== "" && ra !== "e" && he !== "e") {
        var fourdecimals = {
                Radius: ra,
                Height: he,
                Pi: 3.14
            };
        document.getElementById('cylinder').innerHTML = fourdecimals.Pi * Math.pow(fourdecimals.Radius, 2) * fourdecimals.Height;
    } else {
        document.getElementById('cylinder').innerHTML = "Please Enter Both Radius and Height Numbers Only";
        
    }
        // console.log("Cylinder is: ", fourdecimals);
}
// Q6 Bubble Sorting
var numarr = [5, 4, 54.6, 122, 84, 98, 6.4, 9, 8.1, 323, -5, 23, 34, 213];
document.getElementById('numArray').innerHTML = numarr;
function BubbleSort(numarr) {   
    for(let i = 0; i < numarr.length; i++){
        for(let j = 0; j < (numarr.length - i - 1); j++){
            if(numarr[j] > numarr[j+1]) {
                var temp = numarr[j];
                numarr[j] = numarr[j + 1];
                numarr[j+1] = temp;
            }
        }
    }
document.getElementById('numArraySort').innerHTML = numarr;
}
// Q7 Subset of a String
function SubSet() {
    var subset = document.getElementById('subset').value;
    var len = subset.length;
    var newarr = [];
    for (let x = 0; x < len; x++) {
        for (let y = x + 1; y < len + 1; y++) {    
           newarr.push(subset.substring(x, y));
        }
    }
    document.getElementById('subsetshow').innerHTML = newarr;
}
// Q8 Clock
function Clock() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    hours = newTime(hours);
    minutes = newTime(minutes);
    seconds = newTime(seconds);
    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
    setTimeout(Clock);
}
function newTime(time) {
    if (time < 1) {time++;}
    return time;
}
// Q9 Area and Perimeter of a Circle
function Area() {
    var area = document.getElementById('Area').value;
    document.getElementById('area').innerHTML = 3.14 * Math.pow(area, 2);
}
function Perimeter() {
    var perimeter = document.getElementById('Perimeter').value;
    document.getElementById('perimeter').innerHTML = 2 * 3.14 * perimeter;
}
// Q10 Sort an Array of JavaScript objects 
function ShowObjectList() {
    var library = [ 
       {
           title:  'The Road Ahead',
           author: 'Bill Gates',
           libraryID: 1254
       },
       {
           title: 'Walter Isaacson',
           author: 'Steve Jobs',
           libraryID: 4264
       },
       {
           title: 'Mockingjay: The Final Book of The Hunger Games',
           author: 'Suzanne Collins',
           libraryID: 3245
       }];
    document.getElementById('SortObject').innerHTML = "Open Web Console to See";
    console.log("Sorting list Of Properties: ", library);
}
// Q11 Print all the Methods in an Object
function PrintAllMethods(obj) {
    var listOf = {
        Name: "Ahmad",
        Class: "17",
        RollNo: "17402"
    };
    document.getElementById('allmethods').innerHTML = Object.getOwnPropertyNames(listOf);
    }
// Date Handling
// Q2 Current Date
function CurrentDate() {
    var current = new Date();
    var d = current.getDay();
    var m = current.getMonth();
    var y = current.getFullYear();
    document.getElementById('curdateindash').innerHTML = "Date in Dashes: " + d + '-' + m + '-' + y;
    document.getElementById('curdateinslash').innerHTML = "| Date in Slashes: " + d + '/' + m + '/' + y;
}
// Q3 Number of Days in a Month
function MonthDays() {
    var monthnum = document.getElementById('monthnum').value;
    var monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var show = "";
    if (monthnum <= 12 && monthnum > 0 && monthnum !== '') {
        switch (monthnum) {
            case '1':
                show = "Month is " + monthnames[0] + " and it contain " + monthdays[0] + " Days";
                break;
            case '2':
                show = "Month is " + monthnames[1] + " and it contain " + monthdays[1] + " Days";
                break;
            case '3':
                show = "Month is " + monthnames[2] + " and it contain " + monthdays[2] + " Days";
                break;
            case '4':
                show = "Month is " + monthnames[3] + " and it contain " + monthdays[3] + " Days";
                break;
            case '5':
                show = "Month is " + monthnames[4] + " and it contain " + monthdays[4] + " Days";
                break;
            case '6':
                show = "Month is " + monthnames[5] + " and it contain " + monthdays[5] + " Days";
                break;
            case '7':
                show = "Month is " + monthnames[6] + " and it contain " + monthdays[6] + " Days";
                break;
            case '8':
                show = "Month is " + monthnames[7] + " and it contain " + monthdays[7] + " Days";
                break;
            case '9':
                show = "Month is " + monthnames[8] + " and it contain " + monthdays[8] + " Days";
                break;
            case '10':
                show = "Month is " + monthnames[9] + " and it contain " + monthdays[9] + " Days";
                break;
            case '11':
                show = "Month is " + monthnames[10] + " and it contain " + monthdays[10] + " Days";
                break;
            case '12':
                show = "Month is " + monthnames[11] + " and it contain " + monthdays[11] + " Days";
                break;
                
            default:
                show = "Please Enter Something";
                break;
        }
    } else {
        show = "Please Enter Month Number form 1 - 12"
    }
    document.getElementById('monthnumshow').innerHTML = show;
}
// Q4 Month Name
function Months() {
    var monthnums = document.getElementById('monthnums').value;
    var monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var show = "";
    if (monthnums <= 12 && monthnums > 0 && monthnums !== '') {
        switch (monthnums) {
            case '1':
                show = "Month is " + monthnames[0];
                break;
            case '2':
                show = "Month is " + monthnames[1];
                break;
            case '3':
                show = "Month is " + monthnames[2];
                break;
            case '4':
                show = "Month is " + monthnames[3];
                break;
            case '5':
                show = "Month is " + monthnames[4];
                break;
            case '6':
                show = "Month is " + monthnames[5];
                break;
            case '7':
                show = "Month is " + monthnames[6];
                break;
            case '8':
                show = "Month is " + monthnames[7];
                break;
            case '9':
                show = "Month is " + monthnames[8];
                break;
            case '10':
                show = "Month is " + monthnames[9];
                break;
            case '11':
                show = "Month is " + monthnames[10];
                break;
            case '12':
                show = "Month is " + monthnames[11];
                break;
                
            default:
                show = "Please Enter Something";
                break;
        }
    } else {
        show = "Please Enter Month Number form 1 - 12"
    }
    document.getElementById('monthnumsshow').innerHTML = show;
}
// Q9 Last Day of a Month
function MonthLast() {
    var months = document.getElementById('months').value;
    var monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var show = "";
    if (months <= 12 && months > 0 && months !== '') {
        switch (months) {
            case '1':
                show = "Month is " + monthnames[0] + " and its Last Day is " + monthdays[0];
                break;
            case '2':
                show = "Month is " + monthnames[1] + " and its Last Day is " + monthdays[1];
                break;
            case '3':
                show = "Month is " + monthnames[2] + " and its Last Day is " + monthdays[2];
                break;
            case '4':
                show = "Month is " + monthnames[3] + " and its Last Day is " + monthdays[3];
                break;
            case '5':
                show = "Month is " + monthnames[4] + " and its Last Day is " + monthdays[4];
                break;
            case '6':
                show = "Month is " + monthnames[5] + " and its Last Day is " + monthdays[5];
                break;
            case '7':
                show = "Month is " + monthnames[6] + " and its Last Day is " + monthdays[6];
                break;
            case '8':
                show = "Month is " + monthnames[7] + " and its Last Day is " + monthdays[7];
                break;
            case '9':
                show = "Month is " + monthnames[8] + " and its Last Day is " + monthdays[8];
                break;
            case '10':
                show = "Month is " + monthnames[9] + " and its Last Day is " + monthdays[9];
                break;
            case '11':
                show = "Month is " + monthnames[10] + " and its Last Day is " + monthdays[10];
                break;
            case '12':
                show = "Month is " + monthnames[11] + " and its Last Day is " + monthdays[11];
                break;
                
            default:
                show = "Please Enter Something";
                break;
        }
    } else {
        show = "Please Enter Month Number form 1 - 12"
    }
    document.getElementById('monthsshow').innerHTML = show;
}
// Q10 Yesterday Day
function Yesterday() {
    var monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = new Date();
    var d = day.getDate();
    var m = day.getMonth();
    var y = day.getFullYear();
    var show = "Yesterday was " + d-1 + '/' + monthnames[m] + '/' + y;
    document.getElementById('yesterdayshow').innerHTML = show;
}
// Q13 Number of Minutes in Hours and Minutes
function Minutes() {
    var mins = document.getElementById('minutes').value;
    var show = "";
    var hours = mins/60;
    var minutes = mins%60;
    if (mins > 0) {
        show = "Hours are " + parseInt(hours) + " and Minutes are " + minutes; 
    } else {
        show = "Please Do Not Enter a Negative Number";
    }
    document.getElementById('minuteshow').innerHTML = show;
}
// Q14 Amount of Days of a Year
function AmountofDays() {
    var amountofdays = document.getElementById('amountofdays').value;
    var show = '';
    if (amountofdays < 1900 || amountofdays > 2021) {
        show = "Please Enter Year Between 1900 - 2021";
    } else {
        switch (amountofdays) {
            case '1904':
                show="It Contains 366 Days";
                break;
        
            case '1908':
                show="It Contains 366 Days";
                break;
        
            case '1912':
                show="It Contains 366 Days";
                break;
        
            case '1916':
                show="It Contains 366 Days";
                break;
        
            case '1920':
                show="It Contains 366 Days";
                break;
        
            case '1924':
                show="It Contains 366 Days";
                break;
        
            case '1928':
                show="It Contains 366 Days";
                break;
        
            case '1932':
                show="It Contains 366 Days";
                break;
        
            case '1936':
                show="It Contains 366 Days";
                break;
        
            case '1940':
                show="It Contains 366 Days";
                break;
        
            case '1944':
                show="It Contains 366 Days";
                break;
        
            case '1948':
                show="It Contains 366 Days";
                break;
        
            case '1952':
                show="It Contains 366 Days";
                break;
        
            case '1956':
                show="It Contains 366 Days";
                break;
        
            case '1960':
                show="It Contains 366 Days";
                break;
        
            case '1964':
                show="It Contains 366 Days";
                break;
        
            case '1968':
                show="It Contains 366 Days";
                break;
        
            case '1972':
                show="It Contains 366 Days";
                break;
        
            case '1976':
                show="It Contains 366 Days";
                break;
        
            case '1980':
                show="It Contains 366 Days";
                break;
        
            case '1984':
                show="It Contains 366 Days";
                break;
        
            case '1988':
                show="It Contains 366 Days";
                break;
        
            case '1992':
                show="It Contains 366 Days";
                break;
        
            case '1996':
                show="It Contains 366 Days";
                break;
        
            case '2000':
                show="It Contains 366 Days";
                break;
        
            case '2004':
                show="It Contains 366 Days";
                break;
        
            case '2008':
                show="It Contains 366 Days";
                break;
        
            case '2012':
                show="It Contains 366 Days";
                break;
        
            case '2016':
                show="It Contains 366 Days";
                break;
        
            case '2020':
                show="It Contains 366 Days";
                break;
        
            default:
                show="It Contains 365 Days";
                break;
        }
    }
    document.getElementById('amountofdaysshow').innerHTML = show;
}
function startofweek(dt) {
    var dif = (dt.getDay() === 0 ? -6 : 1);
    return new Date(dt.setDate(dif));
}
// Q50 First Date Of the Week
var week = new Date();
var firstweek = week.getDate() - week.getDay() +  (week.getDay() === 0 ? -6 : 1);
var firstweekdate = new Date(week.setDate(firstweek));
document.getElementById('weekstart').innerHTML = firstweekdate;
// Q50 Last Date Of the Week
var lastweek = week.getDate() - (week.getDay() - 1) +  6;
var lastweekdate = new Date(week.setDate(lastweek));
document.getElementById('weekend').innerHTML = lastweekdate;
// Q52 First Date Of the Month
var month = new Date();
var firstmonthdate = new Date(month.getFullYear(), month.getMonth() , 1);
document.getElementById('monthstart').innerHTML = firstmonthdate;
// Q53 Last Date Of the Month
var lastmonthdate = new Date(month.getFullYear(), month.getMonth() + 1, 0);
document.getElementById('monthend').innerHTML = lastmonthdate;