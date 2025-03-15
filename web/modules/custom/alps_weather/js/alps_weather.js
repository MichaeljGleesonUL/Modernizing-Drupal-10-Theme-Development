(function ($) {
  Drupal.behaviors.alps_weather = {
    attach: function (context, settings) {
      $(once('forecast-element', '.forecast-element__date', context)).on(
        'click',
        () => {
          alert(settings.alps_weather.message);
        }
      );
    }
  };
}(jQuery));

(function ($) {
  $('body').css('background-color','yellow');
}(jQuery))


jQuery(".forecast-element").hide()

jQuery(".forecast-element").slideDown("Slow")
