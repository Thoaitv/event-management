let closeBut = document.getElementsByClassName('close')[0]
let modal = document.getElementsByClassName('modal-cont')[0]
let delegate = document.getElementsByClassName('delegate')[0]
let box = document.getElementsByClassName('box')[0]

//close
function x() {
    modal.style.display = "none";
    // box.style.display = "block";

}
closeBut.onclick = x;

delegate.onclick = function () {
    modal.style.display = "block";
    // box.style.display = "none";
}
window.onclick = function (e) {
    if (e.target.className === 'modal-cont') {
        e.target.style.display = 'none';
        // box.style.display = "block";

    }
}
function preview() {
    document.getElementById('frame').style.display = "block";
    frame.src = URL.createObjectURL(event.target.files[0]);
}
let frame1 = document.getElementById('frame1')
function preview1() {
    console.log(frame.src)
    frame1.src = URL.createObjectURL(event.target.files[0]);
}
function preview2() {
    console.log(frame)
    frame.src = URL.createObjectURL(event.target.files[0]);
}

// QR
let closeBtnQR = document.getElementsByClassName('close-qr')[0]
let modalQR = document.getElementsByClassName('modal-cont-qr')[0]
let btnQr = document.getElementsByClassName('btn-qr')[0]

function qr() {
    modalQR.style.display = "none";
}
closeBtnQR.onclick = qr;

btnQr.onclick = function () {
    console.log(modalQR.style.display)
    modalQR.style.display = "block";
}
window.onclick = function (e) {
    if (e.target.className === 'modal-cont-qr') {
        e.target.style.display = 'none';
    }
}

// Profile
let closeBtnProfile = document.getElementsByClassName('close-profile')[0]
let modalProfile = document.getElementsByClassName('modal-cont-profile')[0]
let btnProfile = document.getElementsByClassName('btn-profile')[0];
let container = document.getElementsByClassName('modal-cont-profile')[0];
function profile() {
    modalProfile.style.display = "none";
}
closeBtnProfile.onclick = profile;
// console.log(container);
btnProfile.onclick = function () {
    container.style.backgroundColor = "white"
    modalProfile.style.display = "block";

}
window.onclick = function (e) {
    if (e.target.className === 'modal-cont-profile') {
        e.target.style.display = 'none';
    }
}

// full-screen
// let closeBtnFullScreen = document.getElementsByClassName('close-full-screen')[0]
let modalFullScreen = document.getElementsByClassName('modal-cont-full-screen')[0]
let btnFullScreen = document.getElementsByClassName('btn-full-screen')[0];
// let containerFullScreen = document.getElementsByClassName('modal-cont-full-screen')[0];
function fullScreen() {
    modalFullScreen.style.display = "none";
}
console.log(container.style);

// closeBtnFullScreen.onclick = fullScreen;
btnFullScreen.onclick = function () {
    console.log("modalProfile.style")
    modalFullScreen.style.backgroundColor = "white"
    modalFullScreen.style.display = "block";

}
window.onclick = function (e) {
    if (e.target.className === 'modal-cont-full-screen') {
        e.target.style.display = 'none';
    }
}



function previewMultiple(event) {
    var saida = document.getElementById("adicionafoto");
    var quantos = saida.files.length;
    for (i = 0; i < quantos; i++) {
        var urls = URL.createObjectURL(event.target.files[i]);
        document.getElementById("galeria").innerHTML += '<img src="' + urls + '">';
    }
}
