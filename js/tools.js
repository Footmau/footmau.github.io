function w3IncludeHTML(cb) {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    elmnt.innerHTML = this.responseText;
                    elmnt.removeAttribute("w3-include-html");
                    w3IncludeHTML(cb);
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
    if (cb) cb();
}

function makeBold(id) {
    var d = document.getElementById(id);
    d.style.fontWeight = "bold;"
}