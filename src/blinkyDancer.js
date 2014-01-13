var BlinkyDancer = function(top, left, timeBetweenSteps){
  this.constructor.apply(this, arguments);
  this.oldStep = Dancer.step;
  this.$node.addClass('blinky');
  this.timeBetweenStops = timeBetweenSteps;
};
BlinkyDancer.prototype = new Dancer();
BlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this, this.timeBetweenStops);
  this.$node.toggle();
};
