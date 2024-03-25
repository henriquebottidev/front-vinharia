function verifyAge(answer) {
    if(answer == 'sim') {
        window.location.href = "homePage.html";
    } else if (answer == 'nao') {
        window.location.href = "https://www.google.com";
    }

    document.getElementById('popup').style.display = "none"
}

function goStore(answer) {
    if(answer == 'loja') {
        window.location.href = "storePage.html"; 
    } else if (answer == 'nao') {
        window.location.href = "https://www.google.com";
    }
    document.getElementById('loja').style.display = "none"
}
