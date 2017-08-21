$.fn.bigstars = function() {
    return $(this).each(function() {
      var val = parseFloat($(this).html());
		  val = Math.round(val * 2) / 2;
      var size = Math.max(0, (Math.min(10, val))) * 16;
      var $span = $('<span />').width(size);
      jQuery(this).html($span);
    });
}
