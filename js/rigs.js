/*
    ####     ######   ######
    ##  ##     ##     ##    
    ####       ##     ##  ##
    ##  ##     ##     ##  ##
    ##  ##   ######   ######
*/
/* Open Rig Rundown Page */
function openRundownPage(page) {
    var rrBox = document.getElementById("rigRundownBox");
    rrBox.style.display = "flex";
    rrtabs(page);
}

/* Close Rig Rundown Page */
function closeRundownPage() {
    var rrBox = document.getElementById("rigRundownBox");
    rrBox.style.display = "none";
}

/* Tab Query */
function rrtabs(index) {
    const tab = document.querySelectorAll(".rrTabShow");
    tab.forEach(function(node) {
        node.style.display = "none";
    });
    tab[index].style.display = "block";
    document.cookie = "rigRundownTab="+index;
}

/* Basically adds one to the tab number to open the next */
function increaseTab() {
    var index = parseInt(readCookies().rigRundownTab);
    if(index != 7) {
        var indexIncrease = index + 1;
        rrtabs(indexIncrease);
    }
}

/*  Removes one to the tab number to open the next */
function decreaseTab() {
    var index = parseInt(readCookies().rigRundownTab);
    if(index != 0) {
        var indexIncrease = index - 1;
        rrtabs(indexIncrease);
    }
}
