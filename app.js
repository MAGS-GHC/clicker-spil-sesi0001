let cookieCount = 0;
let purchaseCount = 0;
let access = false


function cookieButton() {
    cookieCount++;

    doubleCookies();
    cookieCountDisplay();
    cookiePurchases();
    
    if (cookieCount > 15 && access === true) {
        cookieCount += 1;
    }    
}


function cookieCountDisplay() {
    const displayCookieCount = document.getElementById("cookieCountDisplay");
    displayCookieCount.textContent = `${cookieCount}: Cookies`;
}


function doubleCookies() {
    if (cookieCount === 15) {
        let userAnswer = prompt("Get two cookies every click if you can tell me what the blue stuffed toy eating cookies on this website is called. Aswer:");
        let answer = "Cookie Monster";

        userAnswer = userAnswer.toLowerCase();
        answer = answer.toLowerCase();

        if (userAnswer === answer) {
            alert("Correct! Enjoy you 2 cookies per click"); 
            access = true;
        } else {
            alert("Wrong! You will have to only enyoy the 1 cookie per click");
        }
    }
}


function buyCookies() {
    if (cookieCount >= 25) {
        cookieCount = cookieCount + 25;
        purchaseCount++;
        cookieCountDisplay();
        cookiePurchases();
    } else {
        alert("You do not have enough cookies to buy this")
    }
}


function cookiePurchases() {
    const displayCookiePurchases = document.getElementById("cookiePurchases");
    displayCookiePurchases.textContent = `${purchaseCount}: Purchases`;
}


let autoClickerMonitor = null;

function autoClicker() {
    if (autoClickerMonitor) {
        clearInterval(autoClickerMonitor);
        autoClickerMonitor = null;
    } else {
        autoClickerMonitor = setInterval(() => {
        cookieCount++;
        cookieCountDisplay();  
        doubleCookies();  
        }, 1000);
    }   
}


function resetButton() {
    location.reload();
}


document.getElementById("cookieButton").addEventListener("click", cookieButton);
document.getElementById("buyCookies"),addEventListener("click", buyCookies);
document.getElementById("resetButton").addEventListener("click", resetButton);
