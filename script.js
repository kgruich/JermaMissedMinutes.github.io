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
        back.id = "slidingRatChomp";
    }
    else if (back.id == "slidingRatChomp") {
        this.id = "slidingRatMonkaS";
    }
    else if (back.id == "slidingPluto") {
        this.id = "slidingRad";
    }
    else if (back.id == "slidingRad") {
        this.id = "slidingPluto";
    }
}