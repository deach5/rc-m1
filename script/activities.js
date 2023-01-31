//

function setupActivities() {
  $(".multichoice1").each(function (index, aContext) {
    $(".rcp-btn-lc", aContext).click(function () {
      if ($(aContext).hasClass("singleAnswer")) {
        $(".rcp-btn-lc", aContext).removeClass("selected");
      }
      $(this).toggleClass("selected");

      $(aContext)
        .find(".submit")
        .show();
    });

    $(".submit", aContext).click(function () {
      $(".rcp-btn-lc", aContext)
        .not(".correct")
        .css({
          opacity: 55
        })
        .addClass("disabled");
      $(".submit", aContext).hide();

      $(".feed").show();

      $(".rcp-btn-lc.selected", aContext).each(function (index, btn) {
        if ($(this).hasClass("correct") && $(this).hasClass("selected")) {
          trace("CORRECT");
        } else {
          trace("INCORRECT");
        }

        $(".rcp-btn-lc", aContext).addClass("disabled");
      });
    });
  });

  $(".activity").each(function (index, aAct) {
    $(".submit", aAct).addClass("disabled");
    aAct_id = "aID_" + (index + 1);



    $(".question", aAct).each(function (index, aQuestion) {

      $(aQuestion).addClass("tracked");
      aQuestion.id = aAct_id + "_qID_" + (index + 1);
      _tryagain = $(aQuestion).hasClass("tryagain");
      //OPTION CLICKED
      $(".optbtn", aQuestion).click(function () {

        totalAns = $(".cor", aQuestion).length;
        if (totalAns == 1) {
          $(".optbtn", aQuestion).removeClass("selected");
        }

        $(this).toggleClass("selected");

        if ($(".selected", aQuestion).length) {
          $(aQuestion)
            .find(".submit")
            .removeClass("disabled");
        } else {
          $(aQuestion)
            .find(".submit")
            .addClass("disabled");
        }
      });

      //SUBMIT QUESTION
      $(".submit", aQuestion).click(function () {
        $(".feedback", aQuestion).hide();
        var isCorrect = checkCorrect(
          $(".optbtn.selected", aQuestion),
          $(".optbtn.cor", aQuestion)
        );

        if (isCorrect) {
          $fb = $(".feedback.correct", aQuestion).show();
        } else {
          $fb = $(".feedback.incorrect", aQuestion).show();
        }

        if ($fb.attr("data-mp3")) {
          swapAudio($fb.attr("data-mp3"), $fb);
        }
        if (_tryagain && !isCorrect) {
          return false;
        } else {
          $(aQuestion).trigger("checkDone").addClass('showanswers');

          $(aQuestion)
            .next()
            .addClass("showThis");
        }
      });
    });
  });


  $("[rcp-show-jq]")
    .each(function (index, ele) {

    })
    .on({
      click: function () {

        $(this).addClass("done-reveal")
        _show = $($(this).attr("rcp-show-jq"));
        _show.slideDown()
      }
    });

  $("[rcp-hide-jq]")
    .each(function (index, ele) {})
    .on({
      click: function () {
        _show = $($(this).attr("rcp-hide-jq"));
        _show.slideUp()

      }
    });


  setupAccord()
}

function checkCorrect(_selected, _correct) {
  var isCorrect =
    _selected.length == _correct.length &&
    _selected.length == _selected.filter(_correct).length;

  return isCorrect;
}


! function (a) {
  function f(a, b) {
    if (!(a.originalEvent.touches.length > 1)) {
      a.preventDefault();
      var c = a.originalEvent.changedTouches[0],
        d = document.createEvent("MouseEvents");
      d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d)
    }
  }
  if (a.support.touch = "ontouchend" in document, a.support.touch) {
    var e, b = a.ui.mouse.prototype,
      c = b._mouseInit,
      d = b._mouseDestroy;
    b._touchStart = function (a) {
      var b = this;
      !e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown"))
    }, b._touchMove = function (a) {
      e && (this._touchMoved = !0, f(a, "mousemove"))
    }, b._touchEnd = function (a) {
      e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1)
    }, b._mouseInit = function () {
      var b = this;
      b.element.bind({
        touchstart: a.proxy(b, "_touchStart"),
        touchmove: a.proxy(b, "_touchMove"),
        touchend: a.proxy(b, "_touchEnd")
      }), c.call(b)
    }, b._mouseDestroy = function () {
      var b = this;
      b.element.unbind({
        touchstart: a.proxy(b, "_touchStart"),
        touchmove: a.proxy(b, "_touchMove"),
        touchend: a.proxy(b, "_touchEnd")
      }), d.call(b)
    }
  }
}(jQuery);



(function ($) {

  $.fn.shuffle = function () {

    var allElems = this.get(),
      getRandom = function (max) {
        return Math.floor(Math.random() * max);
      },
      shuffled = $.map(allElems, function () {
        var random = getRandom(allElems.length),
          randEl = $(allElems[random]).clone(true)[0];
        allElems.splice(random, 1);
        return randEl;
      });

    this.each(function (i) {
      $(this).replaceWith($(shuffled[i]));
    });

    return $(shuffled);

  };

})(jQuery);



function imgToSvg() {
  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');


    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }

      // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });


}


function setupAccord() {
  $('.setupAccord').each(function (aidx, ele) {
    _id = ele.id
    $('.card', this).each(function (cid, card) {
      card.id = 'a' + aidx + 'c' + cid
      _loop = (cid % 5) + 1
      $('.acc-btn', this).attr({
        "data-toggle": "collapse",
        "data-target": "#" + card.id + "body",
        "aria-controls": card.id + "body",
        "aria-expanded": "true"
      }).addClass('tracked onclick acc-style-' + _loop)

      $('.collapse', this).attr({
        "id": card.id + "body",
        "data-parent": "#" + _id
      })
    })
  })
}