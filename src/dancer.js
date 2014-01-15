var Dancer = function(timeBetweenSteps){
  this.$node = $('<span></span>');
  this.$node.addClass('dancer');
  this.timeBetweenSteps = timeBetweenSteps;
  this.position = {
    left: 0,
    top: 0
  };
  this.step();
};
Dancer.prototype = {
  //Step the animation and move dancer into the blender using polar coordinates
  step: function(){
    var x = this.position.left;
    var y = this.position.top;
    var center = [428, 349];
    x = x - center[0]+40;
    y = y - center[1]+130;
    var r = Math.abs(Math.sqrt(Math.pow(x,2)+Math.pow(y,2)));
    if(r>272){
      r = Math.random()*100;
      var theta = Math.random()*360;
      x = Math.cos(Math.PI*theta/180)*r+428;
      y = Math.sin(Math.PI*theta/180)*r+349;
      this.setPosition(y,x);
    }
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  },
  setPosition: function(top, left){
    top = top-40 || this.position.top;
    left = left - 130 || this.position.left;
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
      distance = parseInt($('body').css('width'), 10) - parseInt(this.$node.css('width'), 10) - distance;
      side = 'left';
    }
    this.$node.css(side, distance);
  },
  toggleTracking: function(){
    var transition = 'all '+ this.timeBetweenSteps/1000+'s';
    if(!this.$node.hasClass('track')){
      transition = 'none';
    }
    this.$node.css({'-webkit-transition': transition});
    this.$node.toggleClass('track');
  }
};
