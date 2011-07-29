$.eachStep
==============
Step through each element and execute a callback function in order
*by Derek Anderson - http://mediaupstream.com*


### BASIC USAGE

**For use with jQuery Objects**  

    $('img').eachStep(600, function(i, el, duration){
      $(el).fadeIn(duration);
    });

**For use with Arrays or Objects (Collections/Maps)**  

    var collection = [
       '#777777', '#444444', '#222222', '#249adb', 
       '#fc41a9', '#ffe200', '#faa653', '#CA355B'
    ];
    $.eachStep(collection, '800', function(key, val, duration){
      // each step of the collection animate the .demo backgroundColor
      // (requires the jquery.color plugin)
      $('.demo').animate({'backgroundColor': val}, duration);
		});
		
----

`$.eachStep( Duration, function(index, Element, duration) )`

**Duration** Optional string or number determining how long the step will run. default: 200ms <sup>1</sup>  
**function(index, Element, duration)** A function to execute for each matched element.
  
  
`jQuery.eachStep( Collection, Duration, function(index, Element, duration) )`

**Collection** The object or array to iterate over.  
**Duration** Optional string or number determining how long the step will run. default: 200ms <sup>1</sup>  
**function(index, Element, duration)** A function to execute for each matched element.
        
  
<sup>1</sup> - Due to limitations with `window.setTimeout` the actual duration time may be capped at around 4ms to 10ms. (see: <a href="https://developer.mozilla.org/En/Window.setTimeout#section_7">https://developer.mozilla.org/En/Window.setTimeout#section_7</a>)
  
Click `view source` on the DEMOs above for more usage examples!
