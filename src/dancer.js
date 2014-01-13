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
  },
  lineUp: function(){
    var side = this.side;
    var distance = 40;
    if (this.side === 'right'){
      distance = parseInt($('body').css('width'))-parseInt(this.$node.css('width'))-distance;
      side = 'left';
    }
    this.$node.css(side, distance);
    this.$node.css('-webkit-transition', side+' 2.5s');
  }
};
