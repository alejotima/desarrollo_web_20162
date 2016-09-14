setInterval(function () {
    var date = new Date();
    var h = document.getElementById('h');
    var m = document.getElementById('m');
    var s = document.getElementById('s');
    h.innerHTML = date.getHours();
    m.innerHTML = date.getMinutes();
    s.innerHTML = date.getSeconds();
}, 1000);