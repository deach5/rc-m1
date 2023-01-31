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



(lib.thumb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#251E25").s().p("AgeBRQgQAAgHgTIgPiIIAAAAIBmgOIAiBzQAEAUgQATQgVAXgeAAQgPAAgUgIg");
	this.shape.setTransform(6.9,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.9,17.8);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#251E25").s().p("AlLEfIAfirQgJhEhig2QiLg2iWAVICvkvQCVALBnAiQBVA8A+CFQBbBZCSgMQEbgOEchEQAvA/hlA+IoTBRQkcAigpDUg");
	this.shape.setTransform(69.7,34.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.5,68.8);


(lib.finger2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#251E25").s().p("ACGBWQgPgCgQgFIlHiIICYgcIEpBiQgZBJg5AAIgJAAg");
	this.shape.setTransform(14.3,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-3.5,45.1,17.3);


(lib.finger1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#251E25").s().p("ABpCLIlFjwIBYgrIFhD1QgdAsgvAAQgTAAgVgGg");
	this.shape.setTransform(15.1,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-6.2,44.3,29.2);


// stage content:
(lib.deach_haz4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxzPZIR1+0IRye3g");
	mask.setTransform(157.5,149);

	// hand
	this.instance = new lib.hand();
	this.instance.setTransform(131,169.7,1,1,0,0,0,49.8,37.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.4,x:130.9,y:168.2},4).to({rotation:0,x:131,y:169.7},3).wait(2).to({rotation:3.4,x:130.9,y:168.2},4).to({rotation:0,x:131,y:169.7},3).wait(37));

	// thumb
	this.instance_1 = new lib.thumb();
	this.instance_1.setTransform(123.1,193.9,1,1,9,0,0,5.2,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:5.3,regY:-0.3,rotation:34.9,x:122.9,y:192.9},4).to({regX:5.2,regY:-0.4,rotation:9,x:123.1,y:193.9},3).wait(2).to({regX:5.3,regY:-0.3,rotation:34.9,x:122.9,y:192.9},4).to({regX:5.2,regY:-0.4,rotation:9,x:123.1,y:193.9},3).wait(14).to({rotation:16.5},4).to({rotation:9},3).wait(2).to({rotation:16.5},4).to({rotation:9},9).wait(1));

	// finger1
	this.instance_2 = new lib.finger2();
	this.instance_2.setTransform(172,166.7,1,1,0,0,0,-12.4,-6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-12.3,regY:-6,rotation:-4.5,x:172.2,y:167.7},4).to({regX:-12.4,regY:-6.1,rotation:0,x:172,y:166.7},3).wait(2).to({regX:-12.3,regY:-6,rotation:-4.5,x:172.2,y:167.7},4).to({regX:-12.4,regY:-6.1,rotation:0,x:172,y:166.7},3).wait(14).to({rotation:-11.7},4).to({rotation:0},3).wait(2).to({rotation:-11.7},4).to({rotation:0},3).wait(7));

	// finger2
	this.instance_3 = new lib.finger1();
	this.instance_3.setTransform(169.5,172.9,1,1,0,0,0,-2.6,-3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-7},4).to({rotation:0},3).wait(2).to({rotation:-7},4).to({rotation:0},3).wait(14).to({regX:-2.7,rotation:-20.2,x:169.4,y:173},4).to({regX:-2.6,rotation:0,x:169.5,y:172.9},3).wait(2).to({regX:-2.7,rotation:-20.2,x:169.4,y:173},4).to({regX:-2.6,rotation:0,x:169.5,y:172.9},3).wait(7));

	// cogs
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#251E25").s().p("AjVJuQhVhWAAh/QAAh9BVhaQBWhWB/AAQB8AABWBWQBaBaAAB9QAAB/haBWQhWBWh8AAQh/AAhWhWgAgnF1QgPAQAAAWQAAAWAPAPQAPAPAWAAQAUAAAPgPQAPgPAAgWQAAgWgPgQQgPgOgUAAQgWAAgPAOgAjVjBQhWhWAAh/QAAh9BWhaQBWhWB+AAQB9AABWBWQBZBaAAB9QAAB/hZBWQhWBWh9AAQh+AAhWhWgAgnm6QgPAQAAAWQAAAWAPAPQAOAPAWAAQAUAAAPgPQAQgPAAgWQAAgWgQgQQgPgOgUAAQgWAAgOAOg");
	this.shape.setTransform(161.2,169.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(53));

	// tri1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#251E25").ss(10,1,1).p("A0rR7MAUrgj1MAUsAj1g");
	this.shape_1.setTransform(158.1,144);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(53));

	// tri1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FACB2C").ss(42.2,1,1).p("A0rR7MAUrgj1MAUsAj1g");
	this.shape_2.setTransform(158.1,144);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FACB2C").s().p("A0rR7MAUrgj1MAUsAj1g");
	this.shape_3.setTransform(158.1,144);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(162.1,155.2,307.1,271.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;