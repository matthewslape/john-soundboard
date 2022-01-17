const playSound = e => {
    let keyCode;
    if (e.type === 'keydown') {
      keyCode = e.keyCode;
    } else {
      keyCode = e.target.getAttribute('data-key') || e.target.parentNode.getAttribute('data-key');
    }
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`div[data-key="${keyCode}"]`);

    if (!audio){
      key.classList.add('pressed');
      setTimeout(function() {
        key.classList.remove('pressed');
      }, 5000);
      return;
    } else {
      key.classList.add('pressed');
      audio.currentTime = 0;
      audio.play();

      //audio.addEventListener('ended', removeTransition(key));
      //audio.onended = removeTransition(key);
    }
}

/*const pressGrow = n => {
  let keyCode;
    if (n.type === 'keydown') {
      keyCode = n.keyCode;
    } else {
      keyCode = n.target.getAttribute('data-key') || n.target.parentNode.getAttribute('data-key');
    }
  var button = document.querySelector(`div[data-key="${keyCode}"]`);
  button.classList.add('pressed');

  setTimeout(function() {
    button.classList.remove('pressed');
  }, 5000);

}*/

function removeTransition() {
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => {
    if (key.classList.contains('pressed')){
      key.classList.remove('pressed');
    } else {
      return;
    }
  })
}

/*const audios = Array.from(document.querySelectorAll('.audio'));
const keys = Array.from(document.querySelectorAll('.key'));

audios.forEach(audio => {
  audio.addEventListener('ended', removeTransition(keys))
});*/

window.addEventListener('keydown', playSound);
window.addEventListener('touchstart', playSound);
window.addEventListener('click', playSound);