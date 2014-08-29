(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
         $(document).on("click", ".uib_w_9", function(evt)
        {
              var ctx = document.getElementById('receiptcanvas');
        if (ctx.getContext) {
        
            var canv = ctx.getContext('2d');
     
            //Loading of the home test image - img1
            var img1 = new Image();
      
            //wait for image to load and then draw it on the canvas
            img1.onload = function () {
                canv.drawImage(img1, 0, 0);
            };

            img1.src = 'images/recibo.jpg';
        
    }
        });
}
 $(document).ready(register_event_handlers);
})();
