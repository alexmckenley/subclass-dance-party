var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span></span>');
  this.$node.addClass('dancer');
  //this.setPosition(top - this.$node.height()/2, left);
  this.timeBetweenSteps = timeBetweenSteps;
  // this.$node.css({'-webkit-transition': 'all '+this.timeBetweenSteps/1000+'s'});
  this.step();
  this.position = {
    top: top,
    left: left
  };
};
Dancer.prototype = {
  step: function(){
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  },
  setPosition: function(top, left){
    top = top || this.position.top;
    left = left || this.position.left;
    this.$node.css({
      top: (top),
      left: (left)
    });
    this.position = {top: top, left: left};
  },
  lineUp: function(){
    var side = this.side;
    var distance = 40;
    if (this.side === 'right'){
      distance = parseInt($('body').css('width'))-parseInt(this.$node.css('width'))-distance;
      side = 'left';
    }
    this.$node.css(side, distance);
    //this.$node.css('-webkit-transition', side+' 2.5s');
  }
};
