document.addEventListener('DOMContentLoaded', init, false);

function init() {
  const VP = document.getElementById('videoPlayer');
  const VPToggle = document.getElementById('toggleButton');
  const VP2 = document.getElementById('videoPlayer2');
  const VPToggle2 = document.getElementById('toggleButton2');

  VPToggle.addEventListener('click', function() {
    if (VP.paused) VP.play()
    else VP.pause()
  });
  VPToggle2.addEventListener('click', function() {
    if (VP2.paused) VP2.play()
    else VP2.pause()
  });
}
