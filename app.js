window.onload = function() {
    var buttons = document.getElementsByClassName('fire-button')
    for (var i = 0; i < buttons.length; i++) {
        new BurningElement(buttons[i])
    }
}