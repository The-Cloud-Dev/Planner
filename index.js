
function clickHandler() {
    window.location = "https://the-cloud-dev.github.io/Planner/Journalinq";
}

function getElementClicked(elementName, functioName) {
    var element = document.getElementById(elementName);
    element.addEventListener('click', functioName);
}
getElementClicked('container', clickHandler);
