var gRootFolder = getRootFolder();
var gAbsoluteURL = getAbsoluteURL();

function LMSInit() {
  getCourseFrame();

  if (gAPI.getData("cmi.core.lesson_status") == "not attempted") {
    gAPI.setData("cmi.core.lesson_status", "incomplete");
    gAPI.setData("cmi.core.lesson_location", "");
    gAPI.setData("cmi.suspend_data", "");
    gAPI.setData("cmi.core.score.raw", "");
  }
  getSuspendData();
  gStudentName = getStudentName();
  getRedirection();
}

function gotoIntro() {
  cc.location.replace(gAbsoluteURL + "topics/topic0/page01.html");
  firstRun = false;
}

function getRedirection(filePath) {
  var str = String(cc.location);

  gBookmark = gAPI.getData("cmi.core.lesson_location");

  if (
    gBookmark != "" &&
    gBookmark !== true
  ) {
    cc.document.getElementById("loading").style.display = "none";
    cc.location.replace(gAbsoluteURL + gBookmark);
  } else {
    cc.location.replace(gAbsoluteURL + "topics/topic0/page01.html");
  }
  // getCourseFrame();
}

function getPageName() {
  var _tmp = gPageURL.substring(
    gPageURL.lastIndexOf("/" + gRootFolder) + gRootFolder.length
  );
  _tmp = _tmp.substring(1, _tmp.length);
  return _tmp;
}

function setBookMark() {
  var _bm;
  if (typeof gPageURL != "undefined" && !gIsAssessPage) {
    _bm = getPageName();
  } else {
    _bm = "topics/topic0/page1.html";
  }
  return _bm;
}

function setSuspendData() {
  //	var _assessscores = '';
  var _data = "";
  var _ps = "";
  for (var i = 0; i < gTopicDetails.length; i++) {
    _ps += gTopicDetails[i].pageStatus;
    _data += gTopicDetails[i].status;
    if (i < gTopicDetails.length - 1) {
      _ps += "^";
      _data += ",";
    }
  }
  _data += "*" + _ps; //.toString();
  _data += "*" + firstRun;
  return _data;
}

function getSuspendData() {
  var _sd = gAPI.getData("cmi.suspend_data");

  if (_sd.length > 0) {
    var _topics = _sd.split("*")[0].split(",");
    var _ps = _sd.split("*")[1].split("^");
    var _count = 0;
    for (var i = 0; i < _topics.length; i++) {
      var _topic = gTopicDetails[i];
      _topic.setPageStatus(_ps[i]);
      _topic.setStatus(_topics[i]);

      if (_topic.xml != "") {
        _topic.setScore(_count);
        _count++;
      }
    }


  }
}

function setScore(_newscore) {
  if (_newscore > gTopicObject.score) gTopicObject.setScore(_newscore);
  setLessonStatus();
}

function setLMSScore() {
  var _totalscores = 0;
  var _totalassess = 0;
  for (var i = 0; i < gTopicDetails.length; i++) {
    var topic = gTopicDetails[i];
    if (topic.xml != "") {
      _totalassess++;
      _totalscores = _totalscores + topic.score;
    }
  }
  var _average = Math.round(_totalscores / _totalassess);
  gAPI.setData("cmi.core.score.raw", _average);
}

function getScore() {
  var _rawscore = gAPI.getData("cmi.core.score.raw");
  if (_rawscore == "") _rawscore = 0;
  return Number(_rawscore);
}

function setLessonStatus() {
  var lessonStatus = gAPI.getData("cmi.core.lesson_status");

  if (lessonStatus != "passed" && lessonStatus != "completed") {
    lessonStatus = "completed";

    for (var i = 0; i < gTopicDetails.length; i++) {
      if (
        gTopicDetails[i].status != "c") {
        lessonStatus = "incomplete";
        break;
      }
    }


    gAPI.setData("cmi.core.lesson_status", lessonStatus);

    if (lessonStatus == "passed") {
      setLMSScore();
    }
  }
}



function getStudentName() {
  var stud = gAPI.getData("cmi.core.student_name");
  var stud_array = String(stud).split(",");
  return (
    String(stud_array[1]).trim() +
    " " +
    String(stud_array[0]).trim()
  );
}

function LMSFinish() {
  if (gAPI != null && gAPI.getAPI() != null) {
    gAPI.setData("cmi.core.lesson_location", setBookMark());
    gAPI.setData("cmi.core.session_time", gAPI.getElapsedTime());
    gAPI.setData("cmi.suspend_data", setSuspendData());
    closeCourse();
  }
}



function closeCourse() {
  gAPI.closeAPI();
  //delay closing window.
  gWindowCleaner = setInterval("closeOpener()", 1000);
}

function closeOpener() {
  clearInterval(gWindowCleaner);
  try {
    window.close();
  } catch (e) {}
  try {
    parent.close();
  } catch (e) {}
  try {
    top.close();
  } catch (e) {}

}