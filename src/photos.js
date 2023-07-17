

// //função slide automático
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 2000)

function nextImage() {
    count++;
    if (count > 13) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;

}