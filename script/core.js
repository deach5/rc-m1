var gPageURL,
  gIsAssessPage,
  gTopicName,
  gCurrentPage,
  gTotalPages,
  gNextTopic,
  gTopicObject,
  gCurrentTopic,
  cc;


var gClickedExit = false;

var currentTopicNum = 0;

function initPageVars() {
  getCourseFrame();

  if (ddipad) {
    // alert(window.parent)
    $(window.parent).on("scroll", function () {
      ipadScroll();
    });
  }

  gPageURL = cc.location.href;
  gCurrentTopic = getCurrentTopic();
  gTopicObject = gTopicDetails[gCurrentTopic];
  gTopicName = getTopicName();
  gCurrentPage = getCurrentPage();
  gTotalPages = getTotalPages();
  cc.$('body').addClass('topicstatus_' + gTopicObject.status)
  if (gCurrentTopic < gTopicDetails.length) {
    gNextTopic = gTopicDetails[gCurrentTopic + 1];
  }

  $(".no-js", cc).removeClass("no-js");
}

function completeTopic() {
  gTopicObject.status = "c";

  if (gNextTopic && gNextTopic.status == "na") {
    gNextTopic.status = "i";
  } else {
    if (!gNextTopic) {
      console.log("completeCourse");
      setLessonStatus()
      exitCourse(0)
    }
  }

  //gAPI.setData("cmi.core.lesson_location", setBookMark());
}
// JavaScript Document
var DISABLENEXT = false;

function setProgess(n, b) {
  var tp, cp;
  cp = gCurrentPage;
  tp = gTotalPages;

  cc.document.getElementById("pagenumbers").innerHTML =
    gTopicObject.title + " | " + cp + " of " + tp;
}

// Replace span tags with string of username with the username <span>username</span>
function setUserName() {
  var _names = cc.getElementsByTagName("span");
  if (_names.length > 0) {
    for (var i = 0; i < _names.length; i++) {
      if (_names[i].innerHTML == "username") _names[i].innerHTML = gStudentName;
    }
  }
}

function getTopicName() {
  return gTopicObject.title;
}

function getCurrentTopic() {
  //return 0;
  var searchString = "topic";
  var startPos = gPageURL.lastIndexOf(searchString) + searchString.length;
  var endPos = gPageURL.lastIndexOf("/"); //i'll try this but it could cau;se problems

  return Number(gPageURL.substring(startPos, endPos));
}

// Get page number - Parse the page number from the URL

var ipadScroll = function () {
  var disY = this.parent.pageYOffset || this.parent.documentElement.scrollTop;

  try {
    FRAMEDOM.scrolling(disY);
  } catch (e) {}
};

function getCurrentPage() {
  var searchString = "page";
  var startPos = gPageURL.lastIndexOf(searchString) + searchString.length;
  var endPos = gPageURL.lastIndexOf(".html");
  return Number(gPageURL.substring(startPos, endPos));
}
// Get the total pages in this topic
function getTotalPages() {
  var _tot;
  if (!gIsAssessPage) {
    _tot = gTopicObject.screens;
  } else {
    if (typeof gQuiz != "undefined") {
      _tot = gQuiz.length + 3;
    }
  }
  // If it is an assessment page and array doesnt exist total pages is set in XML Parser
  return _tot;
}

// Save and Exit
// 1: Check to see if function has already run
// 2: Write data to the LMS, and then
// 3: close the window.
function exitCourse(browserUnload) {
  if (!browserUnload) {
    if (
      confirm(
        "Are you sure you wish to save and exit this module?\n\nThis may take a few moments."
      )
    )
      if (gClickedExit === false) {
        LMSFinish();
        gClickedExit = true;
      }
  } else {
    if (gClickedExit === false) {
      LMSFinish();
      gClickedExit = true;
    }
  }
}

// This function is executed once and finds the root folder of the course
// The root folder of the course is needed to parse the bookmark
function getRootFolder() {
  var folder = "";
  var urlArr = window.location.href.split("/");
  for (var i = 0; i < urlArr.length; i++) {
    if (urlArr[i].indexOf(gFrameSet) != -1) {
      folder = urlArr[i - 1] + "/";
    }
  }
  return folder;
}
// This function is executed once and finds the root folder of the course
// The root folder of the course is needed to parse the bookmark
function getAbsoluteURL() {
  var _url = String(window.location.href);
  _url = _url.split(gFrameSet)[0];
  return _url;
}