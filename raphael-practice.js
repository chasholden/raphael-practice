var element = $('#container');
var paper = Raphael( element, 0, 500 );
var rect1 = paper.rect( 0, 300, 500, 20 );
rect1.attr( {
    fill: 'rgb( 0, 200, 0 )',
  'stroke-width': 0
} );
var rect2 = paper.rect( 20, 200, 100, 100 );
rect2.attr( {
    fill: 'rgb( 200, 200, 0 )',
  'stroke-width': 0
} );
var rect3 = paper.rect( 60, 260, 20, 40 );
rect3.attr( {
    fill: 'rgb( 200, 0, 0 )',
  'stroke-width': 0
} );
var rect4 = paper.rect( 30, 220, 20, 20 );
rect4.attr( {
    fill: 'rgb( 0, 0, 200 )',
  'stroke-width': 0
} );
var rect5 = paper.rect( 90, 220, 20, 20 );
rect5.attr( {
    fill: 'rgb( 0, 0, 200 )',
  'stroke-width': 0
} );
var rect6 = paper.rect( 300, 180, 30, 120 );
rect6.attr( {
    fill: 'rgb( 139,69,19 )',
  'stroke-width': 0
} );
var rect7 = paper.rect( 100, 170, 10, 30 );
rect7.attr( {
    fill: 'rgb( 250, 0, 0 )',
  'stroke-width': 0
} );
var circle1 = paper.circle( 315, 150, 60 );
circle1.attr( {
    'stroke-width': 0,
    fill: 'rgb( 0, 100, 0 )'
} );
var smoke = paper.path( [ 'M', 105, 170,
                         'R', 130, 100, 70, 80, 90, 15 
                     ] );
smoke.attr( {
    stroke: 'black',
} );