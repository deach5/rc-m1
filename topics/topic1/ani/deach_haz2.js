(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 315,
	height: 294,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.snap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#251E25").ss(3,2,1).p("AgTAYIBRhCAgNBWIBwAXAhjgMIALhh");
	this.shape.setTransform(10.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-1.6,23.4,25.5);


(lib.legs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#251E25").s().rr(-11,-45.5,22,91,10.5);
	this.shape.setTransform(11,45.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,91);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#251E25").s().p("AhjBkQgqgqAAg6QAAg5AqgqQApgpA6AAQA6AAAqApQAqAqAAA5QAAA6gqAqQgqApg6AAQg6AAgpgpg");
	this.shape.setTransform(14.2,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.4,28.4);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#251E25").s().p("AktFoIAArPIJbAAIAALPg");
	this.shape.setTransform(30.3,36.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.5,72.2);


(lib.body2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#251E25").s().rr(-32.75,-13.75,65.5,27.5,10.5);
	this.shape.setTransform(47,31.9,0.881,1,19,0,0,23.7,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,39.7);


(lib.arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#251E25").s().rr(-30.25,-7.25,60.5,14.5,7.25);
	this.shape.setTransform(15.3,28.8,1,1,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.7,57.6);


// stage content:
(lib.deach_haz2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// snap
	this.instance = new lib.snap();
	this.instance.setTransform(188.7,149,0.195,0.195,0,0,0,-1.8,17.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({regY:17.5,scaleX:1,scaleY:1},9).wait(10).to({regX:-1.9,scaleX:0.24,scaleY:0.24},6).to({_off:true},1).wait(25));

	// legs
	this.instance_1 = new lib.legs();
	this.instance_1.setTransform(182.1,163.1,1,1,0,0,0,11,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(125));

	// body
	this.instance_2 = new lib.body2();
	this.instance_2.setTransform(179,163.8,1,1,50.4,0,0,48.6,32.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46).to({rotation:8.9,x:179.5,y:167.3},9).wait(1).to({rotation:13.2,x:178.5,y:169.4},0).wait(1).to({x:179,y:168.9},0).wait(1).to({x:178,y:168.4},0).wait(1).to({y:168.9},0).wait(1).to({x:177.5,y:168.4},0).wait(1).to({x:177,y:167.4},0).wait(1).to({x:178.5,y:169.4},0).to({regY:32.5,rotation:23.1,y:169.6},8).wait(30).to({regY:32.4,rotation:50.4,x:179,y:163.8},4).wait(21));

	// arm
	this.instance_3 = new lib.arm();
	this.instance_3.setTransform(169.6,121.4,1,1,-32.2,0,0,23.9,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({rotation:28,x:169.4,y:121.5},8).wait(4).to({regY:5.5,rotation:-2.7,x:144.7,y:135.1},9).wait(1).to({regX:24,rotation:1.5,x:146.3,y:134.7},0).wait(1).to({x:146.8,y:134.2},0).wait(1).to({x:145.8,y:133.7},0).wait(1).to({y:134.2},0).wait(1).to({x:145.3,y:133.7},0).wait(1).to({x:144.8,y:132.7},0).wait(1).to({x:146.3,y:134.7},0).to({x:147.8,y:136.7},8).wait(30).to({regX:23.9,regY:5.4,rotation:-32.2,x:169.6,y:121.4},4).wait(21));

	// head
	this.instance_4 = new lib.head();
	this.instance_4.setTransform(162.8,96.8,0.96,0.96,0,0,0,14.4,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:148.3,y:114.3},11).wait(14).to({x:162.8,y:96.8},5).wait(16).to({regY:14.4,x:140.4,y:110.2},4).to({regX:14.5,scaleX:0.96,scaleY:0.96,x:130.4,y:120.4},2).to({regX:14.4,regY:14.3,scaleX:0.96,scaleY:0.96,x:121.4,y:135.8},3).to({x:134.7,y:117.8},7).to({x:139.1,y:112.3},8).wait(9).to({x:144.1,y:109.8},4).wait(17).to({x:162.8,y:96.8},4).wait(21));

	// box
	this.instance_5 = new lib.box();
	this.instance_5.setTransform(122.4,211.8,1,1,0,0,0,30.3,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(125));

	// tri1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#251E25").ss(10,1,1).p("A0rR7MAUrgj1MAUsAj1g");
	this.shape.setTransform(158.1,144);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(125));

	// tri1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FACB2C").ss(42.2,1,1).p("A0rR7MAUrgj1MAUsAj1g");
	this.shape_1.setTransform(158.1,144);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FACB2C").s().p("A0rR7MAUrgj1MAUsAj1g");
	this.shape_2.setTransform(158.1,144);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(125));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(162.1,155.2,307.1,271.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;