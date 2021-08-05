$(document).ready(function () {
    anime({
        targets: '.nadeshiko',

        translateX: [
            { value: 250, duration: 230, delay: 230},
            { value: 0, duration: 230, delay: 220 }
        ],
        rotate: [
            { delay: 200, value: '+=1turn', duration: 400},
        ],

        scaleX: [
            {value: -1, duration: 0, delay: 300},
            {value: 1, duration: 300, delay: 200},
            {value: -1, duration: 100, delay: 300}
        ],
        loop: true,
        easing: 'easeInOutSine'
    });

    
    anime({
        targets: '#frame1',
        opacity: [
            {value: 0, delay: 130, duration: 600},
            {value: 1, duration: 500},
        ],
        loop: true,
    });

    

    anime({
        targets: '.rin_container',
        translateX: [
            {value: 20, duration: 230, delay: 400},
            {value: 0, duration: 230, delay: 330}
        ],

        rotate: [
            {value:'20deg', duration: 150, delay: 230},
            {value:'0deg', duration: 400, delay: 200}
        ],

        loop: true,
        easing: 'easeInOutSine'

    })
});