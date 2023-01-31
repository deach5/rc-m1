var gCourse;

function trace(a) {

  //console.log(trace.caller);
  console.log(a);
}
if (parent.gTopicDetails) {
  gCourse = parent;
} else {
  trace("no parent");
}

$(document).ready(function () {

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('body').addClass('mobile')

  } else {
    $('body').addClass('desktop')
  }
  if (gCourse) {
    gCourse.initPageVars();
    gCourse.gPageURL = document.location.href;
    $(".var-course-title").html(gCourse.CourseName);
    $(".student-name").html(gCourse.gStudentName.split(' ')[0]);
    setupMenu();
    if (gCourse.gDev) {
      $("body ").addClass('dev')
    }
  } else {
    $("body ").addClass('dev')
  }

  var parent = document.getElementById("main");
  var child = document.getElementById("page");


  if (navigator.userAgent.indexOf('Edge') == -1) {
    child.style.right = child.clientWidth - child.offsetWidth + "px";
  }



  setupScreens();
  setupRCP()

  $(".hamburger ").on("click", function (e) {
    $("header").toggleClass("hidden");
    $(this).toggleClass("is-active");
  });



  //$(".rcp-btn").attr({ href: "javascript:void(0)" });

  $("#page").on("scroll", function (e) {
    if ($(".hamburger").hasClass("is-active")) {
      $(".hamburger")[0].click();
    }
    if (this.scrollTop < 20) {
      if (!$(".hamburger").hasClass("is-active")) {
        $(".hamburger")[0].click();
      }
    }
  });
  setupVideo();
  setupPage();
});

function setupRCP() {
  $("[rcp-show]")
    .each(function (index, ele) {})
    .on({
      click: function () {
        current_audBtn = this;
        $(this).addClass("done-reveal")

        _delay = $(this).attr("rcp-delay")
        _show = $($(this).attr("rcp-show"));
        _show.addClass('revealed')
      }
    });


  $("[rcp-hide]")
    .each(function (index, ele) {})
    .on({
      click: function () {

        _show = $($(this).attr("rcp-hide"));
        _show.removeClass('revealed')
        _show.addClass('unrevealed')
      }
    });
}



function setupMenu() {
  $("#footermenu").html("");

  $("#menu").html("");
  $(gCourse.gTopicDetails).each(function (index, ele) {
    var _a = $('<a class="topic-btn" href="javascript:void(0)"></a>');
    _a.html(ele.title)
      .addClass("status_" + ele.status)
      .attr({
        href: "../../topics/topic" + index + "/page01.html"
      });

    $("#footermenu").append(_a.clone());

    $("#menu").append(_a);
  });
  if (gCourse.gDev) {
    $(".screen").each(function (index, _screen) {
      sbid = $(this).attr('data-sbid') || index
      $(this).append(
        '<span class="progress-box">T' +
        gCourse.gCurrentTopic +
        "S" +
        Number(index) +
        "</span>"
      );
    });
  }

  $('#menu').find('.topic-btn').eq(gCourse.gCurrentTopic).addClass('currentTopic');
  $('#footermenu').find('.topic-btn').eq(gCourse.gCurrentTopic).addClass('currentTopic')
}

function refresh_setupMenu() {
  $(gCourse.gTopicDetails).each(function (index, ele) {
    var _f = $(".topic-btn", "footer")[index];
    var _h = $(".topic-btn", "header")[index];
    var ani = ''
    if (_h.className.indexOf('_na') && ele.status == 'i') {
      ani = ' animate'
    }

    $([_f, _h])
      .attr("class", "")
      .addClass("topic-btn")
      .addClass("status_" + ele.status + ani);
  });

  $('#menu').find('.topic-btn').eq(gCourse.gCurrentTopic).addClass('currentTopic');
  $('#footermenu').find('.topic-btn').eq(gCourse.gCurrentTopic).addClass('currentTopic')
}



$.fn.sliderThis = function (options) {
  var defaults = {
    override: false,
    customeEv: false,
    nText: "Next &#62;",
    bText: "&#60; Previous",
    nbClass: "moArrows",
    delaySlide: 0,
    progress: true
  };

  var options = $.extend(defaults, options);

  selection = this;

  return this.each(function (index, asection) {
    bnclick = function () {
      p = $(this).parent();
      if (this.next) {
        p.removeClass("slideIn");
        p.addClass("slideOut");
        p.next().addClass("slideIn");
        try {
          sliderNextClick(this);
        } catch (e) {}

        if (!p.next().next().length) {
          try {
            lastSection(p.next());
          } catch (e) {}
        }
      } else {
        p.removeClass("slideIn");
        p.prev().removeClass("slideOut");
        p.prev().addClass("slideIn");
        try {
          sliderBackClick(this);
        } catch (e) {}
      }
    };

    var nb = $("<a></a>")
      .addClass("nb")
      .addClass(options.nbClass)
      .prop({
        id: "nextb_" + Number(index + 1),
        next: true,
        href: "javascript:void(0)"
      })
      .html(options.nText);

    if (options.customeEv) {
      nb.on({
        click: options.customeEv
      });
    } else {
      nb.on({
        click: bnclick
      });
    }

    var bb = $("<a></a>")
      .addClass("bb")
      .addClass(options.nbClass)
      .prop({
        id: "backb_" + Number(index + 1),
        next: false,
        href: "javascript:void(0)"
      })
      .html(options.bText);

    if (options.customeEv) {
      bb.on({
        click: options.customeEv
      });
    } else {
      bb.on({
        click: bnclick
      });
    }

    if (!$(asection).prev().length) {
      $(asection).append(nb);
    }
    if ($(asection).prev().length && $(asection).next().length) {
      $(asection).append(nb);
      $(asection).append(bb);
    }
    if (!$(asection).next().length) {
      $(asection).append(bb);
    }

    if (options.progress) {
      //trace(Number(index + 1) + "/" + $(selection).length);
      $(this)
        .prepend('<p class="caro-progress"></p>')
        .find(".caro-progress")
        .html(Number(index + 1) + "/" + $(selection).length);
    }
  }); //end return
};



$.fn.checkSelection = function (options) {

  var defaults = {
    checkClass: '.done'
  };

  var options = $.extend(defaults, options);

  selection = this;

  return selection.length == selection.filter(options.checkClass).length


}