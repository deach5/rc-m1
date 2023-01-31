var activeScreen;
var showcc = false;

var setupScreens = function () {
  $(".screen").each(function (index, _screen) {
    // _screen.id = "screen" + (index + 1);
    $screen = $(_screen);

    $screen
      .append('<a class="next-btn"></a>')
      .find(".cc-container")
      .wrapInner('<div class="cc-inner"></div>');

    $screen.find(".next-btn").on({
      click: function () {
        _nextscreen = $(this)
          .closest(".screen")
          .next();

        _page = $('#page')

        if (_nextscreen.length) {

          if ($(_nextscreen).attr("data-mp3")) {
            swapAudio($(_nextscreen).attr("data-mp3"), this);
          }
          try {
            localNextScreen(_nextscreen[0])
          } catch (e) {}


          try {
            start = _page[0].scrollY || _page[0].pageYOffset || _page[0].scrollTop;
            stop = _nextscreen[0].getBoundingClientRect().top + start - 100;
            $('#page').eq(0).animate({
              scrollTop: stop - 100
            }, 1000, function () {
              _nextscreen.trigger("unlock");
            });

          } catch (e) {}



        } else {
          completeTopic();
        }
      }
    });

    $screen.find(".cc-container").append('<a class="cc-close-btn">X</a>');

    $screen.on({
      checkCompletetion: checkCompletetionEv,
      //addscrollController: scrollControllerEv,
      unlock: screenUnlockEv
    });

    $screen.trigger("addscrollController");
  });


  setupAudio();
  setupHeader();
  setupActivities();


  $(".tracked")
    .not('.yt-video')
    .on({
      checkDone: checkDoneEv
    });


};

//CHECK IF TRACKED
var checkCompletetionEv = function () {
  trace("CHECK SCREEN " + this.id + ' - tracked: ' + $(".tracked", this).length + ' :DONE:' + $(".done", this).length);

  if ($(".tracked", this).length == $(".done", this).length) {
    $(this)
      .addClass("completed")
      .next()
      .addClass("active")
      .trigger("checkCompletetion");




    if (!$(this).next().length) {

      //completeTopic();
    }
  }
};


var screenUnlockEv = function () {

  $(this).addClass("unlocked");

  trace(this.id)
  try {

    localUnblockScreen($(this))
  } catch (e) {}

  if ($(this).hasClass("last")) {
    $(this).trigger("screenCompleted");
  }
};
var controller = new ScrollMagic.Controller();

scrollControllerEv = function () {
  var scene = new ScrollMagic.Scene({
      triggerElement: this
    })
    //.setTween(tween)
    .addTo(controller)
    //   .addIndicators()
    .on("enter", screenEnterEv)
    .on("leave", screenLeaveEv);
};

var screenEnterEv = function (ev) {
  var $screen = $(ev.target.triggerElement());

  $(".scrollOn").removeClass("scrollOn");
  if (!$screen.hasClass("locked")) {
    $screen.addClass("scrollOn");
  }
};

var screenLeaveEv = function (ev) {
  var $screen = $(ev.target.triggerElement());
  $screen.removeClass("scrollOn");
};


function completeTopic() {

  gCourse.completeTopic();

  try {
    jump("footer", {
      scrollThis: $("footer")[0],
      offset: -100,
      duration: 100,
      callback: function () {
        $(".cover").addClass("unlocked");
        refresh_setupMenu();
      }
    });
  } catch (e) {

    $('footer').eq(0).animate({
      scrollTop: 0
    }, 1000, function () {
      $(".cover").addClass("unlocked");
      refresh_setupMenu();
    });
  }

}



var setupHeader = function () {
  $(".close-caption-btn,.cc-close-btn").on({
    click: function () {
      $("body").toggleClass("show-cc");

      if (gCourse) {
        gCourse.showcc = !gCourse.showcc;
      }

    }
  });

  if (gCourse && gCourse.showcc) {
    $("body").addClass("show-cc");
  }



  $(".exit-btn").on({
    click: function () {
      try {
        gCourse.exitCourse()
      } catch (e) {}
    }
  });

  $('.help-btn').on({
    click: function () {
      if (gCourse) {
        var popupWindow = window.open(gCourse.gAbsoluteURL + 'assets/help/help.html', 'win ', "scrollbars=yes,height=500,width=650");
      } else {
        var popupWindow = window.open('../../assets/help/help.html', 'win ', "scrollbars=yes,height=500,width=768");
      }
      popupWindow.focus()

    }
  })


  $("#screen1")
    .trigger("unlock")
    .trigger("checkCompletetion")
    .next()
    .trigger("unlock");

  if ($('body').hasClass('topicstatus_c')) {
    $(".screen")
      .trigger('unlock')
      .addClass('completed')
    $(".cover").addClass("unlocked");
  }
};

function checkDoneEv(e) {
  //trace(e.target);
  $(this)
    .addClass("done")
    .closest(".screen")
    .trigger("checkCompletetion");
}