function change(obj) {
    var a = document.getElementsByClassName("active link");
    for (i=0; i<a.length; i++) {
        a.item(i).className = "noColor link";
    }
    obj.className = "active link";
}

function dchange(obj) {
    var a = document.getElementsByClassName("dactive");
    for (i=0; i<a.length; i++) {
        a.item(i).className = "nodColor";
    }
    obj.className = "dactive";
}

function openMenu() {
    var x = document.getElementById('dropdown');
    if (x.style.display === 'none'|| x.style.display == '') {
        x.style.display = 'block';
    }
    else {
        x.style.display = 'none';
    }
}
