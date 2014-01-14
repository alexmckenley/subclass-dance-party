var Jigglypuff = function(top, left, timeBetweenSteps){
  NyanCat.apply(this, arguments);
  this.$node.addClass('jiggly');
  this.side = 'left';
};
Jigglypuff.prototype = Object.create(NyanCat.prototype);
Jigglypuff.prototype.constructor = Jigglypuff;
Jigglypuff.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('rotate');
};
