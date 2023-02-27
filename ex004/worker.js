
let now
let intervalId

self.onmessage = (event) => {
    if (event.data === 'start') {
        intervalId = setInterval(() => {
                now = new Date();
                self.postMessage({ time: now });
        }, 1000);
    }
    else if(event.data === 'stop'){
        clearInterval(intervalId)
    }
}
