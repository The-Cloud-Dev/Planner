function removeElement() {
    if (localStorage.getItem('existing' + incriment) === '1') {
        document.getElementById('picker' + incriment).value = localStorage.getItem('picker' + incriment)
        document.getElementById('taskname' + incriment).value = localStorage.getItem('taskname' + incriment)
        document.getElementById('time' + incriment).value = localStorage.getItem('time' + incriment)
        document.getElementById('select' + incriment).value = localStorage.getItem('select' + incriment)
    }
    var incriment = ""
    for (let i = 0; i < 7; i++) {
        if (localStorage.getItem('existing' + incriment) === '1') {
            document.getElementById('picker' + incriment).value = localStorage.getItem('picker' + incriment)
            document.getElementById('taskname' + incriment).value = localStorage.getItem('taskname' + incriment)
            document.getElementById('time' + incriment).value = localStorage.getItem('time' + incriment)
            document.getElementById('select' + incriment).value = localStorage.getItem('select' + incriment)
        }
        var myvalue = document.getElementById('taskname' + incriment).value
        if (document.getElementById('check' + incriment).checked === true) {
            document.getElementById('check' + incriment).checked = false;
            document.getElementById('taskname' + incriment).value = ""
            var img = 'https://user-images.githubusercontent.com/85949157/126860491-96119244-6355-4e00-830c-e6e254a4a4ee.jpg';
            if (myvalue != "") {
                var text = 'Your task ' + myvalue + ' has been completed!'
            } else {
                var text = 'Your task has been completed!'
            }
            if (notification != undefined) {
                notification.close();
            };
            var notification = new Notification('Journalinq', { body: text, icon: img });
            localStorage.setItem('set1' + incriment, 0)
            localStorage.setItem('set2' + incriment, 0)
            localStorage.setItem('picker' + incriment, '')
            localStorage.setItem('time'+incriment,'')
            localStorage.setItem('taskname' + incriment, '')
            document.getElementById('picker' + incriment).value = localStorage.getItem('picker' + incriment)
            document.getElementById('taskname' + incriment).value = localStorage.getItem('taskname' + incriment)
            document.getElementById('time' + incriment).value = localStorage.getItem('time' + incriment)
            window.setTimeout(5000)
            notification.close()
        }
        
        if (localStorage.getItem('old name' + incriment) != myvalue || localStorage.getItem('old date'+incriment) != document.getElementById('picker' + incriment).value || localStorage.getItem('old time'+incriment) != document.getElementById('time'+incriment).value) {
            localStorage.setItem('set2' + incriment, 0)
            localStorage.setItem('set1' + incriment, 0)
        }
        if (document.getElementById('picker' + incriment).value < toset && document.getElementById('picker' + incriment).value != "" && myvalue != "" && localStorage.getItem("set1" + incriment) != '1') {
            var img = 'https://user-images.githubusercontent.com/85949157/126860491-96119244-6355-4e00-830c-e6e254a4a4ee.jpg';
            if (myvalue != "") {
                var text = 'Your task ' + myvalue + ' is overdue!'
            } else {
                var text = 'Your task is overdue!'
            }
            if (notification != undefined) {
                notification.close();
            };
            var notification = new Notification('Journalinq', { body: text, icon: img });
            window.setTimeout(5000)
            notification.close()
            localStorage.setItem("set1" + incriment, 1)
            localStorage.setItem('old name' + incriment, myvalue)
            localStorage.setItem('old date' + incriment, document.getElementById('picker' + incriment).value)
            localStorage.setItem('old time'+incriment, document.getElementById('time' + incriment).value)
        }
        var t = new Date()
        if (toset === document.getElementById("picker" + incriment).value && document.getElementById('time' + incriment).value < t.getHours() + ":" + t.getMinutes() && localStorage.getItem('set1' + incriment) != "1" && document.getElementById('time' + incriment).value != "") {
            var img = 'https://user-images.githubusercontent.com/85949157/126860491-96119244-6355-4e00-830c-e6e254a4a4ee.jpg';
            if (myvalue != "") {
                var text = 'Your task ' + myvalue + ' is overdue!'
            } else {
                var text = 'Your task is overdue!'
            }
            if (notification != undefined) {
                notification.close();
            };
            var notification = new Notification('Journalinq', { body: text, icon: img });
            window.setTimeout(5000)
            notification.close()
            localStorage.setItem("set1" + incriment, 1)
            localStorage.setItem('old name' + incriment, myvalue)
            localStorage.setItem('old date' + incriment, document.getElementById('picker' + incriment).value)
            localStorage.setItem('old time'+incriment, document.getElementById('time' + incriment).value)
        }
        if (toset === document.getElementById("picker" + incriment).value && myvalue != "" && localStorage.getItem("set2" + incriment) != '1' && t.getHours()+":"+t.getMinutes() < document.getElementById('time'+incriment).value) {
            var img = 'https://user-images.githubusercontent.com/85949157/126860491-96119244-6355-4e00-830c-e6e254a4a4ee.jpg';
            if (myvalue != "") {
                var text = 'Your task ' + myvalue + ' is due today!'
            } else {
                var text = 'Your task is due today!'
            }
            var notification = new Notification('Journalinq', { body: text, ic on: img });
            window.setTimeout(5000)
            notification.close()
            localStorage.setItem('old name' + incriment, myvalue)
            localStorage.setItem('old date' + incriment, document.getElementById('picker' + incriment).value)
            localStorage.setItem('old time'+incriment, document.getElementById('time' + incriment).value)
            localStorage.setItem("set2" + incriment, 1)
        }
        if (incriment === "") {
            incriment = 1
        } else {
            incriment++
        }
    }
};
var inc = ""
for (let i = 0; i < 7; i++) {
    var today = new Date()
    var toset = today.toISOString().split('T')[0];
    document.getElementsByName("dateofbirth" + inc)[0].setAttribute('min', toset);
    if (localStorage.getItem('existing' + inc) === '1') {
        document.getElementById('picker' + inc).value = localStorage.getItem('picker' + inc)
        document.getElementById('taskname' + inc).value = localStorage.getItem('taskname' + inc)
        document.getElementById('time' + inc).value = localStorage.getItem('time' + inc)
        document.getElementbyId('select' +inc).value = localStorage.getItem('select'+ inc)
    }
    if (inc === "") {
        inc = 1
    } else {
        inc++
    }
};
setInterval(removeElement, 4000)
