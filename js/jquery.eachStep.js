/*
eachStep v0.1 - http://mediaupstream.com/sandbox/jquery-eachStep
by Derek Anderson - http://mediaupstream.com



  )   _. mmeeoowwrr power!
 (___)''
 / ,_,/
/'"\ )\

MIT License
----------------------------------------------------------------------------
Copyright (c) 2011 Derek Anderson, http://mediaupstream.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

(function($){
// eachStep for Collections
$.eachStep = function(collection, duration, callback) {
	var step = '200'; // ms
	var curStep = 0; // useful for when we are passing a map rather than a collection
	if(typeof duration == "function"){
		callback = duration;
	} else {
		step = duration;
	}
	if(step == 'slow'){ step = 600; }
	if(step == 'fast'){ step = 200; }
	if(typeof callback != "function"){ return false; }
	return $.each(collection, function(i, val){
		window.setTimeout(function(){
			callback(i, val, step);
		},step*curStep);
		curStep++;
	});
};

// eachStep for jQuery Objects
$.fn.eachStep = function(duration, callback) {
	var step = '200'; // ms
	if(typeof duration == "function"){
		callback = duration;
	} else {
		step = duration;
	}
	if(step == 'slow'){ step = 600; }
	if(step == 'fast'){ step = 200; }
	if(typeof callback != "function"){ return false; }
	return this.each(function(i, el) {        
		window.setTimeout(function(){
			callback(i, el, step);
		},step*i);
	});
	
};
})(jQuery);