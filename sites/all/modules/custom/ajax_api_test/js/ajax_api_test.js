(function($){
  Drupal.behaviors.ajax_api_test = {
    attach: function(context, settings) {
      console.log(Drupal.behaviors);
      $('h1').hide();

      var car = {};
      car.fiat = {model:"500", color:"white", speed:"125", honk: function(){$('a#logo').hide();}};
      car.bmw = {model:"725", color:"black", speed:"205"};
      console.log(car.bmw['speed']);
      console.log(car.fiat.brag());

    }, // End of attach function
  };
})(jQuery);