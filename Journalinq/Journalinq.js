var used = localStorage.getItem('used');
if (used === '1') {
    startPlanning()
} else {
    localStorage.setItem('set1', 0)
    localStorage.setItem('set2', 0)
    localStorage.setItem('existing', 0)
}
Notification.requestPermission().then(function (result) {
    console.log("Permission to send notifications was " + result);
    if (result = "granted" && used === 0) {
        var img = 'https://user-images.githubusercontent.com/85949157/126860491-96119244-6355-4e00-830c-e6e254a4a4ee.jpg';
        var text = 'Journalinq notifications have been setup!'
        var notification = new Notification('Journalinq', { body: text, icon: img });
        window.setTimeout(5000)
        notification.close()
    }
});
function click() {
    var element = document.getElementById('container');
    element.addEventListener('click', startPlanning);
  
}


function startPlanning() {
    localStorage.setItem('used', 1);
    window.location = 'https://The-Cloud-Dev.github.io/Planner';
}
click()
