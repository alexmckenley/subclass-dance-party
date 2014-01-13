var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span></span>');
  this.$node.addClass('dancer');
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
};
Dancer.prototype = {
  step: function(){
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  },
  setPosition: function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }
};
