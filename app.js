
let youtube;
document.getElementById('open').addEventListener("click", function () {
    let features = "menubar=no, scrollbars=yes, width=500, height=500, statuts=no, toolbar=no"
    youtube = window.open('https://www.youtube.com/', '', features)
    youtube.resizeTo(600, 700);
    youtube.moveBy(200, 200)
})

document.getElementById('close').addEventListener('click', function() {
    youtube.close();
})