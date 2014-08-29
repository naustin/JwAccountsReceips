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
              var receiptCanvas = document.getElementById('receiptcanvas');
        if (receiptCanvas.getContext) {
            
            var ctx = receiptCanvas.getContext('2d');
            
            
            //Loading of the home test image - img1
            var img1 = new Image();
      
            //wait for image to load and then draw it on the canvas
            img1.onload = function () {
                ctx.drawImage(img1, 0, 0, 375,300);
                ctx.font="20px Georgia";
                ctx.fillText("Hello World!",10,50);
                
                Canvas2Image.saveAsPNG(receiptCanvas);  
            };

            img1.src = 'images/recibo.jpg';
            
            
             
            
    }
        });
}
 $(document).ready(register_event_handlers);
})();
