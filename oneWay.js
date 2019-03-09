// red box
anime({
    // specifiy targets you want to manipulate
    targets: 'div.box.red',
    // array with two objects because we want it to run twice
        // value is as far as we want it go
            // duration in miliseconds (typically the same value)
    translateY: [
        // goes down
        { value: 200, duration: 500},
        // goes up
        { value: 0, duration: 800}
    ],
    // rotate target
        // ex: rotate: '1turn' or set '1turn' as the value
            // set as object with values
    rotate:{
        value: '1turn',
        // effect
        easing: 'easeInOutSine'
    }
});

// blue box
anime({
    targets: 'div.box.blue',
    // set delay for all methods so multiple targets
        //  won't run at the same time
    translateY: [
        { value: 200, duration: 500, delay: 1000},
        { value: 0, duration: 800}
    ],
    rotate:{
        value: '1turn',
        easing: 'easeInOutSine',
        delay: 1000
    }
});

// green box
anime({
    targets: 'div.box.green',
    translateY: [
        // set delay to wait for the first two targets
        { value: 200, duration: 500, delay: 2000},
        { value: 0, duration: 800}
    ],
    rotate:{
        value: '1turn',
        easing: 'easeInOutSine',
        delay: 2000
    }
});

// yellow box
anime({
    targets: 'div.box.yellow',
    translateY: [
        // set delay to wait for the first two targets
        { value: 200, duration: 500, delay: 3000},
        { value: 0, duration: 800}
    ],
    rotate:{
        value: '1turn',
        easing: 'easeInOutSine',
        delay: 3000
    }
});