$(document).ready(function () {
  window.dancers = [];
  $(".lineUpButton").on('click', function (event) {
    dancers.forEach(function (dancer) {
      dancer.lineUp();
    });
  });
  $('.resetPostion').on('click', function (event) {
    dancers.forEach(function (dancer) {
      dancer.setPosition();
    });
  });
  var resetPosition = function (e) {
    this.setPosition(e.pageY - this.$node.height() / 2, e.pageX - this.$node.width() / 2);
  };
  $(".addDancerButton").on("click", function (event) {
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      Math.max(500, Math.random() * 1200)
    );
    dancers.push(dancer);
    $('.blender').append(dancer.$node);
    dancer.$node.addClass('track');
    dancer.$node.on('click', function(e){
      dancer.toggleTracking();

    });
    resetPosition.call(dancer, event);
    // $(document.body).on("mousemove", resetPosition.bind(dancer));
    // dancer.$node.on('click', function (event) {
    //   $(document.body).off('mousemove');
    // });
  });
  $('.blendButton').on('click', function(e){
    $('.blender').toggleClass('blending');
    $('.blender').toggleClass('shrinking');
    $('.blenderImage').toggleClass('blending');
    setTimeout(function(){
    dancers.forEach(function(dancer){
      dancer.$node.remove();
    });
    dancers = [];
    $('.blender').toggleClass('blending');
    $('.blender').toggleClass('shrinking');
    $('.blenderImage').toggleClass('blending');
    }, 10000);
  });


  $(document.body).on('mousemove', function(e){
    dancers.forEach(function(dancer){
      if (dancer.$node.hasClass('track')){
        resetPosition.call(dancer, e);
      }
    });
  });
});