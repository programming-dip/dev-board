// function to get text Element's number value by id
function getTextElementNumValueById(id){
    const element = document.getElementById(id);
    return parseInt(element.innerText);
}

// function to get text Elements text value by id
function getTextElementValueById(id){
    return document.getElementById(id).innerText;
}

// function to get current time and return it as a string in 12H format
function currentTimeInString() {
    const d = new Date();
    const hr = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    let timeString ="";

    if(hr === 0) {
        timeString = hr+12+":"+min+":"+sec+" AM";
        
     }
     else if(hr < 12 ) {
        timeString = hr+":"+min+":"+sec+" AM";
        
     }else if(hr=== 12) {
        timeString = hr+":"+min+":"+sec+" PM";
        
     }else {
        timeString = hr-12+":"+min+":"+sec+" PM";
        
     }

     return timeString;

}


 // function to get current date and return it as a string in MMM 00 0000 format

 function getCurrentDateInString(){
     const d = new Date();
     const month = d.getMonth();
     const date = d.getDate();
     const year = d.getFullYear();

     const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

     const dateInStr=monthNames[month]+" "+date.toString()+" "+year.toString();
     return dateInStr;

 }


//  function to get current day
function getCurrentDayInString() {
    const d = new Date();
    const day = d.getDay();
    const daysName = ["Sun","Mon","Tue","Wed","Thr","Fri","Sat"];
    const dayInStr = daysName[day];
    return dayInStr;
}
