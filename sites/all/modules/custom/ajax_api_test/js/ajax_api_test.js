(function($){
  Drupal.behaviors.ajax_api_test = {
    attach: function(context, settings) {
      // console.log(Drupal.behaviors);
      // $('h1').hide();
      //
      // var car = {};
      // car.fiat = {
      //   model:"500",
      //   color:"white",
      //   speed:"125",
      //   honk: function(){$('a#logo').hide();},
      //   brag: function(){return this.color + this.speed;}
      // };
      // car.bmw = {model:"725", color:"black", speed:"205"};
      // console.log(car.bmw['speed']);
      // console.log(car.fiat.brag());

      $('#my-test-container').once('my-test-container', function(){
        var base = $(this).attr('id');
        var element_settings = {
          url: Drupal.settings.basePath + 'ajax/remote',
          event : 'click',
          method: 'append',
          progress: {
            type: 'throbber'
          },
          // keypress: true,
          // effect: 'none',
          // speed: 'none',
          // method: 'replaceWith'
        };
        Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);

      $(this).click();
      });



      console.log(Drupal.ajax);
    }, // End of attach function
  };
})(jQuery);