var searchIcon = $(".search-icon");
var searchWrapper = $(".search-wrapper");
var searchBlock = $('.block');
var min = -10;
var max = 10;
var count = 0;
var backCount = 0;

const shape = new mojs.Shape({
    parent: searchWrapper,
    shape: 'circle',
    radius: 20,
    fill: 'white'
});


/* LEFT SIDE */
const swirlR1 = new mojs.ShapeSwirl({
    parent: searchWrapper,
    top: '100%',
    left: '5%',
    fill:           'rgba(255,255,255,0.75)',
    y:              { 0: -100 },
    radius:         30,
    swirlSize:      5,
    swirlFrequency: 1, 
    duration:       500,
    direction:       -1,
    degreeShift: 90
});
const swirlR2 = new mojs.ShapeSwirl({
    parent: searchWrapper,
    top: '100%',
    left: '5%',
    fill:           'rgba(255,255,255,0.75)',
    y:              { 0: -85 },
    radius:         25,
    swirlSize:      5,
    swirlFrequency: 1, 
    duration:       500,
    direction:       -1,
    degreeShift: 70
});
const swirlR3 = new mojs.ShapeSwirl({
    parent: searchWrapper,
    top: '100%',
    left: '5%',
    fill:           'rgba(255,255,255,0.75)',
    y:              { 0: -70 },
    radius:         20,
    swirlSize:      5,
    swirlFrequency: 1, 
    duration:       1000,
    direction:       -1,
    degreeShift: 50
});

const swirlL1 = new mojs.ShapeSwirl({
    parent: searchWrapper,
    top: '100%',
    left: '5%',
    fill:           'rgba(255,255,255,0.75)',
    y:              { 0: -100 },
    radius:         30,
    swirlSize:      30,
    swirlFrequency: 1, 
    duration:       1000,
    direction:       -1,
    degreeShift: -90
});
const swirlL2 = new mojs.ShapeSwirl({
    parent: searchWrapper,
    top: '100%',
    left: '5%',
    fill:           'rgba(255,255,255,0.75)',
    y:              { 0: -85 },
    radius:         30,
    swirlSize:      30,
    swirlFrequency: 1, 
    duration:       500,
    direction:       -1,
    degreeShift: -10
});
const swirlL3 = new mojs.ShapeSwirl({
    parent: searchWrapper,
    top: '100%',
    left: '5%',
    fill:           'rgba(255,255,255,0.75)',
    y:              { 0: -70 },
    radius:         30,
    swirlSize:      30,
    swirlFrequency: 1, 
    duration:       500,
    direction:       -1,
    degreeShift: -30
});



/* RIGHT SIDE */
const swirlR1B = new mojs.ShapeSwirl({
    parent: searchWrapper,
    top: '100%',
    left: '95%',
    fill:           'rgba(255,255,255,0.75)',
    y:              { 0: -100 },
    radius:         30,
    swirlSize:      5,
    swirlFrequency: 1, 
    duration:       500,
    direction:       -1,
    degreeShift: -90
});
const swirlR2B = new mojs.ShapeSwirl({
    parent: searchWrapper,
    top: '100%',
    left: '95%',
    fill:           'rgba(255,255,255,0.75)',
    y:              { 0: -85 },
    radius:         25,
    swirlSize:      5,
    swirlFrequency: 1, 
    duration:       500,
    direction:       -1,
    degreeShift: -70
});
const swirlR3B = new mojs.ShapeSwirl({
    parent: searchWrapper,
    top: '100%',
    left: '95%',
    fill:           'rgba(255,255,255,0.75)',
    y:              { 0: -70 },
    radius:         20,
    swirlSize:      5,
    swirlFrequency: 1, 
    duration:       1000,
    direction:       -1,
    degreeShift: -50
});

