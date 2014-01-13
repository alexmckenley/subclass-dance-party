var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};

BlinkyDancer.prototype = inherit(Dancer.prototype);

BlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  this.$node.toggle();
};