var searchWrapper = $('.search-wrapper');

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
});

$('form').on("click", function(e) {
    e.stopPropagation();
});
