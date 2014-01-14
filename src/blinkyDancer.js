var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('blinky');
  this.side = 'right';
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('hidden');
};
