    const countdown = document.querySelector("#countdown");
    const action = document.querySelector("#action");
    
    let time = 30;

    const timer = setInterval(function() {
        time--;
        countdown.textContent = time;

        if (time <= 10) {
            countdown.style.color = 'blue';
            countdown.style.fontSize = 50;
        }

        if (time <= 0) {
            const text = document.createElement('h1');
            text.textContent = 'Час вийшов!';
            countdown.after(text);
            clearInterval(timer);
        }
    }, 1000);
