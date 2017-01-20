/*
 * EXPERIMENT 1
 
var min = -50;
var max = 50;

const circle1 = new mojs.Shape({
  shape:          'circle',
  fill:           'none',
  stroke:         'cyan',
  radius:         30,
  strokeWidth:    { 20 : 0 },
  scale:          { 0.5 : 1 },
  left:           0,
  top:            0,
  
  duration:       500,
  delay:          0,
  isShowEnd:      false
});

const circle2 = new mojs.Shape({
  shape:          'circle',
  fill:           'none',
  stroke:         'yellow',
  radius:         15,
  strokeWidth:    { 10 : 0 },
  scale:          { 0.5 : 1 },
  left:           0,
  top:            0,
  
  duration:       400,
  delay:          0,
  isShowEnd:      false
});

const circle3 = new mojs.Shape({
  shape:          'circle',
  fill:           'none',
  stroke:         'green',
  radius:         15,
  strokeWidth:    { 10 : 0 },
  scale:          { 0.5 : 1 },
  left:           0,
  top:            0,
  
  duration:       500,
  delay:          0,
  isShowEnd:      false
});

const circle4 = new mojs.Shape({
  shape:          'circle',
  fill:           'none',
  stroke:         'red',
  radius:         10,
  strokeWidth:    { 7 : 0 },
  scale:          { 0.5 : 1 },
  left:           0,
  top:            0,
  
  duration:       600,
  delay:          0,
  isShowEnd:      false
});

document.addEventListener('click', function(e) {

    circle1
      .tune({ x: e.pageX, y: e.pageY })
      .replay();
    circle2
      .tune({ x: e.pageX + Math.floor(Math.random() * (max - min + 1)) + min, y: e.pageY + Math.floor(Math.random() * (max - min + 1)) + min })
      .replay();
    circle3
      .tune({ x: e.pageX + Math.floor(Math.random() * (max - min + 1)) + min, y: e.pageY + Math.floor(Math.random() * (max - min + 1)) + min })
      .replay();
    circle4
      .tune({ x: e.pageX + Math.floor(Math.random() * (max - min + 1)) + min, y: e.pageY + Math.floor(Math.random() * (max - min + 1)) + min })
      .replay();
});


 * END EXPERIMENT 1
 */


/*
 * EXPERIMENT 2
 

const burst = new mojs.Burst({
  left: 0,
  top: 0,
  radius:   { 0: 100 },
  count:    10,
  angle: { 30: 0 },
  duration: 3000,
  children: {
    shape:      'circle',
    fill:       { 'cyan' : 'orange' },
    radius:     10,
    angle:      { 360: 0 },
    delay: 'stagger( rand(0,100) )'
  }
});

document.addEventListener('click', function(e) {

    burst
      .tune({ x: e.pageX, y: e.pageY })
      .generate() // regenerates random values
      .play();
});


 * END EXPERIMENT 2
 */