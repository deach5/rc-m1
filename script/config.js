var CourseName = "Secure your Business ";
var gStudentName;


var gDev = false; //unlocks next buttons
var mode = "scorm";

function getMinSpecs() {
  var _popups = false;

}
var gTopicDetails = new Array();

gTopicDetails.push(new Topic("Welcome", 1, "i", "", "", ""));
gTopicDetails.push(new Topic("Hazards", 1, "na", "", "", ""));
gTopicDetails.push(new Topic("Risks", 1, "na", "", "", ""));
gTopicDetails.push(new Topic("Hazard and Risk Control", 1, "na", "", "", ""));
gTopicDetails.push(new Topic("Dangerous Goods", 1, "na", "", "", ""));
gTopicDetails.push(new Topic("Personal Protective Equipment", 1, "na", "", "", ""));
gTopicDetails.push(new Topic("Manual Handling", 1, "na", "", "", ""));
gTopicDetails.push(new Topic("Emergency Policies & Procedures", 1, "na", "", "", ""));

var gFrameSet = "index.html";

var volume = 0.8;
var muted = false;
var gIsAssessed = false;
var firstRun = false;

//completion audio on menu
//not tracked in suspend data and only used once per session
var menu_completion_audio_played = false;
// Possible completion paths
var gCompletionPaths = new Array();
var returnFromBookmark = false;