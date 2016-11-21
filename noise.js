// We'll be binding two different kinds of interaction to the music boxes.
// Our initial goal will to be trigger the appropriate tone when someone clicks inside a box.
// Once that is working we will extend the interaction to be triggered when someone presses a key on the keyboard.

$(document).ready( function() {
  // $('.note').click(function(event) {
  $('.note').on('click', function(event) {

    console.log(event.which); //mouse click is '1'

    switch($(this).html()) {
      case 'c':
        noteId = '#cAudio';
        break;
      case 'd':
        noteId = '#dAudio';
        break;
      case 'e':
        noteId = '#eAudio';
        break;
      case 'f':
        noteId = '#fAudio';
        break;
      case 'g':
        noteId = '#gAudio';
        break;
      case 'a':
        noteId = '#aAudio';
        break;
      case 'b':
        noteId = '#bAudio';
        break;
      default:
        break;
    }
    $(noteId)[0].load();
    $(noteId)[0].play();

  });
});
