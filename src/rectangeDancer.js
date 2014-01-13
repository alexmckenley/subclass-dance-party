var RectangleDancer = function(top, left, timeBetweenSteps){
  SquareDancer.apply(this, arguments);
  this.$node.addClass('rectangle');
  this.$node.css({'-webkit-transition': '-webkit-transform '+this.timeBetweenSteps/1000+'s'});
  this.side = 'left';
};
RectangleDancer.prototype = Object.create(SquareDancer.prototype);
RectangleDancer.prototype.constructor = RectangleDancer;
RectangleDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('rectangleMove');

};
