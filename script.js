var coll = document.getElementsByClassName("collapsible");
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
    if (document.getElementByClassName("slidingBackground").id = "slidingRatMonkaS") {
        this.id = "slidingRatChomp";
    }
    else if (document.getElementByClassName("slidingBackground").id = "slidingRatChomp") {
        this.id = "slidingRatMonkaS";
    }
    else if (document.getElementByClassName("slidingBackground").id = "slidingPluto") {
        this.id = "slidingRad";
    }
    else if (document.getElementByClassName("slidingBackground").id = "slidingRad") {
        this.id = "slidingPluto";
    }
}