window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return; // Stop the function from running
  audio.currentTime = 0; // rewind to the start
  audio.play();
});
