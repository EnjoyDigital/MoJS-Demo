var searchIcon = $(".search-icon");
var searchWrapper = $(".search-wrapper");
var searchBlock = $('.block');
var count = 0;
var backCount = 0;

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

const searchTime = new mojs.Timeline;
const searchBurst = new mojs.Timeline;

searchTime.add(circle,line);
searchBurst.add(topLeftCornerBurst)

searchIcon.on("click", function(e) {
    e.preventDefault();
    searchWrapper.toggleClass('open');

    if (searchWrapper.hasClass('open')) {
        
    } else {
        if (backCount < 1) {
            searchTime.playBackward();
            backCount++;
            count = 0;
        }
    }
});

searchWrapper.on("click", function(e) {
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