
// ADD EVENT
let closeBtnAddEvent = document.getElementsByClassName('close-event')[0];
let modalAddEvent =
    document.getElementsByClassName('modal-cont-event')[0];
let btnAddEvent = document.getElementsByClassName('btn-add-event')[0];
// let container = document.getElementsByClassName('modal-cont-profile')[0];
//close
function addEvent() {
    modalAddEvent.style.display = 'none';
}
closeBtnAddEvent.onclick = addEvent;
btnAddEvent.onclick = function () {
    // console.log('HERE');
    modalAddEvent.style.display = 'block';
};
window.onclick = function (e) {
    if (e.target.className === 'modal-cont-event') {
        e.target.style.display = 'none';
    }
};
