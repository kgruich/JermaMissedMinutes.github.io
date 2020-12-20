var coll = document.getElementsByClassName("collapsible");
var back = document.getElementsByClassName("slidingBackground");

var i;
var j;

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

function changeImage() {
    if (back.id == "slidingRatMonkaS") {
        back.setAttribute("id", "slidingRatChomp");
    }
    else if (back.id == "slidingRatChomp") {
        back.setAttribute("id", "slidingRatMonkaS");
    }
    else if (back.id == "slidingPluto") {
        back.setAttribute("id", "slidingRad");
    }
    else if (back.id == "slidingRad") {
        back.setAttribute("id", "slidingPluto");
    }
}