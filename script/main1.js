function countTimer(duration) {
    let time = duration;

    const interval = setInterval(() => {
        if (time === 30 * 60) {
            console.log("Залишилось менше половини часу!");
        }
        if (time <= 0) {
            clearInterval(interval);
            console.log("Час вийшов!");
        } else {
            const hours = Math.floor(time / 3600);
            const mins = Math.floor((time % 3600) / 60);
            const sec = time % 60;
            console.log(`${hours}:${mins < 10 ? '0' : ''}${mins}:${sec < 10 ? '0' : ''}${sec}`);
            
            time--;
        }
    }, 1000); 
}

const timerSec = 60 * 60;

countTimer(timerSec);