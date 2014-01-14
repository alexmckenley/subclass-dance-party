var NyanCat = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('nyan');
  this.side = 'top';
};
NyanCat.prototype = Object.create(Dancer.prototype);
NyanCat.prototype.constructor = NyanCat;
NyanCat.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('bounce');
};
