/**
 * 动画时间归一化表示
 * @param {运动总时长} duration 
 * @param {动画循环} isLoop 
 */
// function startAni(duration, isLoop) {
//     var startTime = Date.now();

//     requestAnimationFrame(function change() {
//         // 这里得出的p 可以理解为在duration的时间内p从0到1的变化
//         // p ∈ [0, 1] = (当前时间 - 开始时间)/ 总时长
//         // 这样，如果想让一个元素在规定的时间内（duration）位移200px，只需要200 * p
//         var p = (Date.now() - startTime) / duration;

//         if(p >= 1.0) {
//             if(isLoop){
//                 startTime += duration;
//                 p -= 1.0;
//             }else{
//                 p = 1.0;
//             }
//         }

//         console.log('动画已执行进度：%f', p);
//         if(p < 1.0){
//             requestAnimationFrame(change);
//         }
//     })
// }

// startAni(3000, false);

// let startTime = Date.now(),
// T = 2000;
// const ball = document.querySelector('#ball1');

// requestAnimationFrame(update);

// function update() {
//     let p = (Date.now() - startTime) / T;
    
//     // 匀加速公式st = S * p * p 例：360 * p * p
//     // 匀减速公式st = S * p * (2 - p) 例：360 * p * (2 - p)
//     ball.style.transform = `rotate(${360 * p}deg)`;
//     requestAnimationFrame(update);
// }

// 抛物线运动  抛物线运动 x 轴做匀速直线运动，y 轴做匀加速直线运动
var ballEl2 = document.querySelector('#ball2'),
    disX = -200,
    disY = 200;
var ball2 = new Ani({
    duration: 2000,
    progress: p => {
        var tx = disX * p,
        ty = disY * p * p;
        ballEl2.style.transform = `translate(${tx}px, ${ty}px)`;
    }
});
ball2.start();
ball2.addAniEnd([
    () => {
        console.log('ball2-1');
    },
    () => {
        console.log('ball2-2')
    }
])

// 正弦线运动 正弦线运动 x 轴做匀速直线运动，y 轴的运动是时间 t 的正弦函数。著作权归作者所有。
var ballEl3 = document.querySelector('#ball3'),
    distance = 100;
var ball3 = new Ani({
    duration: 2000,
    progress: p => {
        var tx = 2 * distance * p,
            ty = distance * Math.sin(2 * Math.PI * p);
        ballEl3.style.transform = `translate(${tx}px, ${ty}px)`;
    }
});
ball3.start();

// 圆周运动 根据参数方程，圆周运动 x 轴是时间 t 的余弦函数， y 轴是时间 t 的正弦函数著作权归作者所有。
var ballEl4 = document.querySelector('#ball4'),
    r = 100; // 半径
var ball4 = new Ani({
    duration: 2000,
    isLoop: true,
    progress: p => {
        var tx = r * Math.sin(2 * Math.PI * p),
            ty = -r * Math.cos(2 * Math.PI * p);
        ballEl4.style.transform = `translate(${tx}px, ${ty}px)`;
    }
});
ball4.start();

