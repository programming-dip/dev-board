const completeBtns = document.getElementsByClassName("complete-btn");
const activityLogContainer = document.getElementById("activity-log-texts-container");
const clearHistoryBtn = document.getElementById("clear-history-btn");

// updating total task
document.getElementById("left-tasks").innerText = "0"+completeBtns.length;

let indexCnt = 0;
// handle the completed btn click
for(const completeBtn of completeBtns){
    completeBtn.addEventListener("click", function(){
        
        indexCnt ++;
        alert("Board updated Successfully");
        if (indexCnt === completeBtns.length){
            alert("Congrates!! You have completed all the current tasks");
        }
        // disable the clicked btn
        completeBtn.classList.remove("btn-active");
        completeBtn.classList.add("btn-disabled");

        // get the number elements that need to be updated
        let doneTask = getTextElementNumValueById("done-tasks");
        let leftTask = getTextElementNumValueById("left-tasks");

        doneTask++;
        leftTask--;
        // update the numbers
        document.getElementById("done-tasks").innerText = doneTask;
        document.getElementById("left-tasks").innerText = "0"+leftTask;



        // get the h2 title from card
        const cardParentNode = completeBtn.parentNode.parentNode;
        const taskTitle = cardParentNode.getElementsByTagName("h2")[0].innerText;
        // get the time as string from utility function
        const currentTime = currentTimeInString();

        // update the activity log when complete btn is clicked
        const p = document.createElement("p");
        p.innerText = "You have Complete The Task "+taskTitle+" at "+currentTime;
        p.classList.add("bg-blue-50","rounded-md", "p-2", "mx-3", "my-4");
        activityLogContainer.appendChild(p);

        
        
    });
}


// handle the clear history btn click
clearHistoryBtn.addEventListener("click", function() { 
    activityLogContainer.innerHTML ="";
});


// handle top card 2 / blog card click
const blogCard = document.getElementById("blog-card");
blogCard.addEventListener("click", function() { 
    window.location = "blog.html";
});

// handle the theme change button
const themeChangeBtn = document.getElementById("theme-btn");
themeChangeBtn.addEventListener("click", function() { 
    // get the body 
    const body = document.getElementsByTagName("body")[0];
    
    // Generate random color
    const colorCode = "#"+Math.floor(Math.random()*12345678).toString(16);
    body.style.backgroundColor = colorCode;
    
});


// Current Day and Date
window.onload = function() {
    document.getElementById("current-day").innerText = getCurrentDayInString();
    document.getElementById("current-date").innerText = getCurrentDateInString();
    
}



