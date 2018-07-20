function nav_select(obje) {
    if (obje.className == "class_works") {
        var parent = obje.parentElement;
        var temp = parent.getElementsByClassName("my_works")[0];
        temp.className = "class_works";
        temp.removeChild(temp.children[1]);
        var div = document.createElement("div");
        obje.className = "my_works";
        obje.appendChild(div);
    }
};

function lessonClick(obje) {
    if (obje.className != "lesson_click") {
        var parent = obje.parentElement;
        for(var i = 0; i < parent.children.length; i++) {
            if (parent.children[i].className == "lesson_click") {
                parent.children[i].className = "";
            }
        }
        obje.className = "lesson_click";
    }
};

function lessonSelect(obje) {
    if (obje.className == "") {
        obje.className = "lesson_select";
    }
};

function moveLessonSelect(obje) {
    if (obje.className == "lesson_select") {
        obje.className = "";
    }
};

function pageSelect(obje) {
    if (obje.className == "num") {
        obje.className = "num page_select";
    }
};

function movePageSelect(obje) {
    if (obje.className == "num page_select") {
        obje.className = "num";
    }
};

function pageClick(obje) {
    if (obje.className != "num page_click") {
        var parent = obje.parentElement;
        var grandparent = parent.parentElement;
        for(var i = 0; i < grandparent.children.length; i++) {
            if (grandparent.children[i].children[0].className == "num page_click") {
                grandparent.children[i].children[0].className = "num";
            }
        }
        obje.className = "num page_click";
    }
};

function newWork() {
    document.getElementsByClassName('new_work').classList.remove('hide');
}