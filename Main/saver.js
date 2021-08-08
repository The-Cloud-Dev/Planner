function save() {
    var incriment = ""
    for (let i = 0; i < 7; i++) {
        var savervalue = document.getElementById('select' + incriment).value
        if (localStorage.getItem('select'+incriment) != savervalue && savervalue != ""){
            localStorage.setItem('select'+incriment, savervalue)
        }
        var pickervalue = document.getElementById('picker' + incriment).value
        if (localStorage.getItem('picker' + incriment) != pickervalue && pickervalue != "") {
            localStorage.setItem('picker' + incriment, pickervalue)
        }
        var taskname = document.getElementById('taskname' + incriment).value
        if (localStorage.getItem('taskname' + incriment) != taskname && taskname != "") {
            localStorage.setItem('taskname' + incriment, taskname)
        }
        var time = document.getElementById('time'+incriment).value  
        if (localStorage.getItem('time'+incriment) != time && time != ""){
            localStorage.setItem('time'+incriment,time)
        }
        localStorage.setItem('existing' + incriment, 1)
        if (incriment === "") {
            incriment = 1
        } else {
            incriment++
        }
    };

};
setInterval(save, 0)
 
