$(document).ready(function () {
  window.dancers = [];

  //Line up button event handler
  $(".lineUpButton").on('click', function (event) {
    dancers.forEach(function (dancer) {
      dancer.lineUp();
    });
  });

  //Go back button handler
  $('.resetPostion').on('click', function (event) {
    dancers.forEach(function (dancer) {
      dancer.setPosition();
    });
  });

  //Reset dancer to mouse location
  var resetPosition = function (e) {
    this.setPosition(e.pageY - this.$node.height() / 2, e.pageX - this.$node.width() / 2);
  };

  //Add Dancer event handler
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
  });

  //Place random dancers on the page.
  $('.fillButton').on('click', function(e){
    for(var i = 0; i < 20; i++){
      var dancer = new Jigglypuff(Math.max(500, Math.random() * 1200));
      dancers.push(dancer);

      //Set the position of the new elements here
      dancer.setPosition( 100 + (Math.random() * 400), 100 + (Math.random() * 500));
      dancer.$node.addClass('track');
      dancer.toggleTracking();
      dancer.$node.on('click', Dancer.prototype.toggleTracking.bind(dancer));
      $('.blender').append(dancer.$node);
    }
  });

  //Blend Button Handler
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

  //Mouse Move handler for any dancer witht he track class
  $(document.body).on('mousemove', function(e){
    dancers.forEach(function(dancer){
      if (dancer.$node.hasClass('track')){
        resetPosition.call(dancer, e);
      }
    });
  });
});