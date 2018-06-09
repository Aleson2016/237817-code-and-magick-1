'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var MARGIN = 50;
var GAP = 10;
var FONT_GAP = 15;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var renderCloud = function(ctx, x, y, width, height, gap, margin, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x + margin, y);
  ctx.lineTo(x + width - margin, y);
  ctx.quadraticCurveTo(x + width - gap, y + gap, x + width, y + margin);
  ctx.lineTo(x + width, y + height - margin);
  ctx.quadraticCurveTo(x + width - gap, y + height - gap, x + width - margin, y + height);
  ctx.lineTo(x + margin, y + height);
  ctx.quadraticCurveTo(x + gap, y + height - gap, x, y + height - margin);
  ctx.lineTo(x, y + margin);
  ctx.quadraticCurveTo(x + gap, y + gap, x + margin, y);
  ctx.closePath();
  ctx.fill();
}

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  
  for(var i=0; i<arr.length; i++) {
    if(arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X+GAP, CLOUD_Y+GAP, CLOUD_WIDTH, CLOUD_HEIGHT, GAP, MARGIN, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, GAP, MARGIN, '#fff');
  
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура, Вы победили!', CLOUD_X + MARGIN*2, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов', CLOUD_X + MARGIN*2, CLOUD_Y + FONT_GAP*3);
  
  var maxTime = getMaxElement(times);
  
  for(var i=0; i<names.length; i++) {
    //var number = Math.floor(Math.random()*101);
    //не знаю, как соединить рандомное число со знаком процента, чтобы сработал цвет
    
    ctx.fillStyle = 'hsl(240, 50%, 50%)';
    
    if(names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';   
    }
    
    ctx.fillRect(CLOUD_X + MARGIN + (BAR_WIDTH + MARGIN)*i, CLOUD_Y + FONT_GAP*5 + (BAR_HEIGHT - (BAR_HEIGHT*times[i])/maxTime), BAR_WIDTH, (BAR_HEIGHT*times[i])/maxTime);
    
    ctx.fillStyle = '#000';
    ctx.textBaseline = 'hanging';
    ctx.fillText(names[i], CLOUD_X + MARGIN + (BAR_WIDTH + MARGIN)*i, (CLOUD_Y + CLOUD_HEIGHT) - FONT_GAP*2);
  } 
}
 