//couter for topic numbers
var cnt = 0;

var Topic = Class.extend({
  //init
  init: function(_title, _screens, _status, _xml, _pre, _assess) {
    this.id = Number(cnt);
    cnt++;
    this.title = String(_title);
    this.screens = Number(_screens);
    this.status = String(_status);
    if (_xml != "") gIsAssessed = true;
    this.xml = String(_xml);
    this.score = Number(0);
    this.prereq = String(_pre);
    this.attempts = Number(0);
    this.assessmentpath = Number(_assess);
    this.removeQuestionsFromAssessment = Boolean(false);
    this.pageStatus = new Array();
    this.stops = new Array();
    //add an array element for each page within topic
    //this is for unlocking next button if page has been completed
    for (var k = 0; k < this.screens; k++) {
      this.pageStatus.push(0);
    }
    this.updateScreenStats();
  },
  setPageStatus: function(v) {
    var t = v.split(",");
    for (var k = 0; k < this.screens; k++) {
      this.pageStatus[k] = parseInt(t[k]);
    }
  },
  //set values after init
  setStatus: function(stat) {
    if (this.status == "c") return;
    var st = stat;

    if (this.prereq != "" && this.status != "c") {
      var s = this.prereq.split("*");
      for (var k = 0; k < s.length; k++) {
        if (gTopicDetails[s[k]].status != "c") {
          st = String("na");
        }
      }
    }

    this.status = String(st);
    this.updateScreenStats();
  },
  updateScreenStats: function() {
    if (this.status == "c") {
      for (var k = 0; k < this.screens; k++) {
        this.pageStatus[k] = 1;
      }
    }
  },

  setAttempts: function(attempts) {
    this.attempts = String(attempts);
    if (this.attempts >= maximumAttemptsAllowed) {
      courseStatus = "failed";
    }
  }
});