const swirlL1B = new mojs.ShapeSwirl({
    parent: searchWrapper,
    top: '100%',
    left: '95%',
    fill:           'rgba(255,255,255,0.75)',
    y:              { 0: -100 },
    radius:         30,
    swirlSize:      30,
    swirlFrequency: 1, 
    duration:       1000,
    direction:       -1,
    degreeShift: 90
});
const swirlL2B = new mojs.ShapeSwirl({
    parent: searchWrapper,
    top: '100%',
    left: '95%',
    fill:           'rgba(255,255,255,0.75)',
    y:              { 0: -85 },
    radius:         30,
    swirlSize:      30,
    swirlFrequency: 1, 
    duration:       500,
    direction:       -1,
    degreeShift: 10
});
const swirlL3B = new mojs.ShapeSwirl({
    parent: searchWrapper,
    top: '100%',
    left: '95%',
    fill:           'rgba(255,255,255,0.75)',
    y:              { 0: -70 },
    radius:         30,
    swirlSize:      30,
    swirlFrequency: 1, 
    duration:       500,
    direction:       -1,
    degreeShift: 30
});

const ripple = new mojs.Shape({
    parent: searchWrapper,
    top: 0,
    left: 0,
    shape: 'circle',
    fill: 'none',
    strokeWidth: 2,
    stroke: 'rgba(0,0,0,0.3)',
    scale: { 0: 1},
    radius: 80,
    opacity: { 1: 0},
    duration: 1000,
});

const ripple2 = new mojs.Shape({
    parent: searchWrapper,
    top: 0,
    left: 0,
    shape: 'circle',
    fill: 'none',
    strokeWidth: 2,
    stroke: 'rgba(0,0,0,0.3)',
    scale: { 0: 1},
    radius: 80,
    opacity: { 1: 0},
    delay: 200,
    duration: 1000
});

const ripple3 = new mojs.Shape({
    parent: searchWrapper,
    top: 0,
    left: 0,
    shape: 'circle',
    fill: 'none',
    strokeWidth: 2,
    stroke: 'rgba(0,0,0,0.3)',
    scale: { 0: 1},
    radius: 80,
    opacity: { 1: 0},
    delay: 400,
    duration: 1000
});

const circle = new mojs.Shape({
    parent: searchBlock,
    top: 24,
    left: 275,
    radius: 9,
    shape: 'circle',
    fill: 'none',
    stroke: '#00aef0',
    strokeWidth: 3,
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : 0 },
    duration: 500,
    angle: 60,
    isShowStart: false,
    isShowEnd: true
});

const line = new mojs.Shape({
    parent: searchBlock,
    top: 34,
    left: 283,
    radius: 3,
    shape: 'line',
    fill: 'none',
    stroke: '#00aef0',
    strokeWidth: 3,
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : 0 },
    duration: 300,
    delay: 500,
    angle: 230,
    isShowStart: false,
    isShowEnd: true
});

const topLeftCornerBurst = new mojs.Burst ({
    parent: searchBlock,
    top: 0,
    left: 0, 
    radius: {0: 50},
    count: 3,
    angle:  { '-60': '-90' },
    degree: {0: 30},
    children: {
        shape: 'circle',
        fill: 'white',
        strokeWidth: 5,
        duration: 400,
        stroke: 'white'
    }
});

const timeline = new mojs.Timeline;

timeline.add(swirlR1,swirlR2,swirlR3,swirlL1,swirlL2,swirlL3,swirlR1B,swirlR2B,swirlR3B,swirlL1B,swirlL2B,swirlL3B);

const searchTime = new mojs.Timeline;
const searchBurst = new mojs.Timeline;

searchTime.add(circle,line);
searchBurst.add(topLeftCornerBurst)

searchIcon.on("click", function(e) {
    e.preventDefault();
    searchWrapper.toggleClass('open');

    if (searchWrapper.hasClass('open')) {
        setTimeout(function() {
            timeline.play();
        },180);
    } else {
        if (backCount < 1) {
            searchTime.playBackward();
            backCount++;
            count = 0;
        }
    }
});

searchWrapper.on("click", function(e) {
    ripple
        .tune({ x: e.pageX, y: e.pageY })
        .replay();
    ripple2
        .tune({ x: e.pageX, y: e.pageY })
        .replay();
    ripple3
        .tune({ x: e.pageX, y: e.pageY })
        .replay();

    if (backCount < 1) {
        searchTime.playBackward();
        backCount++;
        count = 0;
    }
});

$('form').on("click", function(e) {
    e.stopPropagation();
});

$('input').on('click', function(e) {
    if (count < 1) {
        searchTime.play();
        count++;
        backCount = 0;
    }
    searchBurst.play();
});
