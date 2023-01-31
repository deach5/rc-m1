(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 315,
	height: 294,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.jaw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC52B").s().p("AgFCjQhTgGhEg+QhAg8ACg3QACg0gFgoQgEghgHgOIgCgEIANAFQAPAGAIAGQALAJAFAIQAFALgBAUIgCAhIgBAXQAHAoAuAeQA1AkA7AEQA2AEA3gaQAxgXAVghQANgVADgaQACgKAAgLIAAgIQABgWADgMIADgLQAIgPAYgHIAEgBQAFgDAFgFIABAAIgKAgQgHAggBAjIgCBBQgEAagRAVQgtA3gWARQg3ArhBAAIgMgBgAAKAEIAbgDIAAAwQgMACgPABgAgEA0QgNgBgNgCIAAguQAOABAOAAIADAAIAAAwgAAuAAQASgCAQgEIAAAsQgSAGgQADgAhIAjIAAgmIACABIAfAEIAAAtQgSgEgPgIgABXgIIAegMIAAAoQgOAIgQAHgAhsAQIAAgfQAQAHALADIAAAkQgMgGgPgJgAB7gWIAZgNIAAAdQgJAKgQALgAh/ADIgMgIIAAgYIAWALIAAAcgAihgqIARAKIAAAWQgLgNgGgTgACZgmIAOgIQgEAQgJAPIgBABg");
	this.shape.setTransform(29.9,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgHFgQgzAAhMg1Qg7gogfgnIgEgFIgBABIgkhFIAAgBIgBgEIAAgBQgHgcgCg0QgBgpgEgtIgBgJIAAAAIABk+IIyAAIgBBWIABAAIAABVIgBCTIAAACIAAAAQgCALgDAJQgNAjgBAyQAAAfgGAeIgBAHIgbBLQgTAigbASQhJAwgQAIQg1AdgtAAIgCgBgAjsgaQAHAOAEAfQAFAogCA0QgCA5BAA8QBEA+BTAGQBHAFA9gvQAWgRAtg3QARgVAEgaIAChDQABgjAHggIAKgeIgBAAQgFAGgFACIgEABQgYAHgIANIgDALQgDAMgBAWIAAAIQAAALgCAKQgDAagNAVQgVAjgxAXQg3Aag2gEQg7gEg1gkQgugggHgoIABgXIACghQABgUgFgLQgFgGgLgJQgIgFgPgHIgNgFIACAEgAAGCJIAAAwQAPAAAMgDIAAgwgAgiC2QANADANAAIAHAAIAAgwIgFAAQgOAAgOgBgAAqCFIAAAvQAQgCASgHIAAguQgQAEgSAEgAhMCoQAPAIASAEIAAgtIgfgGIgCgBgABTB7IAAAtQAQgHAOgIIAAgqgAhwCVQAPAJAMAGIAAgmQgLgDgQgHgAB3BtIAAAnQAQgLAJgMIAAgdgAiPB+IAMAKIAKAHIAAgeIgWgLgAiUB5IAAgWIgRgKQAGATALANgACVBdIAAAYIABgBQAJgPAEgQg");
	this.shape_1.setTransform(30.3,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,-29.7,56.5,70.6);


(lib.drip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AghA5QgKgbATgoQAQglAIgkQAAAIADAHQAJAbARAlQAQAigPAbQgPAbgSAAQgVAAgJgbg");
	this.shape.setTransform(3.8,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.6,16.9);


// stage content:
(lib.deach_haz5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// guides
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC52B").s().p("AgkGuIAAgxIAhACIAAAwQgSAAgPgBgAAEF/IAbAAIAAAtIgbADgAhJGnIgFgBIAAgvIAhAFIAAAxQgNgCgPgEgAAoF+QAUgCAOgCIAAApQgQAEgSAEgAhyGZIAAgqQAMAEAPACIAAAuQgOgEgNgGgABRF4QAOgCAQgGIAAAlIgeALgAiRGKIAAglIAWAIIAAApIgWgMgAB1FuQAMgEANgGIAAAhIgZAMgAipF6IAAgfIATAJIAAAjIgTgNgACTFhIAPgJIACAIQABALgBAMIgRALgAhkFbQgsgNgKgeIgHgXQgDgMgIgGQgRgMgbgMIgrgRQgKgFgJgIIgBAAIAAAAQgLgJgIgNQgSgfAJgjQAUg2AIgfQAQg1gHgtQgFgngPgqQgNgjAAgNIgGASQgGAWAAAaQAAAJAQBHQALA0gMAXQgRgYgQglQgehPALhMQANhkBVhBQBfhJCegGQCUgFBmBRQBQBAAVBTQAPA7gVBRQgQA8geA2QgEgKgCgUQgEgmALguQALgvgGgzIgHgqIgQApQgRAygDAoQgEA6ADAhQADAtAQATQAVAYADAmQAEAtgcAaQgUATg8ATQg1APgEAOIgKAmQgIASgZAJQglAMgzADIgUABQgyAAgpgNgAgIBlQgOACgOARQgQAWgLA1QgMA2ALAIQAMAJAPgJQAPgKAHgXQAHgXAEACQACAAAEAQQAQAtAkgIQAYgFgXhFQgYhGgdgJQgCgCgEAAIgEAAgAiNhIQgkADgcAaQghAgAIA+QAIBCAoASQAmASAlgbQAigZASgwQAQgrgSghQgQgggkgOQgKgDgNAAIgJAAgABphLQgkAPgQAgQgSAhAQAqQASAxAiAYQAmAbAlgSQAogSAIhCQAIg/ghgfQgcgagkgDgAjwERIAAAAIANAFg");
	this.shape.setTransform(158.2,159.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgqHOQgbgFgkgNQgbgFgxghIgDgLIACghQACgUgGgLQgEgIgLgJQgIgGgPgGIgOgGIABABQgggHgggQIAAgBQhigwgNgEQgfgKgrAHQgqAGgVARQgVARghgLQgjgLgLggQgbhNA7gTIgEgHQgEgPgBgUQgCgpASgZQAUgfAuAOQAtANARAjQARAlAjAkQAlAmAmAQIAOAGIACgQQAGgigahGQgkhjgCgIQgThNAWhPQAhh4B5hCQCMhNCtAYQCwAYBeBvIAKALQAMAPAKAUQAgA/AABTQAABUgUA6QgLAhgWAwQgKAfAAAoIAAABIANgGQAlgQAlgmQAjgkARglQARgjAtgNQAugOAVAfQARAZgCApQgBAUgEAPIgEAHQA7ATgbBNQgLAggjALQghALgVgRQgVgRgqgGQgrgHgfAKQgNAEhZAtIgGADQgpAWgvAMQgYAGgIAQQgHANgBAoIgBAVQguAegtANQgjAPgjAEIgRAAQgWAAgSgDgAghHFQAPACARAAIAAgxIgggCgAAHHGIAbgCIAAguIgbAAgAhLG9IAEACQAQAEANABIAAgxIghgFgAAqGVIAAAtQATgDAPgFIAAgpQgOADgUABgAhvGxQANAGAOAEIAAguQgQgDgLgDgABTGQIAAAoIAegMIAAgkQgQAFgOADgAiPGhIAXAMIAAgpIgXgHgAB4GGIAAAjIAZgNIAAghQgOAHgLAEgAinGSIATAMIAAgjIgTgIgACVF5IAAAgIARgKQACgMgBgMIgDgIIgPAKgAkgh4QAPArAGAmQAGArgPA4QgJAegTA2QgJAjASAfQAIANAKAJIAAAAIABABQAJAHALAFIArASQAbAMAQAMQAIAGAEAMIAGAWQAKAeAsAOQAzAPA9gDQAzgDAkgNQAZgIAIgTIALglQAEgOA0gQQA9gSAUgUQAbgagEgtQgDgmgUgYQgQgSgEgtQgDgkAEg3QAEgpAQgxIAQgqIAIAqQAGA0gLAuQgLAtAEAoQACATAEALQAeg4APg7QAVhQgPg7QgVhUhPg/QhmhRiWAFQidAFheBJQhVBBgOBkQgLBNAfBOQAPAmARAYQANgXgMg1QgPhHAAgIQgBgaAHgXIAGgSQAAANAMAjgAg9EZQgLgJALg1QALg2ARgVQAOgRAOgCQAFgBAEACQAdAKAYBFQAYBFgYAFQgkAIgRgtQgEgPgCgBQgEgBgHAWQgHAYgPAKQgHAEgHAAQgGAAgGgEgAi0CfQgngTgIhBQgIhBAhgeQAbgaAlgCQASgCANAFQAlAOAQAfQASAigQArQgSAwgiAYQgXAQgXAAQgPAAgPgGgABpCPQgigYgSgwQgQgrASghQAQggAlgOIAfgDQAlACAbAaQAhAegHBBQgIBBgoATQgPAHgPAAQgXAAgXgRg");
	this.shape_1.setTransform(157.9,157.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(70));

	// Layer 2
	this.instance = new lib.jaw();
	this.instance.setTransform(158.1,205.3,1,1,0,0,0,30.4,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({y:215.3},4).to({y:205.3},4).wait(1).to({y:215.3},4).to({y:205.3},4).wait(1).to({y:215.3},17).to({y:205.3},7).wait(18));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AH2CSQgagRgHgdQgJghgJgSQgMgXgTgLQgVgMiqhVIgBABIAbhLQDVBsAMACQAHABA/gFQA1gFAVAJQAxAVgVAyQgIAVgZAJIgYAFIgEAsQgKAtgYAGQgJACgIAAQgUAAgSgLgAosCbQgYgGgKgtIgEgsQgLAAgMgFQgZgJgJgVQgVgyAxgVQAVgJA1AFQA/AFAHgBQAMgCDKhmIAkBFIi+BgQgTALgMAXQgJASgIAhQgIAdgaARQgSALgTAAQgJAAgJgCg");
	this.shape_2.setTransform(157.9,220.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(70));

	// Layer 4
	this.instance_1 = new lib.drip();
	this.instance_1.setTransform(139.8,208.1,0.349,0.349,0,0,0,3.7,8.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({y:258.1},21).to({_off:true},1).wait(5).to({_off:false,regX:3.8,regY:8.6,scaleX:0.41,scaleY:0.41,x:111.8,y:174.1},0).to({y:259.1},32).to({_off:true},1).wait(2));

	// drip
	this.instance_2 = new lib.drip();
	this.instance_2.setTransform(183,208.1,0.675,0.675,0,0,0,3.8,8.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({y:258.1},22).to({_off:true},1).wait(23));

	// tri1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#251E25").ss(10,1,1).p("A0rR7MAUrgj1MAUsAj1g");
	this.shape_3.setTransform(158.1,144);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(70));

	// tri1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FACB2C").ss(42.2,1,1).p("A0rR7MAUrgj1MAUsAj1g");
	this.shape_4.setTransform(158.1,144);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FACB2C").s().p("A0rR7MAUrgj1MAUsAj1g");
	this.shape_5.setTransform(158.1,144);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(162.1,155.2,307.1,271.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;