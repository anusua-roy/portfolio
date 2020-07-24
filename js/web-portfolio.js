function change(obj) {
    var a = document.getElementsByClassName("active");
    for (i=0; i<a.length; i++) {
        a.item(i).className = "noColor";
    }
    obj.className = "active";
}
