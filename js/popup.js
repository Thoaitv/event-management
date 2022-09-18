let closeBut = document.getElementsByClassName('close')[0]
let modal = document.getElementsByClassName('modal-cont')[0]
let delegate = document.getElementsByClassName('delegate')[0]

//close
function x() {
    modal.style.display = "none";
}
closeBut.onclick = x;

delegate.onclick = function () {
    modal.style.display = "block";
}

window.onclick = function (e) {
    if (e.target.className === 'modal-cont') {
        e.target.style.display = 'none';
    }
}
function preview() {
    frame.src = URL.createObjectURL(event.target.files[0]);
}