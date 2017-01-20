var searchIcon = $(".search-icon");
var searchWrapper = $(".search-wrapper");
var searchBlock = $('.block');

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

const timeline = new mojs.Timeline;

timeline.add(swirlR1,swirlR2,swirlR3,swirlL1,swirlL2,swirlL3,swirlR1B,swirlR2B,swirlR3B,swirlL1B,swirlL2B,swirlL3B);

searchIcon.on("click", function(e) {
    e.preventDefault();
    searchWrapper.toggleClass('open');

    if (searchWrapper.hasClass('open')) {
        setTimeout(function() {
            timeline.play();
        },180);
    }
});