console.log("In Theme World");

let theme = localStorage.getItem('theme');
if (theme == null) {
    setTheme('green');
} else {
    setTheme(theme);
}

let themedot = document.getElementsByClassName('theme-dot')

for (var i = 0; i < themedot.length; i++) {
    themedot[i].addEventListener('click', function() {
        var mode = this.dataset.mode;
        console.log('Option Clicked: ', mode);
        setTheme(mode)
    })
}

function setTheme(mode) {

    if (mode == 'green') {
        document.getElementById('theme-style').href = 'style.css';
    }
    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css';
    }
    if (mode == 'diff') {
        document.getElementById('theme-style').href = 'diff.css';
    }
    if (mode == 'orange') {
        document.getElementById('theme-style').href = 'orange.css';
    }
    localStorage.setItem('theme', mode);
}