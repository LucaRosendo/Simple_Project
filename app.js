'use strict';

const switcher = document.querySelector('bnt');

switcher.addEventListener('bnt', function(){
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Escuro";
    }else{
        this.textContent = "Claro"
    }

    console.log('Current class name: ' + className);
});