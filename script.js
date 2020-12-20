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
var noLifeNerd = new Audio('sounds/noLifeNerd.mp3')
var back = document.getElementsByClassName("slidingBackground");
var j;

function changeImage() {
    for (j = 0; j < back.length; j++) {
        if (back[j].id == "slidingRatMonkaS") {
            back[j].setAttribute("id", "slidingRatChomp");
            crackTime.play();
        }
        else if (back[j].id == "slidingRatChomp") {
            back[j].setAttribute("id", "slidingRatMonkaS");
            monkaS.play();
        }
        else if (back[j].id == "slidingPluto") {
            back[j].setAttribute("id", "slidingRad");
            pogSFX.play();
        }
        else if (back[j].id == "slidingRad") {
            back[j].setAttribute("id", "slidingPluto");
            noLifeNerd.play();
        }
    }
}