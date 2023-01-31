var aud_player;
var vid_player;
var replayBtn;
var current_audBtn;

var allVideos = []

var setupAudio = function () {
  $("header").append('<a class="replayAudio"></a>');
  replayBtn = $(".replayAudio");

  $("audio").each(function (index, _aud) {
    aud_player = _aud;
    me_aud_player = new MediaElement(_aud, {
      success: function (mediaElement, domObject) {
        trace("success");
        mediaElement.addEventListener(
          "ended",
          function (ev) {
            audioCompletedEv(ev);
          },
          false
        );
      }
    });
  });

  $(".rcp-btn[data-mp3],.wle-btn[data-mp3]")
    .on({
      click: function () {
        swapAudio($(this).data("mp3"), this);
      }
    });

  replayBtn.on({
    click: function () {
      if (replayBtn.attr("data-mp3")) {
        swapAudio(replayBtn.attr("data-mp3"));
      }
    }
  });
};

function swapAudio(file, _btn) {
  stopAV()
  if (_btn) {
    current_audBtn = _btn;
  }
  //file = "0_test"
  aud_player.setSrc("../../assets/audio/" + file + ".mp3");

  $('body').addClass('disableEvents')
  replayBtn.attr("data-mp3", file).addClass('playing');
  setTimeout(function () {
    aud_player.play();
  }, 10);
}

function audioCompletedEv(ev) {
  // trace("audio completed");
  $('body').removeClass('disableEvents')
  replayBtn.removeClass('playing');
  if (current_audBtn) {
    if ($(current_audBtn).not('.onclick').hasClass('tracked')) {
      $(current_audBtn).trigger("checkDone");
    }
  }
  try {
    localAudioEnd()
  } catch (e) {}
}

function onPlayerReady(event) {

  //trace(event.target.getDuration())
}


function onPlayerStateChange(event) {


  //video ended
  if (event.data == 0) {
    if (event.target.a) {

      _iframe = event.target.a
    } else {

      _iframe = event.target
    }
    $(_iframe).on({
      checkDone: checkDoneEv
    });

    $(_iframe).trigger("checkDone");

    if ($(_iframe).attr('data-reveal')) {
      _reveal = $(_iframe).attr('data-reveal')
      $(_reveal).addClass('revealed')

    }

    try {
      localVideoEnd(_iframe)
    } catch (e) {}
  }
  //video played
  if (event.data == 1) {
    vid_player = event.target;
  }

}

function onPlayerError(event) {
  trace('error' + event.data);
}


function stopAV(vid) {
  trace('STOP AV')
  aud_player.pause();
  $(allVideos).each(function (index, ele) {
    try {
      if (ele != vid) {
        this.pause()
      }
    } catch (e) {}

  })
}


function setupVideo() {

  trace('-------LOAD VIDEOS---------')

  $('.yt-video').each(function () {
    vid_id = $(this).attr('data-vidID')

    _poster = $(this).attr('data-poster')
    trace(vid_id)
    //vid_id = 'test'
    _par = $(this).parent()[0]
    _player = document.createElement('video')
    _player.addEventListener('ended', htmlVidEnd, false);
    _player.src = '../../assets/videos/' + vid_id + '.mp4';
    _player.controls = 'controls'
    _player.poster = _poster || '../../assets/images/gui/info-graphic-icon_2.png';
    _player.autoplay = false;
    _player.preload = 'metadata';

    _player.onplay = function () {
      stopAV(this)
    }

    $(_player).height('auto')
    $(_player).width('100%')

    _par.player = _player

    $(this).append(_player)

    allVideos.push(_player)
    trace(_player.src)

  })


  $('.video-responsive').each(function () {
    $(this).css({
      padding: '0'
    })
  })

}

function htmlVidEnd(event) {
  if (event.target.a) {

    _iframe = event.target.a
  } else {

    _iframe = event.target
  }
  $(_iframe).on({
    checkDone: checkDoneEv
  });

  $(_iframe).trigger("checkDone");

  if ($(_iframe).attr('data-reveal')) {
    _reveal = $(_iframe).attr('data-reveal')
    $(_reveal).addClass('revealed')

  }

  try {
    localVideoEnd(_iframe)
  } catch (e) {}
}