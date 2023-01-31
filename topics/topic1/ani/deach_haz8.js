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



(lib.brain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#251E25").s().p("AAjDOQgggTADgzQAFAGALAFQAKAFAIAAIANAAQAHABAAACIAAAFQADAQAQADQAHABADgEQADgFgEAAQgagBAFgrQAEgNgEgEQAAAAgBgBQAAAAgBAAQgBAAAAAAQgBAAAAABIgCACIgFAWQgCAHgDACQgGADgPgEQgSgFgFgTQgCgIAAgcIAAg+QANAGARAMQASAHAjgPQADgBAQACQARACAKgEQALgEAGgJIALgQQAYAAAJgCIALgHQAHgFAEAHIAGANIACAFQABAJgBAIQgBAPgHAKQgHAHAAACQABALgCAMQgCAOgGAEQgFgCgBgDIgDgKQgDgOgNgJQgMgJgOgCIgCAAIgBAGQAAACAGACQAZACAIAbQAHAZgLAYQgJAUgWAKIgEABQgFACAAgHIACgUQAAgLgEgLQgEgIgHgIQgIgIgCgEQAHgSgCgNIgIgCQgEAPgCAQQgEALgXAJIACAHQAJgBAHgEIANgLQAYARgDAdQgCAcgZARQgYAQgVAAQgPAAgNgIgAhrDGQgYgRgDgcQgDgdAYgRIANALQAIAEAJABIABgHQgWgJgEgLQgDgQgEgPIgIACQgBAOAGARIgKAMQgGAHgEAJQgFALABALIABAUQAAAHgFgCIgEgBQgVgKgKgUQgLgYAHgZQAIgbAZgCQAGgCABgCIgCgGIgBAAQgPACgMAJQgNAJgDAOIgDAKQgBADgFACQgGgEgCgOQgCgMACgLIgHgJQgHgKgCgPQgBgGACgLIAAgBIABgEIAGgNQAEgGAHAEIALAHQAKACAYAAQAFAEAGAMQAFAJALAEQAKAEARgCQARgCACABQAjAPASgHQALgEAUgOIAAA+QgBAcgCAIQgFATgSAFQgPAEgGgDQgDgCgCgHIgFgWQgCgGgEAEQgCADABAHIABAHQAGArgbABQgEAAADAFQADAEAHgBQAPgDAEgQIAAgFQABgCAGgBIANAAQAIAAAKgFQALgFAFgGQADAyggAUQgOAIgOAAQgVAAgYgQgAAxAfQgbgBgOgUQgEgGAAgLIABgXIAAhbQAmgDAMANQAHAJAFAhQgPAFgIAOQgIAOALgGQAHgEAJgMQAJgIAUAJQAKAFADgFQACgFgOgFIgNgBQgEgCgCgIQgEgUgBgHQAVgMAIgWQAHgVgIgXQAegBASAfQASAegPAZQgCADgGAEIgZALIACAHIADAAQAjgLAFgWQAAgZABgJQAaADASAzQASA0gVASQgLAJgSgBQgSgCgIgLIgEgMIgEgMQgDADABAHIADAMQAEALAIAHQgFARgTAJQgSAIgHgKIABgGIADgNQADgLgEAAQgDAAgDAHIgCAIQgCAGgEAFQgRAQgZAAIgBAAgAhaAPQgFgFgCgGIgCgIQgCgHgEAAQgDAAACALIADANIABAGQgHAKgSgIQgSgJgGgRQAIgHAEgLIADgMQABgHgDgDQgCAEgCAIQgCAJgCADQgIALgSACQgSABgLgJQgVgSASg0QASgzAbgDQABAJgBAZQAFAWAjALIADAAIADgHIgagLQgFgDgDgEQgPgZASgeQASgfAfABQgJAWAIAWQAHAWAVAMQAAAHgFAUQgCAIgEACIgNABQgOAFACAFQADAFAKgFQAVgJAJAIQAFAEALAMQAKAGgIgOQgIgOgPgFQAFghAIgJQAMgNAmADIAABbIAAAXQAAALgEAGQgOAUgbABIgBAAQgZAAgQgQgAAliAIgggCIAAguIACgJIACgFIAKgOQAGgGAJgCQAWgFASAOQAYATgDAhQgEAigcAGQgJgOgRgDgAhdiXQgEgiAYgSQASgOAWAFQAJACAGAGQAEAEAGAKIACAFIACAJIAAAuQgWAAgKACQgQADgJAOQgcgGgEgig");
	this.shape.setTransform(22.6,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.2,43);


// stage content:
(lib.deach_haz8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.brain();
	this.instance.setTransform(158.4,178,2.372,2.372,0,0,0,22.8,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21));

	// Layer_1
	this.instance_1 = new lib.brain();
	this.instance_1.setTransform(158.4,178,2.372,2.372,0,0,0,22.8,21.4);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:21.5,scaleX:2.98,scaleY:2.98,x:158.5,y:178.3,alpha:0},11).wait(10));

	// tri1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#251E25").ss(10,1,1).p("A0rR7MAUrgj1MAUsAj1g");
	this.shape.setTransform(158.1,144);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(21));

	// tri1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FACB2C").ss(42.2,1,1).p("A0rR7MAUrgj1MAUsAj1g");
	this.shape_1.setTransform(158.1,144);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FACB2C").s().p("A0rR7MAUrgj1MAUsAj1g");
	this.shape_2.setTransform(158.1,144);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(162.1,155.2,307.1,271.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;