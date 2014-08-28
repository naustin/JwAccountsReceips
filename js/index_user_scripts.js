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
        var ctx = document.getElementById('imagehere');
        if (ctx.getContext) {
        
            var canv = ctx.getContext('2d');
     
            //Loading of the home test image - img1
            var img1 = new Image();

            //drawing of the test image - img1
            img1.onload = function () {
                //draw background image
                canv.drawImage(img1, 0, 0);
                //draw a box over the top
                canv.fillStyle = "rgba(200, 0, 0, 0.5)";
                canv.fillRect(0, 0, 500, 500);

        };

        img1.src = 'img/recibo.jpg';
    }
        });
}
 $(document).ready(register_event_handlers);
})();
