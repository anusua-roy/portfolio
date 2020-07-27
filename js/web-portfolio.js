function openMenu() {
    var x = document.getElementById('dropdown');
    if (x.style.display === 'none'|| x.style.display === '') {
        x.style.display = 'block';
    }
    else {
        x.style.display = 'none';
    }
}

function closeMenu() {
    document.getElementById('dropdown').style.display = 'none';
}
