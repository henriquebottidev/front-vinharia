function verifyAge(answer) {
    if(answer == 'sim') {
        window.location.href = "homePage.html";
    } else if (answer == 'nao') {
        window.location.href = "https://www.google.com";
    }

    document.getElementById('popup').style.display = "none"
}