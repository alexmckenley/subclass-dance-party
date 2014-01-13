var SquareDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('square');
  this.side = 'top';
};
SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;
SquareDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('squareMove');
};
