jQuery(function(e){e("table#woocommerce-price-matrix .price-selector").on("click",function(){var t=e(this).data("attribute-1-name"),a=e(this).data("attribute-2-name"),i=e(this).data("attribute-1-value"),c=e(this).data("attribute-2-value");return e("select#"+t).length&&e("select#"+a).length&&(e("select#"+t).find('option[value="'+i+'"]').prop("selected",!0),e("select#"+a).find('option[value="'+c+'"]').prop("selected",!0),e("select#"+t).trigger("change"),e("select#"+a).trigger("change")),!1})});