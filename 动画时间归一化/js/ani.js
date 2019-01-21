class Ani {
    constructor(opt) {
        this.duration = opt.duration || 0;
        this.isLoop = opt.isLoop || false;
        this.progress = opt.progress;
        this.aniEnd = [];
        this.flag = true;
        this.startTime = 0;
        this.aniID = '';
    }

    init() {
        let p = Math.min(1.0, (Date.now() - this.startTime) / this.duration),
        progress = this.progress,
        aniEnd = this.aniEnd;
        
        if (p >= 1.0 && this.isLoop) {
            this.startTime += this.duration;
            p -= 1.0;
        }
        if (p < 1.0) {
            (progress && typeof(progress) === "function") && progress(p);
            this.aniID = requestAnimationFrame(this.init.bind(this));
        }else{
            console.log('end');
            aniEnd.forEach(callback => {
                (callback && typeof(callback) === "function") && callback()
            });
            this.flag = true;
        }
    }

    addAniEnd(callback) {
        callback instanceof Array ? this.aniEnd = this.aniEnd.concat(callback) : this.aniEnd.push(callback)
    }

    start() {
        if(!this.flag) return;
        this.flag = false;
        this.startTime = Date.now();
        this.aniID = requestAnimationFrame(this.init.bind(this));
    }

    stop() {
        cancelAnimationFrame(this.aniID);
    }
}

// class AniQueue extends Ani {
//     constructor(animators) {
//         super(animators);
//         this.animators = animators || [];
//     }

//     append() {
//         let args = [].slice.call(arguments);
//         this.animators.push.apply(this.animators, args);
//         console.log(this.animators);
//     }

//     flush() {
//         if (this.animators.length > 0) {
//            let play = () => {
//                let animator = this.animators.shift();

//                if(animator instanceof Ani) {
//                    animator.addAniEnd(() => {
//                        this.animators.length && play();
//                    })
//                }else{
//                    animator.apply(this);
//                    this.animators.length && play()
//                }
//            }
//            play();
//         }
//     }
// }