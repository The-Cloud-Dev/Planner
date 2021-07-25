
function clickHandler() {
    window.location = "/Journalinq";
}

function getElementClicked(elementName, functioName) {
    var element = document.getElementById(elementName);
    element.addEventListener('click', functioName);
}
getElementClicked('container', clickHandler);
