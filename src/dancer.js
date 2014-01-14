var Dancer = function(timeBetweenSteps){
  this.$node = $('<span></span>');
  this.$node.addClass('dancer');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
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
  },
  toggleTracking: function(){
    var transition = 'all '+this.timeBetweenSteps/1000+'s';
    if(!this.$node.hasClass('track')){
      transition = 'none';
    }
    this.$node.css({'-webkit-transition': transition});
    this.$node.toggleClass('track');
  }
};
