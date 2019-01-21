(function(){

    const timeline = new Timeline(),
          ball1 = document.querySelector('#ball1'),
          ball2 = document.querySelector('#ball2');
    
    function upRotate() {
        let p = timeline.currentTime / 2000;

        ball1.style.transform = `rotate(${-360 * p}deg)`
        requestAnimationFrame(upRotate);
    }

    function upBgColor() {
        let p = timeline.currentTime / 5000;

        p = Math.min(p, 1.0);
        let red = Math.round(255 * (1 - p)),
            blue = Math.round(255 * p);

        ball2.style.backgroundColor = `rgb(${red}, 0, ${blue})`;

        if(p >= 1.0) {
            timeline.currentTime = 0;
        }
        requestAnimationFrame(upBgColor);
    }

    requestAnimationFrame(upRotate);
    requestAnimationFrame(upBgColor);

    // const timeline2 = new Timeline({
    //     playbackRate: 0.5,
    //     originTime: 2000
    // })

    // console.log(timeline2.currentTime);
    // console.log(Math.round(timeline2.currentTime / 100) / 10)

    // setInterval(() => {
    //     console.log(timeline2.currentTime);
    //     console.log(Math.round(timeline2.currentTime / 100) / 10)
    // }, 1000);

    const timeline3 = new Timeline({
        playbackRate: 1.0,
        originTime: 1500
    }),
    ball3 = document.querySelector('#ball3'),
    ball4 = document.querySelector('#ball4');

    requestAnimationFrame(function update() {
        let p = timeline3.currentTime / 2000

        ball3.style.transform = `rotate(${-360 * p}deg)`;
        requestAnimationFrame(update);
    })

    requestAnimationFrame(function update() {
        let p = timeline3.currentTime / 6000;
            p = Math.min(p, 1.0);
        let red = Math.round(255 * (1 - p)),
            blue = Math.round(255 * p);

        if(p > 0) {
            ball4.style.backgroundColor = `rgb(${red}, 0, ${blue})`
        }

        if(p >= 1.0) {
            timeline3.currentTime = 0;
        }else if(p < 0) {
            timeline3.currentTime = 6000;
        }

        requestAnimationFrame(update);
    })

    ball4.addEventListener('mouseenter', (e) => {
        timeline3.playbackRate = -2.0;
    })

    ball4.addEventListener('mouseleave', (e) => {
        timeline3.playbackRate = 1.0;
    })

})();