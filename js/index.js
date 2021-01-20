/*
    ##       ######     ##     ####     ######   ##  ##   ######
    ##       ##  ##   ##  ##   ##  ##     ##     ### ##   ##
    ##       ##  ##   ######   ##  ##     ##     ## ###   ##  ##
    ##       ##  ##   ##  ##   ##  ##     ##     ##  ##   ##  ##
    ######   ######   ##  ##   ####     ######   ##  ##   ######
*/
function loading() {
    var x = setTimeout(revealPage, 7000);
    
}
function revealPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("page").style.display = "block";
}

/* This is a very poorly made search function, I kinda made it at the last minute */
function searchProducts() {
    var input = document.getElementById("productSearch");
    var filter = input.value.toLowerCase();
    var nodes = document.getElementsByClassName('content');
  
    for (i = 0; i < nodes.length; i++) {
      if(nodes[i].innerText.toLowerCase().includes(filter) || nodes[i].innerHTML.toLowerCase().indexOf(filter)<-1) {
        nodes[i].style.display = "block";
      } else {
        nodes[i].style.display = "none";
      }
    }
}

/*
    ######   ######   ##  ##   ######     ##     ######   ######
    ##       ##  ##   ### ##     ##     ##  ##   ##         ##  
    ##       ##  ##   ## ###     ##     ######   ##         ##  
    ##       ##  ##   ##  ##     ##     ##  ##   ##         ##  
    ######   ######   ##  ##     ##     ##  ##   ######     ##  
*/

function openContactPage() {
    var contactBox = document.getElementById("contactBox");
    contactBox.style.display = "flex";
}

function closeContactPage() {
    var contactBox = document.getElementById("contactBox");
    contactBox.style.display = "none";
}

/*
    ######   ######   ######   ######   ######   ##  ##   ######   ######
    ##       ##         ##       ##       ##     ### ##   ##       ##    
    ######   ######     ##       ##       ##     ## ###   ##  ##   ######
        ##   ##         ##       ##       ##     ##  ##   ##  ##       ##
    ######   ######     ##       ##     ######   ##  ##   ######   ######
*/
/* Open Settings Page */
function openSettingsPage(page) {
    var settingsBox = document.getElementById("settingsBox");
    settingsBox.style.display = "flex";
    tabs(page);
}

/* Close Settings Page */
function closeSettingsPage() {
    var settingsBox = document.getElementById("settingsBox");
    settingsBox.style.display = "none";
}

/* Tab Query */
function tabs(index) {
    const tab = document.querySelectorAll(".tabShow");
    const tabButton = document.querySelectorAll(".tab");
    tab.forEach(function(node) {
        node.style.display = "none";
    });
    tab[index].style.display = "block";
}


/* Open Quiz Page */
function openQuizPage(page) {
    var quizBox = document.getElementById("quizBox");
    quizBox.style.display = "flex";
    quizTabs(page);
}

/* Close Quiz Page */
function closeQuizPage() {
    var quizBox = document.getElementById("quizBox");
    quizBox.style.display = "none";
}

/* Tab Query */
function quizTabs(index) {
    const tab = document.querySelectorAll(".tabQuizShow");
    tab.forEach(function(node) {
        node.style.display = "none";
    });
    tab[index].style.display = "block";
}




/*
    ######   ######   ##  ##   ######   ####       ##     ##
    ##       ##       ### ##   ##       ##  ##   ##  ##   ##
    ##  ##   ######   ## ###   ######   ####     ######   ##
    ##  ##   ##       ##  ##   ##       ##  ##   ##  ##   ##
    ######   ######   ##  ##   ######   ##  ##   ##  ##   ######
*/
/* When the user presses a key down (Change to switch if time available) */
document.onkeydown = function(evt) {
    var settingsBox = document.getElementById("settingsBox");
    var rrBox = document.getElementById("rigRundownBox");
    if(evt.key === "Escape") {
        contactBox.style.display = "none";
        settingsBox.style.display = "none";
        quizBox.style.display = "none";
        rrBox.style.display = "none";
    } else if(document.title === "Ultimate Players - Rig Rundown") {
        if(evt.key === "ArrowRight") {
            if(document.getElementById("rigRundownBox").style.display != "none") {
                increaseTab();
            }
        } else if(evt.key === "ArrowLeft") {
            if(document.getElementById("rigRundownBox").style.display != "none") {
                decreaseTab();
            }
        }
    } else {
        return;
    }
}

/* When the page is clicked, mostly voided with the if statements (Should change to a switch if needing more) */
window.onclick = function(event) {
    var settingsBox = document.getElementById("settingsBox");
    var rrBox = document.getElementById("rigRundownBox");
    if (event.target == contactBox) {
      contactBox.style.display = "none";
    } else if(event.target == settingsBox) {
        settingsBox.style.display = "none";
    } else if(event.target == rrBox) {
        rrBox.style.display = "none";
    } else if(event.target == quizBox) {
        
        quizBox.style.display = "none";
    }
}

/*
    ######   ######   ######   ##  ##   ######   ######   ######
    ##       ##  ##   ##  ##   ##  ##     ##     ##       ##    
    ##       ##  ##   ##  ##   ####       ##     ######   ######
    ##       ##  ##   ##  ##   ##  ##     ##     ##           ##
    ######   ######   ######   ##  ##   ######   ######   ######
*/

function firstJoin() {
    var firstVisit = readCookies().firstVisit;
    if(firstVisit == null) {
        openSettingsPage();
        document.cookie = "firstVisit=false"
    }
}

/* This function splits all of the cookies up and stores them */
function readCookies() {
    return cookies = document.cookie
        .split(";")
        .map(cookie => cookie.split("="))
        .reduce((accumulator, [key, value]) => 
            ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }),
        {});
}

/*
    ######   ##  ##   ######   ##  ##   ######   ######
      ##     ##  ##   ##       ######   ##       ##   
      ##     ######   ######   ##  ##   ######   ######
      ##     ##  ##   ##       ##  ##   ##           ##
      ##     ##  ##   ######   ##  ##   ######   ######
*/
function readTheme() {
    var theme = readCookies().theme
    var body = document.body;
    var select = document.getElementById("mode-switch");

    if(theme === "dark-mode") {
        if(!select.checked) {
            select.checked = true;
        } if(!body.classList.contains("dark-mode")) {
            body.classList.add("dark-mode");
        }
    } else {
        if(select.checked) {
            select.checked = false;
        }
    }
}

function readMotion() {
    var motion = readCookies().motion
    var body = document.body;
    var select = document.getElementById("motion-switch");
    var image = document.getElementById("zooming-image");

    if(motion === null) {
        if(!select.checked) {
            select.checked = true;
        } if(image.classList.contains("hueShifting")) {
            body.classList.toggle("hueShifting");
        }
    } else {
        if(select.checked) {
            select.checked = false;
        }
    }
}

/* Theme Selector in settings menu */
function changeTheme() {
    var body = document.body;
    var slider = document.getElementById("mode-switch");

    if (slider.checked) {
        body.classList.toggle("dark-mode");
        document.cookie = "theme=dark-mode";
    } else {
        body.classList.toggle("dark-mode");
        document.cookie = "theme=";
    }
}

/* Motion Selector in settings menu */
function changeMotion() {
    var body = document.body;
    var slider = document.getElementById("motion-switch");

    if (slider.checked) {
        document.cookie = "motion=none";
    } else {
        document.cookie = "motion=";
    }
}