var coll = document.getElementsByClassName("collapsible");

var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

var crackTime = new Audio('sounds/crackTime.mp3')
var pogSFX = new Audio('sounds/jermaPog.mp3')
var monkaS = new Audio('sounds/monkaS.mp3')
var sad = new Audio('sounds/sadStory.mp3')
var back = document.getElementsByClassName("slidingBackground");

function changeImageRats() {
    if (back[0].id == "slidingRatMonkaS") {
        back[0].setAttribute("id", "slidingRatChomp");
        crackTime.play();
    }
    else if (back[0].id == "slidingRatChomp") {
        back[0].setAttribute("id", "slidingRatMonkaS");
        monkaS.play();
    }
}

function changeImageJerma() {
    if (back[1].id == "slidingPluto") {
        back[1].setAttribute("id", "slidingRad");
        pogSFX.play();
    }
    else if (back[1].id == "slidingRad") {
        back[1].setAttribute("id", "slidingPluto");
        sad.play();
    }
}