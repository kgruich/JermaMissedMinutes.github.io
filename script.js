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

var back = document.getElementsByClassName("slidingBackground");

var j;

function changeImage() {
    for (j = 0; j < back.length; j++) {
        if (back[j].id == "slidingRatMonkaS") {
            back[j].setAttribute("id", "slidingRatChomp");
        }
        else if (back[j].id == "slidingRatChomp") {
            back[j].setAttribute("id", "slidingRatMonkaS");
        }
        else if (back[j].id == "slidingPluto") {
            back[j].setAttribute("id", "slidingRad");
        }
        else if (back[j].id == "slidingRad") {
            back[j].setAttribute("id", "slidingPluto");
        }
    }
}