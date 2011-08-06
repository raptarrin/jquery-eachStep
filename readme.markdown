$.eachStep
==============
Step through each element and execute a callback function in order
*by Derek Anderson - http://mediaupstream.com*


### BASIC USAGE

**For use with jQuery Objects**  

    $('img').eachStep(600, function(i, el, duration){
      $(el).toggleClass('rotate');
    });

**For use with Arrays or Objects**  

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

**Duration** Optional string or number determining how long the step will run. default: 200ms
**function(index, Element, duration)** A function to execute for each matched element.
  
  
`jQuery.eachStep( Collection, Duration, function(index, Element, duration) )`

**Collection** The object or array to iterate over.  
**Duration** Optional string or number determining how long the step will run. default: 200ms
**function(index, Element, duration)** A function to execute for each matched element.

For demos and usage / code see: http://mediaupstream.com/sandbox/jquery-eachStep/