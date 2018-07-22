// 作品切换

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

//课程选择 

function lessonClick(obje) {
    if (obje.className != "lesson_click") {
        var parent = obje.parentElement;
        for (var i = 0; i < parent.children.length; i++) {
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

// 页码切换

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
        for (var i = 0; i < grandparent.children.length; i++) {
            if (grandparent.children[i].children[0].className == "num page_click") {
                grandparent.children[i].children[0].className = "num";
            }
        }
        obje.className = "num page_click";
    }
};

// 设置遮幕

function setBackground(obje) {
    obje.className = "background_color";
    obje.style.visibility = "visible";
};

function closeBackground(obje) {
    obje.className = "";
    obje.style.visibility = "hidden";
};

// 弹出新建窗口

function showPopup(w, h) {
    var popUp = document.getElementById("popupcontent");
    popUp.style.top = "200px";
    popUp.style.left = "400px";
    popUp.style.width = w + "px";
    popUp.style.height = h + "px";
    popUp.style.visibility = "visible";
    var id = document.getElementById("new");
    setBackground(id);
};

// 隐藏 div 窗口

function hidePopup() {
    var popUp = document.getElementById("popupcontent");
    popUp.style.visibility = "hidden";
    var id = document.getElementById("new");
    closeBackground(id);
};

// 弹出添加窗口

function sPopup(w, h) {
    var popUp = document.getElementById("popup");
    popUp.style.top = "130px";
    popUp.style.left = "300px";
    popUp.style.width = w + "px";
    popUp.style.height = h + "px";
    popUp.style.visibility = "visible";
    var id = document.getElementById("add");
    setBackground(id);
};

// 隐藏 div 窗口

function hPopup() {
    var popUp = document.getElementById("popup");
    popUp.style.visibility = "hidden";
    var id = document.getElementById("add");
    closeBackground(id);
};

// 成员选择

function membersClick(obje) {
    if (obje.className != "members_click") {
        var parent = obje.parentElement;
        for (var i = 0; i < parent.children.length; i++) {
            if (parent.children[i].className == "members_click") {
                parent.children[i].className = "";
            }
        }
        obje.className = "members_click";
    }
};

function membersSelect(obje) {
    if (obje.className == "") {
        obje.className = "members_select";
    }
};

function moveMembersSelect(obje) {
    if (obje.className == "members_select") {
        obje.className = "";
    }
};

function btAdd() {
    var list = document.getElementsByClassName("selected_members"),
        temp = document.createElement("li"),
        selected = document.getElementsByClassName("members");
    for(var i = 0; i < selected[0].children.length; i++) {
        if(selected[0].children[i].className == "members_click") {
            temp.innerText = selected[0].children[i].innerHTML;
            list[0].appendChild(temp);
        }
    }
}

function btDelete() {
    var list = document.getElementsByClassName("selected_members");
        for(var i = 0; i < list[0].children.length; i++) {
            list[0].removeChild(list[0].children[0]); 
        }
}

function btOk() {
    var list = document.getElementsByClassName("selected_members")[0].children,
        temp = document.getElementById("author");
        for(var i = 0; i < list.length; i++) {
            temp.value = temp.value + ", " + list[i].innerText; 
        }
        hPopup();
}

function nwSubmit() {
    var resourceName = document.getElementById("resource_name"),
        author = document.getElementById("author"),
        picture = document.getElementById("picture"),
        intro = document.getElementById("intro")
    if(resourceName.value != "" && author.value != "" && picture.value != "" && intro.value.length <= 140) {
        alert("提交成功!");
        console.log(resourceName.value);
        console.log(author.value);
        console.log(picture.value);
        console.log(intro.value.length);
        return false;
    }
    else {
        alert("提交失败，请注意填写！");
        console.log(resourceName.value);
        console.log(author.value);
        console.log(picture.value);
        console.log(intro.value.length);
        return false;
    };
    //  alert(resourceName.value);
    //  alert(author.value);
    //  alert(picture.value);
    //  alert(intro.value.length);
    
}